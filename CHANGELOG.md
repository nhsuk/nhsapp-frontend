# NHS App Frontend Changelog

## `v4.0.0` - 17 June 2025

## Breaking changes

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
