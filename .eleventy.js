import path from 'path'
import nunjucks from 'nunjucks'
import sass from 'sass'
import fs from 'fs-extra'
import { EleventyHtmlBasePlugin } from '@11ty/eleventy'
import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight'
import markdownIt from 'markdown-it'
import anchor from 'markdown-it-anchor'

import matter from 'gray-matter'
import prettier from 'prettier'

// Import redirects from separate file
import redirects from './redirects.js'

const nunjucksEnv = nunjucks.configure([
  // Our own styles and assets
  'src/styles',
  'src/assets',

  // Includes specific to our documentation
  'docs/_includes',
  'docs/assets',

  // NHS.UK frontend components
  'node_modules/nhsuk-frontend/packages/components',
  'node_modules/nhsuk-frontend/packages/macros'
])

export default function (eleventyConfig) {
  // Copy components before build starts
  eleventyConfig.on('eleventy.before', async () => {
    try {
      const sourceDirs = {
        components: 'src/components',
        styles: 'src/styles',
        assets: 'src/assets'
      }

      const targetBase = 'docs/_includes/nhsapp'
      await fs.ensureDir(targetBase)

      for (const [name, sourceDir] of Object.entries(sourceDirs)) {
        const targetDir = `${targetBase}/${name}`
        if (await fs.pathExists(sourceDir)) {
          await fs.copy(sourceDir, targetDir)
          console.log(`✅ ${name} synced to ${targetDir}`)
        }
      }
    } catch (error) {
      console.error('❌ Error syncing components:', error)
    }
  })

  // Configure a custom nunjucks environment
  eleventyConfig.setLibrary('njk', nunjucksEnv)

  // Watch for changes in these directories and files
  eleventyConfig.addWatchTarget('./src/')
  eleventyConfig.addWatchTarget('./docs/assets/')
  eleventyConfig.addWatchTarget('./redirects.js') // Watch redirects file for changes

  // Add images to docs
  eleventyConfig.addPassthroughCopy('docs/assets/images')

  // Add NHSUK frontend JS components to docs
  eleventyConfig.addPassthroughCopy({
    'node_modules/nhsuk-frontend/packages': 'nhsuk-frontend'
  })

  // Add NHSUK frontend compiled JS/CSS to docs
  eleventyConfig.addPassthroughCopy({
    'node_modules/nhsuk-frontend/dist': 'nhsuk-frontend/dist'
  })

  // Add syntax highlighting to code blocks
  eleventyConfig.addPlugin(syntaxHighlight)

  // Make redirects available as global data
  eleventyConfig.addGlobalData('redirects', redirects)

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

  // Add GitHub URL filter
  eleventyConfig.addFilter('toGitHubUrl', function (path) {
    // Remove leading './' if present
    if (path.startsWith('./')) {
      path = path.slice(2)
    }

    return `https://github.com/nhsuk/nhsapp-frontend/edit/main/${path}`
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
      vueLink: data.vueLink,
      mobile: data.mobile,
      mobileHeader: data.mobileHeader,
      hub: data.hub,
      backlink: data.backlink || data.backLink || false,
      backLinkHref: data.backLinkHref,
      backLinkText: data.backLinkText
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
