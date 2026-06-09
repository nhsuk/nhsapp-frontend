---
layout: layouts/base.njk
title: iOS
description: TODO
---
{% from 'nhsapp/components/tag/macro.njk' import nhsappTag %}

{{ nhsappTag({
  text: 'Work in progress',
  classes: 'nhsapp-tag--blue nhsuk-u-margin-bottom-4'
})}}

# iOS

We are transforming the NHS App to be more platform-native.

This page documents how that applies to the iOS platform for iPhones and iPads.

## Platform features

The native app will support these iOS features and accessibility settings:

* [Dynamic Type](https://developer.apple.com/documentation/uikit/scaling-fonts-automatically)
* [Dark Mode](https://developer.apple.com/design/human-interface-guidelines/dark-mode)
* [Increase Contrast](https://developer.apple.com/documentation/swiftui/colorschemecontrast) mode
* [VoiceOver](https://developer.apple.com/documentation/accessibility/voiceover)
* Portrait and landscape orientation
* Reduce Transparency mode
* Differentiate Without Color mode
* Reduce Motion mode

We may also support:

* iPad layouts
* Offline access

Many of these features we will get by default when using SwiftUI, however we may need to do extra work to support them for any custom features.
