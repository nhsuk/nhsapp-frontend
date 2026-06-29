---
layout: layouts/ios.njk
title: Scroll views
tags:
  - iosPatterns
---

Scroll views display content as a vertically scrollable page.

## When to use

Use a scroll view for a screen containing primarily text content, for example a message.

You should also use a scroll view if your screen contains a mixture of different kinds of items, for example headings, links and buttons.

## When not to use

Do not use a scroll view if a [list view](/ios/lists) or [form view](/ios/forms) would be more appropriate.

If your screen is very long and contains a mixture of content, lists and forms, consider splitting it up into separate screens.

## How to use

This example shows a scroll view containing a message.

{% example "scroll-views/example.njk" %}

For full documentation, see [SwiftUI: ScrollView](https://developer.apple.com/documentation/SwiftUI/ScrollView) on the Apple developer documentation website.
