---
layout: layouts/ios.njk
title: Forms
tags:
  - iosLayouts
---

Form views let users answer questions.

## When to use

Use a form view when the screen collects user input or configuration, for example using toggles, pickers or text fields.

A form may contain several items, but the items do not change or get reordered, instead the user changes the values within them.

Forms can include screens that look like a list, for example a set of toggle rows for a multiple-choice question. If the rows are fixed and not backed by data, use a form view.

## When not to use

Do not use a form view if the screen contains a list of similar items that the user can navigate to or take actions on, use [list views](/ios/lists) instead.

If the screen only contains content and buttons or links, use a [scroll view](/ios/scroll-views) instead.

## How to use

This example shows an example of a form:

```swift { .nhsuk-code--button }
let ratings = [
    "Very good",
    "Good",
    "Neither good nor poor",
    "Poor",
    "Very poor"
  ]

var body: some View {
    VStack {
        Form {
            Section {
                Picker("Rating", selection: $rating) {
                    ForEach(ratings, id: \.self) { option in
                        Text(option)
                    }
                }
                .pickerStyle(.inline)
            } header: {
                Text("Overall, how would you rate your experience of the service?")
            }
        }

        Button("Continue")
    }
}
```

For full documentation, see [SwiftUI: Form](https://developer.apple.com/documentation/SwiftUI/Form) on the Apple developer documentation website.
