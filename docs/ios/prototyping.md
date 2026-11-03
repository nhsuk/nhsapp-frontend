---
layout: layouts/docs.njk
title: Prototyping
order: 2
section: iOS
subsection: Get started
theme: Get started
---

To design and test features or changes for the native iOS NHS App, we recommend that you prototype in code rather than in Figma or other visual tools.

This is especially important as the visual appearance and behaviour will vary much more than with the web-based app. It changes based on the version of iOS and the user’s settings and accessibility features, for example text size and dark mode.

Unlike the existing [web-based NHS App prototypes](/get-started/nhsapp-prototype/) which use HTML and Nunjucks, for the iOS app you will use a language called Swift and a framework called SwiftUI.

## Tools you will need

To build a prototype for the native iOS app, you will need:

- a Mac computer
- the [Xcode app](https://developer.apple.com/xcode/)
- a [GitHub](https://github.com) account
- access to an iPhone or iPad to test on (you can use the iOS simulator but testing on real hardware is recommended)

## Creating a new prototype

You can create a new prototype by starting a new app project within Xcode and then following the guide to [adding the Swift package](/ios/installing/) for the NHS iOS design system.

Alternatively, you can begin by using the [example NHS iOS app](https://github.com/NHSDigital/native-nhsapp-ios-prototype-example) on GitHub as a template. This already has the Swift package added, and contains the home screen and some example screens to get you started.

## Adding screens

Prototype new screens by creating a new view file for each one, named after what it does, for example `FindAPharmacyView`.

To create a new view file in Xcode, go to ‘File’, then ‘New’, then ‘File from Template’, and choose ‘SwiftUI View’. This creates a file that imports SwiftUI, defines a view named the same as the file, and adds a `#Preview` block at the bottom so you can preview the screen as you edit it.

Then add `import NHSDesignSystem` underneath `import SwiftUI` so you can use the NHS iOS design system.

Your file should look like this:

```swift { .nhsuk-code--button }
import SwiftUI
import NHSDesignSystem

struct FindAPharmacyView: View {
    var body: some View {
        Text("Hello, World!")
    }
}

#Preview {
    FindAPharmacyView()
}
```

Within the `body` section, use the [form](/ios/forms/), [list](/ios/lists/) or [scroll view](/ios/scroll-views/) layout, and then add components to the layout.

## Sharing your prototype

To share your prototype with other people so they can try it on their own iPhone or iPad, you can [upload it to TestFlight](/ios/uploading-testflight-app/).
