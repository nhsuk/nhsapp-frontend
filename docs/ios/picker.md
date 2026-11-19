---
layout: layouts/ios.njk
title: Pickers
tags:
  - iosComponents
---

Use a picker when users need to choose one answer from a fixed list. 

![Medicine timing screen with four options. A blue checkmark marks “In 6 to 12 hours” as selected, and a Continue button appears at the bottom.](/assets/images/ios/full-page-picker.png)

A inline picker is the iOS equivalent of [radios on the web](https://service-manual.nhs.uk/design-system/components/radios).

If the user can select more than one option, use a set of [toggles](/ios/toggle) instead.

## How to use

Apply `.pickerStyle(.inline)` to a regular [SwiftUI Picker](https://developer.apple.com/documentation/swiftui/picker). The inline style displays all items as a vertical list, and adds a blue checkmark to the currently selected one.

### If you're asking 1 question on the screen

If the picker is a question that takes up the whole screen, place the question in the [Title](/ios/title) component, use the same question as the picker label and hide it visually with `.labelsHidden()`. This makes sure that the label is still associated with the picker for VoiceOver users.

```swift { .nhsuk-code--button }
private let question = "When are you next due to take your medicine?"
private let options = [
    "In less than 6 hours",
    "In 6 to 12 hours",
    "More than 12 hours",
    "I’m not sure"
]

@State private var selection: String?

var body: some View {
    Form {
        Title(question)

        Picker(question, selection: $selection) {
            ForEach(options, id: \.self) { option in
                Text(option)
                    .tag(option as String?)
                    .font(.nhsBody)
            }
        }
        .pickerStyle(.inline)
        .labelsHidden()
    }
    .formStyle(.nhsForm)
    .formActions {
        Button("Continue") { }
            .buttonStyle(.nhsPrimary)
            .disabled(selection == nil)
    }
}
```

### If you're asking more than 1 question on the screen

If you are asking more than 1 question on the screen, use a visble label and style it using `nhsSectionHeaderStyle()`.

![Inline picker labelled “How would you like to have your appointment?” A blue checkmark marks “In person” as selected. The other options are “By phone” and “No preference”.](/assets/images/ios/inline-picker.png)

```swift { .nhsuk-code--button }
@State private var appointmentType: String?

Picker(selection: $appointmentType) {
    ForEach(["In person", "By phone", "No preference"], id: \.self) { option in
        Text(option)
            .tag(option as String?)
    }
} label: {
    Text("How would you like to have your appointment?")
        .nhsSectionHeaderStyle()
}
.pickerStyle(.inline)
```

## Research

We are currently researching whether users can tell that all answers are selectable. The default iOS style only shows a blue checkmark next to the selected answer.

If you have any user research findings on this, please share them with us.