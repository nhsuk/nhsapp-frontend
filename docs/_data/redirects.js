const movedWebRoutes = [
  'components/',
  'components/badge/',
  'components/bottom-navigation/',
  'components/buttons/',
  'components/card-links/',
  'components/expander/',
  'components/header/',
  'components/section-heading/',
  'components/tag/',
  'components/timeline/',
  'components/top-navigation/',
  'styles/',
  'styles/colour/',
  'styles/icons/',
  'get-started/accessibility-in-the-nhs-app/',
  'get-started/install-nhsapp-frontend/',
  'get-started/installing-with-npm/',
  'get-started/integrating-with-the-nhs-app/',
  'get-started/making-changes-to-the-structure-of-the-nhs-app/',
  'get-started/nhsapp-frontend/',
  'get-started/nhsapp-prototype/',
  'get-started/nhsapp-prototype/github/',
  'get-started/nhsapp-prototype/heroku/',
  'get-started/nhsapp-prototype/how-to-use/',
  'get-started/nhsapp-prototype/setup/'
]

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
    to: '/web/get-started/nhsapp-prototype/'
  },
  {
    from: '/web/get-started/',
    to: '/web/'
  },
  {
    from: '/get-started/',
    to: '/web/'
  },
  ...movedWebRoutes.map(route => ({
    from: `/${route}`,
    to: `/web/${route}`
  }))
  // Add more redirects here as needed
]
