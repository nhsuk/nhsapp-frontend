---
layout: layouts/docs.njk
title: Android
section: Android
subsection: Get started
subsectionIndex: true
subsectionOrder: 1
---

{% from 'nhsapp/components/tag/macro.njk' import nhsappTag %}

We are transforming the NHS App to be more platform-native.

This page documents how that applies to the Android platform for phones and tablets.

## Platform features

The native app will support these Android features:

- [Dark theme](https://developer.android.com/develop/ui/views/theming/darktheme)
- [Foldable devices](https://developer.android.com/phones-tablets-foldables)
- Portrait and landscape orientation

We may also support:

- Tablet layouts
- Offline access

The native app will also support Android accessibility settings. Read more about [accessibility in the Android app](/accessibility/android/).

Many of these features we will get by default when using Jetpack Compose, however we may need to do extra work to support them for any custom features.

## Testing the app

If you've been invited, you can [install a test app from Google Play](/android/install-test-app/).
