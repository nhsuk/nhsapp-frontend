import path from 'path'
import nunjucks from 'nunjucks'
import * as sass from 'sass'
import fs from 'fs-extra'
import { EleventyHtmlBasePlugin } from '@11ty/eleventy'
import markdownIt from 'markdown-it'
import anchor from 'markdown-it-anchor'
import { highlight } from 'nhsuk-frontend/lib/nunjucks/filters/highlight.mjs'
import { highlighter } from 'nhsuk-frontend/lib/highlighter/index.mjs'
import swift from 'highlight.js/lib/languages/swift'

highlighter.registerLanguage('swift', swift)

import matter from 'gray-matter'
import prettier from 'prettier'

const nunjucksEnv = nunjucks.configure(
  [
    // Our own styles and assets
    'src/styles',
    'src/assets',

    // Includes specific to our documentation
    'docs/_includes',
    'docs/assets',

    // NHS.UK frontend components (updated for v10)
    'node_modules/nhsuk-frontend/dist', // allow resolving paths like nhsuk/macros/attributes.njk
    'node_modules/nhsuk-frontend/dist/nhsuk',
    'node_modules/nhsuk-frontend/dist/nhsuk/components',
    'node_modules/nhsuk-frontend/dist/nhsuk/macros'
  ],
  {
    // Match nhsuk-frontend's own nunjucks environment settings.
    // Without these, block tags emit extra newlines which markdown-it
    // misinterprets as paragraph breaks inside HTML blocks.
    lstripBlocks: true,
    trimBlocks: true
  }
)

// Register the NHS frontend highlight filter for syntax highlighting in code examples.
// Blank lines are encoded as \n&#10; so that markdown-it does not terminate
// the surrounding HTML block early (type-6 blocks end at the first blank line).
// The pattern \n[ \t]*\n covers both bare \n\n and lines that contain only
// spaces/tabs (e.g. trailing-whitespace blank lines). Inside <pre>, &#10;
// decodes to a newline, so the visual output is unchanged.
const highlightFilter = highlight.bind({ env: nunjucksEnv })
nunjucksEnv.addFilter('highlight', (code, language) => {
  const safe = nunjucksEnv.getFilter('safe')
  return safe(String(highlightFilter(code, language)).replace(/\n[ \t]*\n/g, '\n&#10;'))
})

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

  // Add images to docs
  eleventyConfig.addPassthroughCopy('docs/assets/images')

  // Add NHSUK frontend JS/components
  eleventyConfig.addPassthroughCopy({
    'node_modules/nhsuk-frontend/dist': 'nhsuk-frontend/dist'
  })

  // Copy the NHS assets folder to /assets so default assetPath (/assets) works
  eleventyConfig.addPassthroughCopy({
    'node_modules/nhsuk-frontend/dist/nhsuk/assets': 'assets'
  })

  eleventyConfig.addTemplateFormats('scss')
  eleventyConfig.addExtension('scss', {
    outputFileExtension: 'css',
    compile: async function (inputContent, inputPath) {
      let parsed = path.parse(inputPath)
      if (parsed.name.startsWith('_')) {
        return
      }
      const result = await sass.compileAsync(inputPath, {
        loadPaths: ['node_modules', 'node_modules/nhsuk-frontend/dist'],
        // Required to resolve pkg: URL imports (e.g. @use "pkg:nhsuk-frontend/...")
        importers: [new sass.NodePackageImporter()]
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

    // Always show Nunjucks tab unless explicitly disabled
    let showNunjucksAuto = true
    if (typeof data.showNunjucks === 'boolean') {
      showNunjucksAuto = data.showNunjucks
    }

    // Always show HTML preview/tab unless explicitly disabled
    let showHtmlAuto = true
    if (typeof data.showHtml === 'boolean') {
      showHtmlAuto = data.showHtml
    }

    const rawHtmlCode = nunjucksEnv.renderString(nunjucksCode)
    const prettyHtmlCode = rawHtmlCode.trim()
      ? await prettier.format(rawHtmlCode, { parser: 'html' })
      : ''

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
      backLinkText: data.backLinkText,
      arguments: data.arguments,
      showNunjucks: showNunjucksAuto,
      showHtml: showHtmlAuto,
      swiftCode: data.swiftCode || null,
      swiftArguments: data.swiftArguments || null,
      androidCode: data.androidCode || null,
      openFirst: data.openFirst === true
    }
    return nunjucksEnv.render('example.njk', templateData)
  })

  eleventyConfig.setLibrary(
    'md',
    markdownIt({
      html: true,
      highlight: (str, lang) => {
        try {
          const language =
            lang && highlighter.getLanguage(lang) ? lang : undefined
          const { value } = language
            ? highlighter.highlight(str, { language })
            : highlighter.highlightAuto(str)
          return `<pre class="nhsuk-code__container"><code class="nhsuk-code__content">${value}</code></pre>`
        } catch (e) {
          return ''
        }
      }
    }).use(anchor)
  )

  return {
    dir: {
      input: 'docs',
      output: 'dist/docs'
    },
    markdownTemplateEngine: 'njk'
  }
}
