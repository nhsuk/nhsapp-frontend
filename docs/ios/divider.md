---
layout: layouts/ios.njk
title: Divider
tags:
  - iosStyles
---

Use `NHSDivider()` to add a divider between items within a custom [card style](/ios/card-style) component.

The divider works in the same way as the [SwiftUI Divider](https://developer.apple.com/documentation/swiftui/divider) component, but is styled using the NHS [colour](/ios/colours) palette.

![Screenshot of a white card component with 'First item' and 'Second item' separated by a pale blue horizontal line](/assets/images/ios/divider.png)

## How to use

Use divider within a custom view:

```swift { .nhsuk-code--button }
VStack(alignment: .leading, spacing: 16) {
    Text("First item")
    NHSDivider()
    Text("Second item")
}
.foregroundStyle(.nhsText)
.nhsCardStyle()
```

### Custom colours and thickness

You can also change the colour of the divider and its thickness:

![Screenshot of a pale blue card component with 'First item' and 'Second item' separated by a thicker, darker blue horizontal line](/assets/images/ios/divider-custom.png)

```swift { .nhsuk-code--button }
VStack(alignment: .leading, spacing: 16) {
    Text("First item")
    NHSDivider(color: .nhsBlue.opacity(0.2), thickness: 2)
    Text("Second item")
}
.foregroundStyle(.nhsText)
.nhsCardStyle(backgroundColor: .nhsPaleBlue)
.padding()
.background(.nhsBackground)
```
