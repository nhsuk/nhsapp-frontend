---
layout: layouts/ios.njk
title: Forms
tags:
  - iosLayouts
---

Form views let users answer questions or change settings.

![Screenshot showing a title 'Do you have any of these health conditions?' with off toggles for Asthma, Diabetes, Hay fever, High blood pressure and Sleep apnoea, and a Continue button at the bottom of the screen](/assets/images/ios/form.png)

## When to use

Use a form view when the screen collects user input or configuration, for example using [toggles](/ios/toggle), pickers or text fields.

## When not to use

Do not use a form view if the screen contains a list of similar items that the user can navigate to or take actions on, use [list views](/ios/lists) instead.

If the screen only contains content and buttons or links, use a [scroll view](/ios/scroll-views) instead.

## How to use

Use a standard SwiftUI `Form` and apply styling by adding a `formStyle(.nhsForm)` modifier. This will automatically apply the toggle style to any included toggles.

Add a `formActions { }` modifier to contain the primary button. This will pin it to the bottom of the screen, with the content scrolling beneath it.

This example shows a form with some toggles:

```swift { .nhsuk-code--button }
@State private var hasAsthma = false
@State private var hasDiabetes = false
@State private var hasHayFever = false
@State private var hasHighBloodPressure = false
@State private var hasSleepApnoea = false

var body: some View {
    Form {
        Title("Do you have any of these health conditions?")

        Section {
            Toggle("Asthma", isOn: $hasAsthma)
            Toggle("Diabetes", isOn: $hasDiabetes)
            Toggle("Hay fever", isOn: $hasHayFever)
            Toggle("High blood pressure", isOn: $hasHighBloodPressure)
            Toggle("Sleep apnoea", isOn: $hasSleepApnoea)
        }
        .nhsSectionStyle()
    }
    .formStyle(.nhsForm)
    .formActions {
        Button("Continue") {
            // Action would go here                
        }
        .buttonStyle(.nhsPrimary)
    }
}
```

For full documentation, see [SwiftUI: Form](https://developer.apple.com/documentation/SwiftUI/Form) on the Apple developer documentation website.
