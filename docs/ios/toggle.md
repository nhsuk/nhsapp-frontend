---
layout: layouts/ios.njk
title: Toggles
tags:
  - iosComponents
---

Toggles let users switch a single option on or off. They are a standard iOS component (see [Apple's toggle guidance](https://developer.apple.com/design/human-interface-guidelines/toggles)).

![Screenshot of 2 toggles: a blue toggle labelled 'On' and a grey toggle labelled 'Off'](/assets/images/ios/toggle.png)

## How it works

There is one style, applied with the `.nhsToggle` preset. It uses the native iOS toggle, tinted NHS blue when on.

## How to use

Use a standard [SwiftUI Toggle](https://developer.apple.com/documentation/swiftui/toggle) and apply the NHS style with the `.toggleStyle(.nhsToggle)` modifier.

```swift { .nhsuk-code--button }
@State private var isOn = true
@State private var isOff = false

var body: some View {
  Toggle("On", isOn: $isOn)
      .toggleStyle(.nhsToggle)

  Toggle("Off", isOn: $isOff)
      .toggleStyle(.nhsToggle)
}
```

### In a form

![Screenshot of a white card containing the label 'Face ID' and a blue toggle switched on](/assets/images/ios/toggle-on.png)

Within a [form](/ios/forms), the `.formStyle(.nhsForm)` will apply the toggle style automatically.

```swift { .nhsuk-code--button }
@State private var faceID = true

var body: some View {
    Form {
        Toggle("Face ID", isOn: $faceID)
    }
    .formStyle(.nhsForm)
}
```

### More than one answer to a question

When users can select more than one answer to a question, give each option its own toggle. Use the question as the form title.

![A form asking which symptoms you have, with Cough and Runny nose switched on, Sore throat and Headache switched off, and a Continue button at the bottom](/assets/images/ios/toggle-multiple-selection.png)

```swift { .nhsuk-code--button }
@Binding var hasCough: Bool
@Binding var hasSoreThroat: Bool
@Binding var hasRunnyNose: Bool
@Binding var hasHeadache: Bool

var body: some View {
    Form {
        Title("Which symptoms do you have?")

        Section {
            Toggle("Cough", isOn: $hasCough)
            Toggle("Sore throat", isOn: $hasSoreThroat)
            Toggle("Runny nose", isOn: $hasRunnyNose)
            Toggle("Headache", isOn: $hasHeadache)
        }
        .nhsSectionStyle()
    }
    .formStyle(.nhsForm)
    .formActions {
        Button("Continue") {
            // Navigate to the next screen
        }
        .buttonStyle(.nhsPrimary)
    }
}
```

### Toggle with a subtitle

![Screenshot of a white card with the bold label 'Allow optional analytic cookies', the grey supporting text 'I accept the use of optional analytic cookies used to improve the performance of the NHS App' and a blue toggle switched on](/assets/images/ios/toggle-subtitle.png)

When a toggle needs supporting text, give it a two-part label.

```swift { .nhsuk-code--button }
@State private var acceptsCookies = true

var body: some View {
    Form {
        Toggle(isOn: $acceptsCookies) {
            Text("Allow optional analytic cookies")
                .bold()
            Text("I accept the use of optional analytic cookies used to improve the performance of the NHS App")
                .foregroundStyle(.nhsSecondaryText)
        }
    }
    .toggleStyle(.nhsToggle)
}
```

Where a toggle has a subtitle, keep the title short and put the detail in the subtitle, so the on or off state is clear at a glance.

## Accessibility

This component supports Dynamic Type, Dark Mode and VoiceOver.

The style keeps the native toggle rather than drawing a custom control, so it inherits the system switch's accessibility, haptics and disabled appearance.

VoiceOver announces the toggle's label and its on or off state. Disabled toggles fade visually but remain in the accessibility tree, so users know the option exists even when it is not available.

### On/Off Labels

![Screenshot of 2 'Log in with Face ID' toggles with On/Off Labels turned on: the grey off toggle shows an 'O' and the blue on toggle shows an 'I'](/assets/images/ios/toggle-accessibility.png)

The style also supports the On/Off Labels setting (**Settings > Accessibility > Display & Text Size > On/Off Labels**). When it is turned on, the toggle shows an "I" when on and an "O" when off, so the state does not rely on colour alone.

## Research

This toggle style is not yet being used by the live NHS App, but several rounds of research have been done on them.
