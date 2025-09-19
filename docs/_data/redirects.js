/**
 * Redirects configuration (auto-loaded by Eleventy because it is in docs/_data)
 * Each object needs a leading and trailing slash on `from` so the generated
 * permalink produces /path/index.html
 */
export default [
  {
    from: '/components/panel/',
    to: 'https://service-manual.nhs.uk/design-system/components/panel'
  },
  {
    from: '/patterns/confirmation-page/',
    to: 'https://service-manual.nhs.uk/design-system/patterns/confirmation-page'
  },
  {
    from: '/get-started/github-and-heroku/',
    to: '/get-started/nhsapp-prototype/'
  }
  // Add more redirects here as needed
]
