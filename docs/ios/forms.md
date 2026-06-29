---
layout: layouts/ios.njk
title: Forms
tags:
  - iosPatterns
---

Form views let users answer questions.

## When to use

Use a form view when the screen collects user input or configuration, for example using toggles, pickers or text fields.

A form may contain several items, but the items do not change or get reordered, instead the user changes the values within them.

## When not to use

Do not use a form view if the screen contains a list of similar items that the user can navigate to or take actions on, use [list views](/ios/lists) instead.

Do not use a form view if the screen only contains content and buttons or links, use a [scroll view](/ios/forms) instead.

## How to use

This example shows an example of a form:

{% example "forms/example.njk" %}

For full documentation, see [SwiftUI: Form](https://developer.apple.com/documentation/SwiftUI/Form) on the Apple developer documentation website.
