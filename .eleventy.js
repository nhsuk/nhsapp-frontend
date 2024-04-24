import path from 'path'
import nunjucks from 'nunjucks'
import sass from 'sass'
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

  // Watch for changes in these directories and files
  eleventyConfig.addWatchTarget('./src/')

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

  eleventyConfig.addFilter(
    "addActiveAttribute",
    function (config, filePathStem) {
      if (config.items) {
        return {
          ...config,
          items: config.items.map((item) => ({
            ...item,
            active: filePathStem.indexOf(item.href) > -1,
          })),
        };
      } else if (config.sections) {
        return {
          ...config,
          sections: config.sections.map((section) => ({
            ...section,
            items: section.items.map((item) => ({
              ...item,
              active: filePathStem.indexOf(item.href) > -1,
            })),
          })),
        };
      }
    }
  );

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
