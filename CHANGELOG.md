# NHS App Frontend Changelog

## 0.1.0-alpha.0 (Prerelease) - 18 April 2024

:tada: **Initial release of the NHS App Frontend**

## `v1.0.0` release of the NHS App Frontend package.

A collection of HTML, CSS, Nunjucks templates and guidance for the NHS App. Built on top of the [nhsuk-frontend](https://github.com/nhsuk/nhsuk-frontend) styles.

### Components and styles

- Badge
- Bottom navigation (native)
- Card links
- Section heading
- Tag
- Timeline
- Top Navigation (native)

## `v1.1.0`

Minor updates to guidance

### Components and styles

- Summary list now supports a two column display on mobile

## `v1.2.0`

### Components and styles

- Button enhancements. Extending the `nhsuk-frontend` button styling to support default full width buttons on mobile.

## `v2.0.0`

### Fixes

Create symlink to `docs/_includes` so that the docs can include anything in `src`

### Breaking changes

Prefixed all Nunjucks macros with `nhsapp`.

> ~~`card`~~ > `nhsappCard`
