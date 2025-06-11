/**
 * Redirects configuration
 *
 * Array of redirect objects with 'from' and 'to' properties
 *
 * from: the path you want to redirect FROM (should start with /)
 * to: the complete URL you want to redirect TO
 */

export default [
  {
    from: '/components/panel/',
    to: 'https://service-manual.nhs.uk/design-system/components/panel'
  },
  {
    from: '/patterns/confirmation-page/',
    to: 'https://service-manual.nhs.uk/design-system/patterns/confirmation-page'
  }

  // Add more redirects here as needed
  // Example:
  // {
  //   from: '/old-page/',
  //   to: 'https://example.com/new-page'
  // },
  // {
  //   from: '/another-old-page/',
  //   to: 'https://example.com/another-new-page'
  // }
]
