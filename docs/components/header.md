---
layout: layouts/component.njk
title: Header (web)
description: Use the header at the top of every page to show users they are on an NHS App and help them get started in finding what they need.
backlogID: 18
tags:
  - component
---

## How to use

We extend the [NHS design system header](https://service-manual.nhs.uk/design-system/components/header) with added `nhsapp-u-hide-from-tablet` and `nhsapp-u-hide-until-tablet` modifier classes to show and hide nav items.

### Header with user logged in

{% example "header/header-logged-in.njk" %}

### Header with user not logged in

{% example "header/header-not-logged-in.njk" %}
