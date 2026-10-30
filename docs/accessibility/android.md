---
layout: layouts/docs.njk
sectionCaption: Accessibility
title: Android app
section: Accessibility
subsection: Accessibility
theme: Accessibility
order: 5
---

The native NHS App for Android will support these accessibility settings:

- [Type scaling](https://developer.android.com/design/ui/wear/guides/styles/typography/accessibility)
- [Increase contrast](https://developer.android.com/reference/com/google/android/material/color/ColorContrast) mode
- [Outline text](https://developer.android.com/about/versions/16/features)
- [TalkBack](https://support.google.com/accessibility/android/answer/6283677)
- [Switch access](https://support.google.com/accessibility/android/answer/6122836)
- Reduce transparency mode
- Differentiate without color mode
- Reduce motion mode

We get many of these by default when using Jetpack Compose. We may need to do extra work to support them for any custom features.
