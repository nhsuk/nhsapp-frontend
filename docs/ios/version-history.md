---
layout: layouts/docs.njk
title: Version history
order: 5
section: iOS
subsection: Get started
theme: Get started
---

A list of changes in each release of the iOS design system.

## 2.2.0 - 20 November 2026

### New features

- [Forms](/ios/forms) — apply NHS typography, colours and spacing, with actions fixed at the bottom of a scrolling screen
- [Lists](/ios/lists) — apply NHS typography, colours and spacing
- [Buttons](/ios/buttons) — added a plain button style and improved icon spacing
- Top section background — add a coloured header area to a scrolling screen
- [Secondary card action groups](/ios/card-action#secondary-card-action-group) now apply their plain row style automatically
- [Home menu](/ios/home-menu) and [Title](/ios/title) icons now use a lighter weight

### Fixes

- [Toolbar items](/ios/toolbar) now use the correct NHS blue on earlier iOS versions
- Long screen titles no longer hide the back button label on smaller phones

## 2.1.0 - 21 September 2026

### New features

#### Components

- Card action — a tappable row of content, usually with a chevron, for linking onwards from a list of options
- [Title](/ios/title) — sets the screen's title
- Added optional new confirmations for [toolbar items](/ios/toolbar)

#### Styles and modifiers

- [Toggles](/ios/toggles) — the system switch tinted NHS blue with its label in the NHS body font
- Section style — sets the row background and separator colour for a section in a list or form, replacing the iOS defaults with colours from the NHS palette

#### Colours

- Add a new [colour](/ios/colour) for chevrons

## 2.0.2 - 3 September 2026

- Link the library statically instead of forcing a dynamic product.

## 2.0.1 - 1 September 2026

- Lower minimum deployment target to iOS 15. The design system itself does not support iOS 15, but we have to allow it to be compiled into an app with a minimum iOS version of 15 in the short term

## 2.0.0 - 1 September 2026

### Breaking changes

- [Home menu](/ios/home-menu) no longer accepts a free-form list of items in a builder block, pass a plain array of home menu items instead

### New features

#### Styles and modifiers

- added a body style, with spacing tuned for multi-line readability

## 1.0.0 - 20 August 2026

This is the first release of the NHS App Design System for iOS.

### New features

#### Components

- [Banner](/ios/banner) — a high-visibility, tappable card for important actions such as identity verification or feedback, with solid and outlined styles
- [Campaign card](/ios/campaign-card) — a tappable card for public health campaigns, showing a photograph with a heading and body text, responsive across size classes
- [Home menu](/ios/home-menu) — a responsive grid of primary navigation destinations that collapses to a single column at large type sizes
- [Divider](/ios/divider) — a horizontal rule with configurable colour and thickness for separating content within cards
- [Profile card](/ios/profile-card) — a tappable card showing whose profile is being viewed, with "your profile" and "acting for someone else" variants
- [Toolbar items](/ios/toolbar) - a collection of items for the toolbar

#### Styles and modifiers

- [Buttons](/ios/buttons) — an NHS-styled button style with primary, secondary, primary reverse and warning presets, plus a 'fitted' width option
- [Card style](/ios/card-style) — view modifiers for NHS card backgrounds, borders, and flush rendering
- view modifiers for NHS-styled section headers and footers.

#### Foundations

- [Colour palette](/ios/colour) including core, dark, pale, semantic, and fixed light/dark variants
- [Typography](/ios/typography) extensions using the bundled Frutiger font family, with Dynamic Type support.
- NHS logo images
- Shared layout metrics
