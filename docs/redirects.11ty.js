// Generate static HTML redirect pages from redirects global data
// Each entry in redirects.js becomes a directory with an index.html performing the redirect.

export const data = {
  pagination: {
    data: 'redirects',
    size: 1,
    alias: 'redirect'
  },
  eleventyExcludeFromCollections: true,
  // Use the provided from path (must include leading slash and trailing slash) so Eleventy outputs /path/index.html
  permalink: ({ redirect }) => redirect.from
}

export function render({ redirect }) {
  const target = redirect.to
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Redirecting...</title>
  <meta http-equiv="refresh" content="0; url=${target}" />
  <link rel="canonical" href="${target}" />
  <meta name="robots" content="noindex" />
  <script>window.location.replace(${JSON.stringify(target)});</script>
  <style>body{font-family:Arial,sans-serif;line-height:1.4;padding:2rem;} a{color:#005eb8;}</style>
</head>
<body>
  <p>This page has moved to <a href="${target}">${target}</a>.</p>
</body>
</html>`
}
