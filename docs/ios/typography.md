---
layout: layouts/ios.njk
title: Typography
tags:
  - ios
---

We are still deciding whether or how the native app should use a custom typeface (Frutiger).

For experimental purposes, the iOS design system currently supports these styles, which match the [named font properties](https://developer.apple.com/documentation/swiftui/font) in SwiftUI but add an `nhs` prefix, and use Frutiger instead of San Francisco.

The styles are defined relative to the native SwiftUI Font styles - this means that they scale with Dynamic Type.

| Font style        | SwiftUI equivalent |
| ----------------- | ------------------ |
| `.nhsLargeTitle`  | `.largeTitle`      |
| `.nhsTitle`       | `.Title`           |
| `.nhsTitle2`      | `.title2`          |
| `.nhsTitle3`      | `.title3`          |
| `.nhsHeadline`    | `.headline`        |
| `.nhsSubheadline` | `.subheadline`     |
| `.nhsBody`        | `.body`            |
| `.nhsCallout`     | `.callout`         |
| `.nhsFootnote`    | `.footnote`        |
| `.nhsCaption`     | `.caption`         |
| `.nhsCaption2`    | `.caption2`        |

We’ll update this page when we’ve decided how to approach custom typography within the app.
