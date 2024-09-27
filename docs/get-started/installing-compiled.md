---
layout: layouts/get-started.njk
title: Installing NHS App frontend using compiled files
---

You can install NHS App frontend using the compiled files released with each version. However, by doing so, you will **not** be able to:

- selectively include the CSS or JavaScript for individual components
- build your own styles or components based on the palette or typography and spacing mixins
- customise the build, for example, overriding colours or enabling global styles
- use the component Nunjucks templates

In a live application, we recommend that you [install with npm](../installing-with-npm) instead. This will allow you to better integrate the library and more easily upgrade.

## Copy the files

1. Download the `release-<VERSION-NUMBER>.zip` file at the bottom of the [latest NHS App frontend release note](https://github.com/nhsuk/nhsapp-frontend/releases).
2. Unzip the zip file.
3. Copy the `.css` files to a stylesheets folder in the root of your project’s public folder, so that for example `<YOUR-SITE-URL>/stylesheets/nhsapp-frontend.min.css` shows the CSS file in your users’ browsers.
4. Copy the `.js` file to a JavaScript folder in the root of your project’s public folder, so that for example `<YOUR-SITE-URL>/javascript/nhsapp-frontend.min.js` shows the JavaScript file in your users’ browsers.

## Check an example page

### With the NHS design system

1. Follow [the instructions for installing the NHS design system](https://github.com/nhsuk/nhsuk-frontend/blob/main/docs/installation/installing-compiled.md)
2. Add `link` tags for the NHS App frontend CSS, alongside the GOV.UK ones in the `head`:
   ```html
   <link rel="stylesheet" href="/stylesheets/nhsapp-frontend.min.css" />
   ```
3. Add `script` tags for the NHS App frontend JavaScript, alongside the GOV.UK at the bottom of the `body`. This includes jQuery, which is a dependency of NHS App frontend.
   ```html
   <script
     src="https://code.jquery.com/jquery-3.6.0.min.js"
     integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
     crossorigin="anonymous"
   ></script>
   <script src="/javascript/nhsapp-frontend.min.js"></script>
   <script>
     window.NHSAppFrontend.initAll();
   </script>
   ```
