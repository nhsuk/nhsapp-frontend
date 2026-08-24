---
layout: layouts/ios.njk
title: Card style
tags:
  - iosStyles
---

The `nhsCardStyle()` modifier applies NHS card styling to any view: a padded, rounded background with an optional border.

Components like the [banner](/ios/banner) and [campaign card](/ios/campaign-card) use it.

## When to use

Use `nhsCardStyle()` to build a new card-like container that no existing component covers.

## When not to use

Check for an existing component first. Do not use `nhsCardStyle()` to rebuild something the design system already provides, such as a [banner](/ios/banner) or [campaign card](/ios/campaign-card). If you find yourself recreating one of these with small changes, propose a change to the component instead.

## How to use

Apply the modifier to the outermost view of your card content:

<img src="/assets/images/ios/card-style.png" width="375">

{% from "details/macro.njk" import details %}
{% call details({ summaryText: "Swift options" }) %}
{% include "ios/card-style/swift-options.md" %}
{% endcall %}

```swift { .nhsuk-code--button }
VStack(alignment: .leading, spacing: 8) {
    Text("Card title")
        .font(.nhsHeadline)
    Text("Some supporting body text inside a card.")
        .font(.nhsBody)
}
.foregroundStyle(.nhsText)
.nhsCardStyle()
```

For an outlined card, use a clear background with a border:

<img src="/assets/images/ios/card-style-outline.png" width="375">

```swift { .nhsuk-code--button }
Text("Card with a border")
    .foregroundStyle(.nhsText)
    .nhsCardStyle(
        backgroundColor: .clear,
        borderWidth: 2
    )
```

To make the whole card tappable, apply the modifier to a `Button`:

```swift { .nhsuk-code--button }
Button {
    // open the details screen
} label: {
    Text("Entire card is tappable")
}
.nhsCardStyle()
```

### Using a card in a list view

To place a card inside a `List`, apply `nhsCardRowStyle()` after `nhsCardStyle()`. This removes the default row insets, background and separator so the card renders edge to edge rather than as a standard inset row:

```swift { .nhsuk-code--button }
List {
    Text("Card in a list")
        .nhsCardStyle()
        .nhsCardRowStyle()
}
```

## Accessibility

The modifier only affects how a view looks. You are responsible for the accessibility of the content used, such as labels, traits and tap target sizes.

When choosing a background colour, check that your text and any accent colours have enough contrast against it to meet at least [WCAG AA](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html). The default white background with `nhsText` meets this.
