# NHS App Frontend Changelog

## Unreleased

### 🆕 New features

- Added `proxy` colour variant to the card component, using the class `nhsapp-card--proxy`. This uses the warm yellow colour and should only be used for proxy access, replacing the proxy banner
- Updated to [NHS.UK frontend v10.7.0](https://github.com/nhsuk/nhsuk-frontend/releases/tag/v10.7.0)
- Added `text` option to the card component's `aboveContent` and `footer` options, as an alternative to `html` for plain text content
- Added `heading` option to timeline items, which accepts a string or an object with `text` or `html`
- The card and card group components' `description` option now also accepts an object with `text`, `html` or `classes`
- Added `heading` option to the card component (and `cards[].heading` in the card group), replacing `title` and `headingLevel` to align with the NHS.UK frontend card component. It accepts a string or an object with `text`, `html`, `level`, `classes`, `size` or `id`
- Added `heading.size` option to the card component, which adds the matching `nhsuk-heading-*` class (`xxs`, `xs`, `s`, `m`, `l` or `xl`)
- Added `heading.id` option to the card component, to set an `id` on the heading or link
- Added `heading.level` and `heading.classes` options to the card group's `heading` option

### ⚠️ Deprecations

- The timeline item `headingText` option is deprecated and will be removed in v6.0.0. Use `heading.text` instead.
- The card and card group components' `descriptionHtml` option is deprecated and will be removed in v6.0.0. Use `description.html` instead.
- The card and card group components' `descriptionClasses` option is deprecated and will be removed in v6.0.0. Use `description.classes` instead.
- The card `title` option and card group `cards[].title` option are deprecated and will be removed in v6.0.0. Use `heading` or `cards[].heading` instead.
- The card `titleHtml`, `titleClasses` and `headingLevel` options and the card group `cards[].titleHtml`, `cards[].titleClasses` and `cards[].headingLevel` options are deprecated and will be removed in v6.0.0. Use `heading.html`, `heading.classes` and `heading.level` (or the `cards[].heading.*` equivalents) instead.
- The card component's `nhsapp-card__title` class is deprecated and will be removed in v6.0.0. Use `nhsapp-card__heading` instead. The Nunjucks macros now output `nhsapp-card__heading`. If you're not using the Nunjucks macros, update the class in your HTML. Both classes are styled until then.
- The card group `headingLevel` option is deprecated and will be removed in v6.0.0. Use `heading.level` instead.
- The card group `headingHtml` option is deprecated and will be removed in v6.0.0. Use `heading.html` instead.
- The NHS App colour palette (`$nhsapp-colours` and the `nhsapp-colour()` function) is deprecated in favour of the pale and dark colours added in NHS.UK frontend v10.7.0, and will be removed in v6.0.0. Replace `nhsapp-colour("...")` with `nhsuk-colour("...")`. The NHS App colours now use these NHS.UK frontend colours, and some of them have changed slightly:
  - `pale-aqua-green`: `#c9e3e0` to `#bae6e3`
  - `dark-aqua-green`: `#1e403d` to `#004a45`
  - `dark-blue`: `#00386e` to `#003087`
  - `dark-purple`: `#402463` to `#330072`
  - `dark-pink`: `#681645` to `#6e234b`
  - `pale-yellow`: `#fff7b1` to `#fff9c4`
  - `dark-yellow`: `#4c4612` to `#595215`

## `v5.3.0` - 18 September 2026

### 🆕 New features

- Added expander component variant - [pull request #582](https://github.com/nhsuk/nhsapp-frontend/pull/582)
- Updated to [NHS.UK frontend v10.6.1](https://github.com/nhsuk/nhsuk-frontend/releases/tag/v10.6.1) - [pull request #573](https://github.com/nhsuk/nhsapp-frontend/pull/573)

### 🔧 Fixes

- Fix Sass 1.80.0 `import` and `global-builtin` deprecations
- Fix Sass 1.95.0 `if-function` deprecation
- Renamed the `badge`, `card`, `tag` and `timeline` component Sass partials to `_index.scss`, for consistency with the `button` and `summary-list` components. The old file names (for example `components/badge/badge`) are kept as deprecated stub files that forward to the new ones, so existing imports keep working, but will be removed in a future major release.

## `v5.2.0` - 25 August 2026

### 🆕 New features

- Redesigned card link footer - footers now use a stacked card group with a coloured variant card instead of an inline footer section - [pull request #551](https://github.com/nhsuk/nhsapp-frontend/pull/551)
  - The current footer layout will be removed in the next major release.
- Added `classes` parameter to the `nhsappIcon` macro, allowing custom classes to be passed to icon SVGs - [pull request #551](https://github.com/nhsuk/nhsapp-frontend/pull/551)
- Added `.nhsapp-icon-text` layout utility for aligning icons alongside text content - [pull request #551](https://github.com/nhsuk/nhsapp-frontend/pull/551)
- Added `.nhsapp-icon--text-colour` modifier to set icon fill to `currentColor` - [pull request #551](https://github.com/nhsuk/nhsapp-frontend/pull/551)
- Added `.nhsapp-badge-small--as-icon` modifier to display a small badge indicator as an inline icon - [pull request #551](https://github.com/nhsuk/nhsapp-frontend/pull/551)

### 🔧 Fixes

- Changed card group child selectors from `:first-of-type` / `:last-of-type` / `:only-of-type` to `:first-child` / `:last-child` / `:only-child` to fix incorrect border rendering when cards are mixed with non-card siblings - [pull request #551](https://github.com/nhsuk/nhsapp-frontend/pull/551)

## `v5.1.0` - 24 August 2026

### 🆕 New features

- Added filled variant of the profile icon - [pull request #554](https://github.com/nhsuk/nhsapp-frontend/pull/554)
- Added `titleHtml` option to the card component, as an alternative to `title` for when HTML content is needed - [pull request #561](https://github.com/nhsuk/nhsapp-frontend/pull/561)

## `v5.0.4` - 11 August 2026

### 🆕 New feature

- Badge colour variants — adds a `color` option to the small badge component, supporting `warm-yellow` and `aqua-green` indicator colours. Defaults to `red` - [pull request #549](https://github.com/nhsuk/nhsapp-frontend/pull/549)

## `v5.0.3` - 26 November 2025

### Fixes

- Adding missing `@use` imports for spacing and colour helpers from `nhsuk-frontend` in several components - [pull request #417](https://github.com/nhsuk/nhsapp-frontend/pull/417)

## `v5.0.2` - 19 November 2025

### Fixes

- Removed unintended inclusion of the full `nhsuk-frontend` stylesheet in builds by switching to targeted `@use` imports for only the mixins/tools required by each component - [pull request #412](https://github.com/nhsuk/nhsapp-frontend/pull/412)
- Correctly set the new border radius on secondary buttons in the active state - - [pull request #413](https://github.com/nhsuk/nhsapp-frontend/pull/413)

## `v5.0.1` - 9 October 2025

### Fixes

- Small fix for assets

## `v5.0.0` - 9 October 2025

### 💥 Breaking changes

Bumped `nhsuk-frontend` version to `v10.0.0` in [pull request #378](https://github.com/nhsuk/nhsapp-frontend/pull/378) - details are in the [nhsuk frontend release notes](https://github.com/nhsuk/nhsuk-frontend/releases).

#### Button group

Deprecated `nhsapp-button-group` component in [pull request #378](https://github.com/nhsuk/nhsapp-frontend/pull/378), as now available in `nhsuk-frontend`.

Swap `nhsapp-button-group` → with `nhsuk-button-group`.

Before:

```
<div class="nhsapp-button-group">
  <button class="nhsuk-button nhsapp-button">
    Continue
  </button>
  <button class="nhsuk-button nhsuk-button--secondary nhsapp-button">
    Try again
  </button>
</div>
```

After:

```
<div class="nhsuk-button-group">
  <button class="nhsuk-button nhsapp-button">
    Continue
  </button>
  <button class="nhsuk-button nhsuk-button--secondary nhsapp-button">
    Try again
  </button>
</div>
```

#### Section heading

Deprecated `nhsapp-section heading` component in [pull request #378](https://github.com/nhsuk/nhsapp-frontend/pull/378).

A heading and description option has been added to the `cardGroup`.

Before:

```
<div class="nhsapp-section-heading">
  <h2 class="nhsuk-heading-s">Upcoming appointments</h2>
</div>
<p class="nhsuk-u-margin-bottom-5">1 upcoming appointment</p>
<ul class="nhsapp-cards nhsapp-cards--stacked">
  <li class="nhsapp-card">
    ...
  </li>
</ul>
```

After:

```
<h2 class="nhsapp-cards__heading">Upcoming appointments</h2>
<p class="nhsapp-cards__description">1 upcoming appointment</p>
<ul class="nhsapp-cards nhsapp-cards--stacked">
  <li class="nhsapp-card">
    ...
  </li>
</ul>
```

Custom html can be added using `params.headingHtml`, that will support the depreaction of the `view all` link, for example:

```
{{ nhsappCardGroup({
  stacked: true,
  headingHtml:
    '<div class="nhsapp-cards__heading" style="justify-content: space-between; align-items: center; display: flex;">
      <h2 class="nhsuk-heading-s nhsuk-u-margin-bottom-0">Services</h2>
      <a class="nhsuk-u-font-size-19 nhsuk-link nhsuk-link--no-visited-state nhsuk-u-nowrap" href="#">View all <span class="nhsuk-u-visually-hidden">services</span></a>
    </div>',
  cards: [
    {
      ...
    }
  ]
}) }}
```

#### Icons

Updated icon names, following nhsuk frontend naming conventions in [pull request #381](https://github.com/nhsuk/nhsapp-frontend/pull/389).

Before:

`nhsapp-icon nhsapp-icon__account`

After:

`nhsapp-icon nhsapp-icon--account`

#### Card links

Replaced `params.html` with `params.descriptionHtml` in [pull request 403](https://github.com/nhsuk/nhsapp-frontend/pull/403).

Before:

```
{{ nhsappCard({
  title: '...',
  html: '...'
}) }}
```

After:

```
{{ nhsappCard({
  title: '...',
  descriptionHtml: '...'
}) }}
```

Updated logic for a card with no link and removed `params.readOnly`.

Before:

```
{{ nhsappCard({
  title: 'Card title',
  readOnly: 'true'
}) }}
```

After:

```
{{ nhsappCard({
  title: 'Card title'
}) }}
```

Removed the card link with an icon in [pull request 405](https://github.com/nhsuk/nhsapp-frontend/pull/405).

## 🆕 New features

### New (web) header component

Added (web) header component in [pull request #390](https://github.com/nhsuk/nhsapp-frontend/pull/390), extending the NHS design system header and adding modifier classes, `nhsapp-u-hide-from-tablet` and `nhsapp-u-hide-until-tablet`, to show and hide nav items on different screen sizes.

### New NHS App colours

Added NHS App colours in [pull request #389](https://github.com/nhsuk/nhsapp-frontend/pull/392).

These are tints and shades extended from the NHS design system used on the NHS App tag and card links components.

Example:

`nhsapp-colour("green-light")`

Before:

`$color_tag-green-background: #c9e6d8;`

After:

`$color_tag-green-background: nhsapp-colour("green-light");`

### Card links

Updated card links component styling in [pull request #382](https://github.com/nhsuk/nhsapp-frontend/pull/382).

Added new variants for the:

- **Account card** - using the class `nhsapp-card--blue-light`.
- **Campaign card** - using the classes `nhsapp-card--blue-dark` and `nhsapp-card--with-media`.

Added `isListItem` argument to `cardGroup` macro. If true (default) wrapper is `<ul>` with each card as `<li>`. If false uses `<div>`.

## `v4.0.0` - 17 June 2025

### Breaking changes

Bumped `nhsuk-frontend` version to `v9.6.2` ([PR 321](https://github.com/nhsuk/nhsapp-frontend/pull/321)) - details are in the [nhsuk frontend release notes](https://github.com/nhsuk/nhsuk-frontend/releases).

#### Deprecated `nhsapp-frontend` components now available in `nhsuk-frontend`

##### Swap `nhsapp-button--secondary` → with `nhsuk-button--secondary`

Before:

```
<button class="nhsuk-button nhsapp-button--secondary nhsapp-button">
  Try again
</button>
```

After:

```
<button class="nhsuk-button nhsuk-button--secondary nhsapp-button">
  Try again
</button>
```

##### Swap `nhsapp-panel` → with `nhsuk-panel`

Before:

```
<div class="nhsapp-panel">
  <h1 class="nhsapp-panel__title">
    Application complete
  </h1>
  <div class="nhsapp-panel__body">
    We have sent you a confirmation email
  </div>
</div>
```

After:

```
<div class="nhsuk-panel">
  <h1 class="nhsuk-panel__title">
    Application complete
  </h1>
  <div class="nhsuk-panel__body">
    We have sent you a confirmation email
  </div>
</div>
```

## `v3.1.0` - 28 March 2025

### Components

- Added secondary card link ([PR 269](https://github.com/nhsuk/nhsapp-frontend/pull/269))

### Fixes

- Fixed layout shift on secondary button ([PR 277](https://github.com/nhsuk/nhsapp-frontend/pull/277))

## `v3.0.0` - 10 March 2025

### Breaking changes

- Bumped `nhsuk-frontend` version to `v9.2.0` ([PR 241](https://github.com/nhsuk/nhsapp-frontend/pull/241)) - details are in the [nhsuk frontend release notes](https://github.com/nhsuk/nhsuk-frontend/releases)
- Bumped `nhsuk-frontend` peer dependency version to `v9.0.0`

### Components

- Updated [Badge](https://design-system.nhsapp.service.nhs.uk/components/badge/) - removing small blue variant

## `v2.3.0` - 19 December 2024

### Fixes

- Icons now use `rem` sizing to ensure consitency in different contexts

### Components

- New [Seconday Button](https://design-system.nhsapp.service.nhs.uk/components/buttons/) styling added
- New [Confirmation Panel](https://design-system.nhsapp.service.nhs.uk/components/panel/) component

## `v2.2.0` - 24 October 2024

### Fixes

- Badge count now displaying correctly when value is 1
- Cards in combination with a section heading spacing now fixed
- Added missing card param to Nunjucks macro `linkAriaLabel`

### Styles

New icons added. [See full commit](https://github.com/nhsuk/nhsapp-frontend/commit/201556e91df539d9ec6dce4eda50a0f478ed3b05) for list of icons.

## `v2.1.0` - 16 September 2024

Updates to guidance and the microsite

### Fixes

Card link with badge accessibility fix. Added option to provide `aria-hidden` to the badge when used with the card link. Plus, changed the badge HTML from a `span` to a `p`. This fixes issues we saw with MacOS Voiceover.

### Components and styles

- The card component now supports a footer section. The guidance for this will be coming very soon after this release
- The card component now supports a "read only" view. The chevron icon is hidden and the title is no longer a link

## `v2.0.1` - 2 August 2024

### Fixes

Create symlink to `docs/_includes` so that the docs can include anything in `src`

### Breaking changes

Prefixed all Nunjucks macros with `nhsapp`.

> ~~`card`~~ > `nhsappCard`

## `v1.2.0` - 24 July 2024

### Components and styles

- Button enhancements. Extending the `nhsuk-frontend` button styling to support default full width buttons on mobile.

## `v1.1.0` - 22 July 2024

Minor updates to guidance

### Components and styles

- Summary list now supports a two column display on mobile

## `v1.0.0` release of the NHS App Frontend package - 12 July 2024

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
