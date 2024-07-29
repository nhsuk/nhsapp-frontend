---
layout: layouts/component.njk
title: Buttons
description: Use buttons to help users to carry out an action.
backlogID: 12
tags:
  - component
---

## How to use

We use the [NHS design system button](https://service-manual.nhs.uk/design-system/components/buttons) with a modifier class of `nhsapp-button` to make buttons full width on smaller screens.

### Primary button

{% example "buttons/button-primary.njk" %}

### Secondary button

{% example "buttons/button-secondary.njk" %}

### Buttons on dark backgrounds (reverse button)

{% example "buttons/button-reverse.njk" %}

### Grouping buttons

Use a button group when two or more buttons are placed together.

{% example "buttons/button-group.njk" %}

Any links within a button group will automatically align with the buttons.

{% example "buttons/button-group-link.njk" %}

## Research

Testing on the NHS App has found that full width buttons are not a problem for users with smaller screens. But we will continue to test if:

- full width buttons are problematic for users with low digital skills
- users don’t actually see them as actionable things to click
