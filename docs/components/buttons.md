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

Our secondary button design differs from the NHS design system. The [research section](#secondary-button-1) below has more details about why.

Use a secondary button either:

- for secondary actions on a page
- when an action needs less prominence – for example because it is optional

{% example "buttons/button-secondary.njk" %}

### Buttons on dark backgrounds (reverse button)

{% example "buttons/button-reverse.njk" %}

### Grouping buttons

Use a button group when two or more buttons are placed together.

{% example "buttons/button-group.njk" %}

Any links within a button group will automatically align with the buttons.

{% example "buttons/button-group-link.njk" %}

## Research

### Full width buttons

Testing on the NHS App has found that full width buttons are not a problem for users with smaller screens. But we will continue to test if:

- full width buttons are problematic for users with low digital skills
- users don’t actually see them as actionable things to click

### Secondary button

We designed the NHS App secondary button as an alternative to a secondary button with a grey background. This was because our research found some participants overlooked that design or believed it was a disabled button. Some participants hesitated before selecting the button. The visual hierarchy of primary and secondary buttons was also found to be unclear for people with monochromatic vision.

In moderated usability testing, six out of six participants were able to use the NHS App secondary button for a variety of actions and without hesitation. Two participants had colour vision deficiency (colour blindness).
