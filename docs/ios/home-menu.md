---
layout: layouts/ios.njk
title: Home menu
tags:
  - iosComponents
---

The home menu lists the main sections of the app.

<img src="/assets/images/ios/HomeMenu.png" width="320">

## When to use

Use it once, on the home screen.

## When not to use

Do not use it on any sub-sections or anywhere that’s not the home screen.

## How it works

Each item in the home menu has an icon and a short label.

The layout varies by screen size and text size:

- on mobile at standard text size, the menu appears as a grid with 2 columns
- on tablets or in landscape on larger phones, the grid contains 3 columns
- at larger text sizes, the menu switches to a single column grid
- at very large text sizes, the icon is no longer shown.

## How to use

Use the home menu within a SwiftUI view:

{% example "home-menu/home-menu.njk" %}

### Actions

Each item will trigger an action when tapped. Specify this using the `action` closure.

Usually this will navigate to a new screen. A common pattern is to push a value onto a `NavigationPath` and use the `.navigationDestination(for:)` modifier to map that value to a destination view:

{% example "home-menu/home-menu-navigate.njk" %}

The action could also present a view as a modal sheet instead of navigating to it.

For example, if the user does not yet have access to their records, a separate view can be presented to them as a modal sheet:

{% example "home-menu/home-menu-modal.njk" %}

## Accessibility

This component supports Dynamic Type, Dark Mode and VoiceOver.

The `title` for each menu item is read out by VoiceOver. The icon images are not read out.

## Research

This component is not yet being used by the live NHS App, but several rounds of research have been done on it.
