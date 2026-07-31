---
layout: layouts/ios.njk
title: Button style
tags:
  - iosComponents
---

The button style applies a consistent NHS appearance to a SwiftUI `Button`.

Follow the [NHS design system button guidance](https://service-manual.nhs.uk/design-system/components/buttons) for when to use primary, secondary and warning buttons. The sections below cover how to apply those styles in SwiftUI.

<img src="/assets/images/ios/button.png" width="375">

## How it works

There are 4 presets:

- [primary](#primary-button)
- [secondary](#secondary-button)
- [primary reverse](#primary-reverse-button)
- [warning](#warning-button)

By default, buttons stretch to fill the width of their container. Use the [fitted modifier](#fitted-width) to size a button to its label instead.

The button scales with Dynamic Type and adapts to Dark Mode. Text wraps onto multiple lines if needed and is never truncated.

## How to use

Apply a preset as a button style:

{% from "details/macro.njk" import details %}
{% call details({ summaryText: "Swift options" }) %}
{% include "ios/buttons/swift-options.md" %}
{% endcall %}

### Primary button

<img src="/assets/images/ios/button-primary.png" width="375">

```swift { .nhsuk-code--button }
Button("Continue") {
    // handle tap
}
.buttonStyle(.nhsPrimary)
```

### Secondary button

<img src="/assets/images/ios/button-secondary.png" width="375">

```swift { .nhsuk-code--button }
Button("Cancel") {
    // handle tap
}
.buttonStyle(.nhsSecondary)
```

### Warning button

<img src="/assets/images/ios/button-warning.png" width="375">

```swift { .nhsuk-code--button }
Button("Delete account") {
    // handle tap
}
.buttonStyle(.nhsWarning)
```

### Primary reverse button

<img src="/assets/images/ios/button-primary-reverse.png" width="375">

Use this on a dark background, such as the NHS blue:

```swift { .nhsuk-code--button }
Button("Log in") {
    // handle tap
}
.buttonStyle(.nhsPrimaryReverse)
```

### Fitted width

<img src="/assets/images/ios/button-fitted.png" width="375">

By default, buttons fill the available width. To size a button to its label, chain `fitted`:

```swift { .nhsuk-code--button }
Button("App help", systemImage: "questionmark.circle.fill") {
    // handle tap
}
.buttonStyle(.nhsSecondary.fitted)
```

### Grouped buttons

<img src="/assets/images/ios/button-group.png" width="375">

Place buttons side by side in an `HStack`:

```swift { .nhsuk-code--button }
HStack(spacing: 12) {
    Button("Cancel") { }
        .buttonStyle(.nhsSecondary)
    Button("Confirm") { }
        .buttonStyle(.nhsPrimary)
}
```

### Container-level style

<img src="/assets/images/ios/button-container-level.png" width="375">

Apply a style to a container to set the default for all buttons inside it. Buttons with their own style override the container:

```swift { .nhsuk-code--button }
VStack(spacing: 12) {
    Button("Primary") { }
        .buttonStyle(.nhsPrimary)
    Button("Secondary 1") { }
    Button("Secondary 2") { }
}
.buttonStyle(.nhsSecondary)
```

## Accessibility

This component supports Dynamic Type, Dark Mode and VoiceOver.

Disabled buttons fade visually but remain in the accessibility tree, so VoiceOver users know the action exists even when it is not available.

## Research

These button styles are not yet being used by the live NHS App, but several rounds of research have been done on them.
