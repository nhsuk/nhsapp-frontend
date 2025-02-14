# NHS App Frontend Changelog

## `v3.0.0` - UNRELEASED

### Breaking changes

- Bumped `nhsuk-frontend` version to `v9.2.0` ([PR 241](https://github.com/nhsuk/nhsapp-frontend/pull/241)) - details are in the [nhsuk frontend release notes](https://github.com/nhsuk/nhsuk-frontend/releases)
- Bumped `nhsuk-frontend` peer dependency version to `v9.0.0`

### Components

- Updated [Badge](https://design-system.nhsapp.service.nhs.uk/components/badge/) - removing small blue variant

## `v2.3.0`

### Fixes

- Icons now use `rem` sizing to ensure consitency in different contexts

### Components

- New [Seconday Button](https://design-system.nhsapp.service.nhs.uk/components/buttons/) styling added
- New [Confirmation Panel](https://design-system.nhsapp.service.nhs.uk/components/panel/) component

## `v2.2.0`

### Fixes

- Badge count now displaying correctly when value is 1
- Cards in combination with a section heading spacing now fixed
- Added missing card param to Nunjucks macro `linkAriaLabel`

### Styles

New icons added. [See full commit](https://github.com/nhsuk/nhsapp-frontend/commit/201556e91df539d9ec6dce4eda50a0f478ed3b05) for list of icons.

## `v2.1.0`

Updates to guidance and the microsite

### Fixes

Card link with badge accessibility fix. Added option to provide `aria-hidden` to the badge when used with the card link. Plus, changed the badge HTML from a `span` to a `p`. This fixes issues we saw with MacOS Voiceover.

### Components and styles

- The card component now supports a footer section. The guidance for this will be coming very soon after this release
- The card component now supports a "read only" view. The chevron icon is hidden and the title is no longer a link

## `v2.0.1`

### Fixes

Create symlink to `docs/_includes` so that the docs can include anything in `src`

### Breaking changes

Prefixed all Nunjucks macros with `nhsapp`.

> ~~`card`~~ > `nhsappCard`

## `v1.2.0`

### Components and styles

- Button enhancements. Extending the `nhsuk-frontend` button styling to support default full width buttons on mobile.

## `v1.1.0`

Minor updates to guidance

### Components and styles

- Summary list now supports a two column display on mobile

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

## 0.1.0-alpha.0 (Prerelease) - 18 April 2024

:tada: **Initial release of the NHS App Frontend**
