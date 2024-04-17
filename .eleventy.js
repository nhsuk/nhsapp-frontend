import nunjucks from 'nunjucks'
import { EleventyHtmlBasePlugin } from '@11ty/eleventy'

const nunjucksEnv = nunjucks.configure([
  // Our own components which we will ship in the release
  'src/components',

  // Includes specific to our documentation
  'docs/_includes',

  // NHS.UK frontend components
  'node_modules/nhsuk-frontend/packages/components'
])

export default function (eleventyConfig) {
  // Configure a custom nunjucks environment
  eleventyConfig.setLibrary('njk', nunjucksEnv)

  // Copy static files
  eleventyConfig.addPassthroughCopy({
    'node_modules/nhsuk-frontend/dist/nhsuk.css': 'assets/nhsuk.css',
    'dist/nhsapp.css': 'assets/nhsapp.css'
  })

  // Watch for changes in these directories and files
  eleventyConfig.addWatchTarget('./docs/')
  eleventyConfig.addWatchTarget('./dist/nhsapp.css')

  // We need this HtmlBase plugin for serving our docs on github pages at a subdirectory
  // https://www.11ty.dev/docs/plugins/html-base/
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)

  return {
    dir: {
      input: 'docs',
      output: 'dist/docs'
    },
    markdownTemplateEngine: 'njk'
  }
}
