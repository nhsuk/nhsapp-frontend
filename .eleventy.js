import path from 'path'
import nunjucks from 'nunjucks'
import sass from 'sass'
import { EleventyHtmlBasePlugin } from '@11ty/eleventy'
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight'
import markdownIt from 'markdown-it'
import anchor from 'markdown-it-anchor'

import matter from 'gray-matter'
import fs from 'fs'
import prettier from 'prettier'

const nunjucksEnv = nunjucks.configure([
  // Our own components which we will ship in the release
  'src/components',
  'src/styles',

  // Includes specific to our documentation
  'docs/_includes',
  'docs/assets',

  // NHS.UK frontend components
  'node_modules/nhsuk-frontend/packages/components'
])

export default function (eleventyConfig) {
  // Configure a custom nunjucks environment
  eleventyConfig.setLibrary('njk', nunjucksEnv)

  // Watch for changes in these directories and files
  eleventyConfig.addWatchTarget('./src/')
  eleventyConfig.addWatchTarget('./docs/assets/')

  // Add images to docs
  eleventyConfig.addPassthroughCopy('docs/assets/images')

  // Add syntax highlighting to code blocks
  eleventyConfig.addPlugin(syntaxHighlight)

  eleventyConfig.addTemplateFormats('scss')
  eleventyConfig.addExtension('scss', {
    outputFileExtension: 'css',
    compile: async function (inputContent, inputPath) {
      let parsed = path.parse(inputPath)
      if (parsed.name.startsWith('_')) {
        return
      }
      let result = sass.compileString(inputContent, {
        // Allow us to import scss files relative to the project root
        loadPaths: ['.']
      })
      return async (data) => {
        return result.css
      }
    }
  })

  // We need this HtmlBase plugin for serving our docs on github pages at a subdirectory
  // https://www.11ty.dev/docs/plugins/html-base/
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)

  eleventyConfig.addShortcode('example', async function (examplePath) {
    const exampleFile = fs
      .readFileSync(path.join('docs/examples', examplePath), 'utf8')
      .trim()
    let { data, content: nunjucksCode } = matter(exampleFile)

    const rawHtmlCode = nunjucksEnv.renderString(nunjucksCode)
    const prettyHtmlCode = await prettier.format(rawHtmlCode, {
      parser: 'html'
    })

    const href = `/examples/${examplePath.replace('.njk', '')}`

    const templateData = {
      examplePath,
      href,
      id: href.replace(/\//g, '-'),
      title: data.title,
      htmlCode: prettyHtmlCode,
      nunjucksCode: nunjucksCode,
      figmaLink: data.figmaLink,
      vueLink: data.vueLink
    }
    return nunjucksEnv.render('example.njk', templateData)
  })

  eleventyConfig.setLibrary('md', markdownIt({ html: true }).use(anchor))

  return {
    dir: {
      input: 'docs',
      output: 'dist/docs'
    },
    markdownTemplateEngine: 'njk'
  }
}
