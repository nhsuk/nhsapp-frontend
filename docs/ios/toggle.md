---
layout: layouts/ios.njk
title: Toggles
tags:
  - iosComponents
---

Toggles let users switch a single option on or off.

## How it works

There is one style, applied with the `.nhsToggle` preset. It uses the native iOS toggle, tinted NHS blue when on, with its label in the NHS body font.

## How to use

Use a standard [SwiftUI Toggle](https://developer.apple.com/documentation/swiftui/toggle) and apply the NHS style with the `.toggleStyle(.nhsToggle)` modifier.

```swift { .nhsuk-code--button }
Toggle("Face ID", isOn: $isOn)
    .toggleStyle(.nhsToggle)
```

### In a form

Apply the style to the `Form` to set it for every toggle inside:

```swift { .nhsuk-code--button }
Form {
    Toggle("Face ID", isOn: $isOn)
}
.toggleStyle(.nhsToggle)
```

### Toggle with a subtitle

When a toggle needs supporting text, give it a two-part label.

```swift { .nhsuk-code--button }
Toggle(isOn: $acceptsCookies) {
    Text("Allow optional analytic cookies")
        .bold()
    Text("I accept the use of optional analytic cookies used to improve the performance of the NHS App")
        .foregroundStyle(.nhsSecondaryText)
}
.toggleStyle(.nhsToggle)
```

Where a toggle has a subtitle, keep the title short and put the detail in the subtitle, so the on or off state is clear at a glance.

## Accessibility

This component supports Dynamic Type, Dark Mode and VoiceOver.

Because the style keeps the native toggle rather than drawing a custom control, it inherits the system switch's accessibility, haptics and disabled appearance.

VoiceOver announces the toggle's label and its on or off state, and disabled toggles fade visually but remain in the accessibility tree, so users know the option exists even when it is not available.

## Research

This toggle style is not yet being used by the live NHS App, but several rounds of research have been done on them.
