---
layout: layouts/ios.njk
title: Lists
tags:
  - iosLayouts
---

List views present rows of data in a single column.

## When to use

Use a list view for a screen containing a collection of similar rows backed by data that isn't fixed, such as messages, appointments or medications.

If the data can be re-ordered by the user, or you want to enable swipe actions on each row.

You can also group rows into sections, for example recurring appointments and one-off appointments.

Each row in the list can be linked to a detail view. When doing this, a chevron will be displayed on the right.

Users using the VoiceOver screen reader will hear the content announced as a list, and the number of items there are. As they navigate through the list, the position within the list will be announced.

## When not to use

Do not use a list view if the screen is prose-heavy. Use a [scroll view](/ios/scroll-views) instead.

If you find yourself overriding the default styling on most rows, for example giving them a clear background or hiding their separators, the screen belongs in a [scroll view](/ios/scroll-views) instead.

If the screen collects input through a fixed set of controls, for example a group of toggle rows, use a [form view](/ios/forms) instead.

## How to use

This example shows a list of prescriptions, with each row linking to a detail view:

{% example "list/example.njk" %}

For full documentation, see [SwiftUI: List](https://developer.apple.com/documentation/SwiftUI/List) on the Apple developer documentation website.
