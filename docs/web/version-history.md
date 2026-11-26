---
layout: layouts/docs.njk
title: Version history
section: Web
subsection: Get started
theme: Production
themeOrder: 2
---

A list of changes in each release of the NHS App frontend. The [full changelog](https://github.com/nhsuk/nhsapp-frontend/blob/main/CHANGELOG.md) includes upgrade examples for breaking changes.

## 5.4.0 - 16 November 2026

### New features

- Added a proxy colour variation to [card links](/web/components/card-links/#proxy-card-links). Only use it for proxy access, where it replaces the proxy banner
- Updated to NHS.UK frontend v10.7.0

### Deprecations

- The NHS App [colour palette](/web/styles/colour/) is deprecated in favour of the pale and dark colours added in NHS.UK frontend v10.7.0, and will be removed in v6.0.0. Replace `nhsapp-colour("...")` with `nhsuk-colour("...")`. Some colours have changed slightly

## 5.3.0 - 18 September 2026

### New features

- Added an [expander component](/web/components/expander/) variant
- Updated to NHS.UK frontend v10.6.1

### Deprecations

- Renamed the Sass files for the badge, card links, tag and timeline components, for consistency with the other components. The old file names still work but are deprecated, and will be removed in a future major release

### Fixes

- Bug fixes and small improvements, including Sass deprecation warnings

## 5.2.0 - 25 August 2026

### New features

- Redesigned the [card link footer](/web/components/card-links/#footers-on-card-links), which now uses a stacked card group with a coloured variant card instead of an inline footer section. The current footer layout will be removed in the next major release
- Added options to [icons](/web/styles/icons/) for custom classes, aligning icons alongside text, and using the surrounding text colour
- Added an option to show a small [badge](/web/components/badge/#small-badges) indicator as an inline icon

### Fixes

- Bug fixes and small improvements

## 5.1.0 - 24 August 2026

### New features

- Added a filled variant of the profile [icon](/web/styles/icons/)
- Added an option to [card links](/web/components/card-links/) to use HTML in the title

## 5.0.4 - 11 August 2026

### New features

- Added colour options to the [small badge](/web/components/badge/#small-badges): warm yellow and aqua green, as well as the default red

## 5.0.3 - 26 November 2025

### Fixes

- Bug fixes and small improvements

## 5.0.2 - 19 November 2025

### Fixes

- Bug fixes and small improvements

## 5.0.1 - 9 October 2025

### Fixes

- Bug fixes and small improvements

## 5.0.0 - 9 October 2025

### Breaking changes

- Updated to NHS.UK frontend v10.0.0
- Removed the button group component. Use the [NHS.UK button group](https://service-manual.nhs.uk/design-system/components/buttons) instead
- Removed the section heading component. Use the new heading and description options on the card group instead, as described in [card links](/web/components/card-links/#multiple-card-links)
- Renamed icon classes to follow NHS.UK frontend conventions, for example `nhsapp-icon__account` is now `nhsapp-icon--account`
- Renamed the card HTML option to `descriptionHtml`
- Removed the card read-only option. A [card with no link](/web/components/card-links/#card-with-no-link) is now read-only automatically
- Removed the card link with an icon

### New features

- Added a web [header component](/web/components/header/), which extends the NHS.UK header and lets you show and hide navigation items at different screen sizes
- Added NHS App colours, tints and shades extended from the NHS.UK colours, to use in [tags](/web/components/tag/) and [card links](/web/components/card-links/#colour-variations)
- Updated [card links](/web/components/card-links/#colour-variations) with an account card variant and campaign card variants
- Added an option to the card group to render cards as a list or as plain elements

## 4.0.0 - 17 June 2025

### Breaking changes

- Updated to NHS.UK frontend v9.6.2
- Removed the secondary button style. Use the [NHS.UK secondary button](/web/components/buttons/) instead
- Removed the panel component. Use the [NHS.UK panel](https://service-manual.nhs.uk/design-system/components/panel) instead

## 3.1.0 - 28 March 2025

### New features

- Added the [secondary card link](/web/components/card-links/#secondary-card-links)

### Fixes

- Bug fixes and small improvements

## 3.0.0 - 10 March 2025

### Breaking changes

- Updated to NHS.UK frontend v9.2.0, with a peer dependency of v9.0.0
- Removed the small blue badge variant

## 2.3.0 - 19 December 2024

### New features

- Added [secondary button](/web/components/buttons/) styling
- Added the confirmation panel component

### Fixes

- Bug fixes and small improvements

## 2.2.0 - 24 October 2024

### New features

- Added new [icons](/web/styles/icons/)

### Fixes

- Bug fixes and small improvements

## 2.1.0 - 16 September 2024

### New features

- The [card component](/web/components/card-links/) now supports a footer section
- The card component now supports a read-only view, where the chevron icon is hidden and the title is not a link

### Fixes

- Bug fixes and small improvements

## 2.0.1 - 2 August 2024

### Breaking changes

- Renamed all Nunjucks macros to start with `nhsapp`, for example `card` is now `nhsappCard`

### Fixes

- Bug fixes and small improvements

## 1.2.0 - 24 July 2024

### New features

- Extended the NHS.UK [button](/web/components/buttons/) to support full width buttons on mobile by default

## 1.1.0 - 22 July 2024

### New features

- The summary list now supports a two column display on mobile

## 1.0.0 - 12 July 2024

First release of the NHS App frontend package, a collection of HTML, CSS, Nunjucks templates and guidance for the NHS App, built on top of NHS.UK frontend.

### New features

- [Badge](/web/components/badge/)
- [Bottom navigation](/web/components/bottom-navigation/) (native)
- [Card links](/web/components/card-links/)
- [Section heading](/web/components/section-heading/)
- [Tag](/web/components/tag/)
- [Timeline](/web/components/timeline/)
- [Top navigation](/web/components/top-navigation/) (native)
