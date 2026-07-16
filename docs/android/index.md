---
layout: layouts/base.njk
title: Android
---

{% from 'nhsapp/components/tag/macro.njk' import nhsappTag %}

{{ nhsappTag({
  text: 'Work in progress',
  classes: 'nhsapp-tag--blue nhsuk-u-margin-bottom-4'
})}}

# Android

We are transforming the NHS App to be more platform-native.

This page documents how that applies to the Android platform for phones and tablets.

## Platform features

The native app will support these Android features and accessibility settings:

- [Type scaling](https://developer.android.com/design/ui/wear/guides/styles/typography/accessibility)
- [Dark theme](https://developer.android.com/develop/ui/views/theming/darktheme)
- [Increase contrast](https://developer.android.com/reference/com/google/android/material/color/ColorContrast) mode
- [Outline text](https://developer.android.com/about/versions/16/features)
- [TalkBack](https://support.google.com/accessibility/android/answer/6283677)
- [Switch access](https://support.google.com/accessibility/android/answer/6122836)
- [Foldable devices](https://developer.android.com/phones-tablets-foldables)
- Portrait and landscape orientation
- Reduce transparency mode
- Differentiate without color mode
- Reduce motion mode

We may also support:

- Tablet layouts
- Offline access

Many of these features we will get by default when using Jetpack Compose, however we may need to do extra work to support them for any custom features.
