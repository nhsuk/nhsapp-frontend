---
layout: layouts/ios.njk
title: Buttons
tags:
  - iosComponents
---

Buttons are used to help users carry out an action.

![Screenshot of buttons: green 'Primary', white 'Secondary' with a blue border, red 'Warning', blue 'Plain' text, red 'Plain destructive' text, and white 'Primary reverse' on a blue background](/assets/images/ios/button.png)

## How it works

There are 5 styles:

- [primary](#primary-button)
- [secondary](#secondary-button)
- [warning](#warning-button)
- [primary reverse](#primary-reverse-button)
- [plain](#plain-button)

Follow the [NHS design system button guidance](https://service-manual.nhs.uk/design-system/components/buttons) for when to use primary, secondary and warning buttons.

By default, buttons stretch to fill the width of their container. Use the [fitted modifier](#fitted-width) to size a button to its label instead.

Buttons for a [form](/ios/forms), such as a ‘Continue’ button, should be placed in `.formActions` so that they remain at the bottom of the screen whilst the form scrolls.

Buttons scale with Dynamic Type and adapt to Dark Mode. Text wraps onto multiple lines if needed and is never truncated.

## How to use

Use a standard [SwiftUI Button](https://developer.apple.com/documentation/swiftui/button) and apply NHS styles using the `.buttonStyle()` modifier.

{% from "details/macro.njk" import details %}
{% call details({ summary: "Swift options" }) %}
{% include "ios/buttons/swift-options.md" %}
{% endcall %}

### Primary button

![Screenshot of a green button with white text labelled 'Primary'](/assets/images/ios/button-primary.png)

```swift { .nhsuk-code--button }
Button("Continue") {
    // handle tap
}
.buttonStyle(.nhsPrimary)
```

### Secondary button

![Screenshot of a white button with a blue border and blue text labelled 'Secondary'](/assets/images/ios/button-secondary.png)

```swift { .nhsuk-code--button }
Button("Cancel") {
    // handle tap
}
.buttonStyle(.nhsSecondary)
```

### Warning button

![Screenshot of a red button with white text labelled 'Warning'](/assets/images/ios/button-warning.png)

```swift { .nhsuk-code--button }
Button("Delete account") {
    // handle tap
}
.buttonStyle(.nhsWarning)
```

### Primary reverse button

![Screenshot of a white button with blue text labelled 'Primary reverse' on a blue background](/assets/images/ios/button-primary-reverse.png)

Use this on a dark background, such as the NHS blue:

```swift { .nhsuk-code--button }
Button("Log in") {
    // handle tap
}
.buttonStyle(.nhsPrimaryReverse)
```

### Plain button

Use a plain button for an action that needs less emphasis than a secondary button. It uses NHS blue text with no background or border.

![Plain button labelled 'Give feedback' in blue text](/assets/images/ios/button-plain.png)

```swift { .nhsuk-code--button }
Button("Give feedback") {
    // handle tap
}
.buttonStyle(.nhsPlain)
```

For an action that cancels or removes something, such as cancelling a booked appointment, set `role: .destructive` to show the plain button’s text in NHS red. Ask users to confirm before carrying out the action. You can ask for confirmation on a separate screen.

![Plain button labelled 'Cancel appointment' in red text](/assets/images/ios/button-plain-destructive.png)

```swift { .nhsuk-code--button }
Button("Cancel appointment", role: .destructive) {
    // handle tap
}
.buttonStyle(.nhsPlain)
```

### Fitted width

![Screenshot of a white button with a blue border, sized to fit a question mark icon and the label 'App help'](/assets/images/ios/button-fitted.png)

By default, buttons fill the available width. To size a button to its label, chain `fitted`:

```swift { .nhsuk-code--button }
Button("App help", systemImage: "questionmark.circle.fill") {
    // handle tap
}
.buttonStyle(.nhsSecondary.fitted)
```

### Grouped buttons

![Screenshot of a white 'Cancel' button with a blue border next to a green 'Confirm' button](/assets/images/ios/button-group.png)

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

![Screenshot of a green 'Primary' button above 3 white buttons with blue borders labelled 'Secondary 1', 'Secondary 2' and 'Secondary 3'](/assets/images/ios/button-container-level.png)

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
