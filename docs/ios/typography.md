---
layout: layouts/ios.njk
title: Typography
tags:
  - iosStyles
---

Our current thinking is that the native app will use Frutiger as a custom typeface for all text, to match the existing NHS website.

To implement this, we’ve introduced some standard styles and support for custom sizes.

## Standard styles

The design system supports these styles which match the [named font properties](https://developer.apple.com/documentation/swiftui/font) in SwiftUI but add an `nhs` prefix, and use Frutiger instead of San Francisco.

The styles are defined relative to the native SwiftUI Font styles - this means that they scale with Dynamic Type.

| Font style        | SwiftUI equivalent | Default size |
| ----------------- | ------------------ | ------------ |
| `.nhsLargeTitle`  | `.largeTitle`      | 34pt         |
| `.nhsTitle`       | `.title`           | 28pt         |
| `.nhsTitle2`      | `.title2`          | 22pt         |
| `.nhsTitle3`      | `.title3`          | 20pt         |
| `.nhsHeadline`    | `.headline`        | 17pt         |
| `.nhsSubheadline` | `.subheadline`     | 15pt         |
| `.nhsBody`        | `.body`            | 17pt         |
| `.nhsCallout`     | `.callout`         | 16pt         |
| `.nhsFootnote`    | `.footnote`        | 13pt         |
| `.nhsCaption`     | `.caption`         | 12pt         |
| `.nhsCaption2`    | `.caption2`        | 11pt         |

All styles are Regular weight except `.nhsHeadline`, which is Bold.

## Custom sizes

You can also use a custom font size with the Frutiger font.

These will still scale with Dynamic Type.

To do this, use either `.nhsCustom` and specify a size:

```swift
Text("Vaccinations")
    .font(.nhsCustom(size: 20))
```

You can use the bold weight by adding the `.bold()` modifier:

```swift
Text("Vaccinations")
    .font(.nhsCustom(size: 20)).bold()
```

Do not use italics.
