---
layout: layouts/style.njk
title: Icons
description: Use icons as visual cues, to help users understand and navigate content.
backlogID: 61
tags:
  - style
---

![5 icons. Switch profiles, messages, home, cross and help icons.](/assets/images/icons.png)

## When to use

Use icons when you have evidence that doing so will:

- reinforce meaning
- improve comprehension
- help with recognition

## When not to use

Use icons sparingly. Too many icons on a page will reduce the effect.

Do not use icons unless there is a particular need to make the content more visual. Text is often enough.

Be mindful about how much an icon can make one piece of content on a page stand out from surrounding information. It may not work to use icons for less-important information on a page, because it could make that content seem too prominent.

## How to use

We use scalable vector graphics (SVG) files for icons. They can be used with or without supporting text.

{% include "layouts/icons-example.njk" %}

<p>You can find the <a href="https://www.figma.com/design/6f2CbcZ7cnpNrtKEcfQp8X/NHS-App-Design-System?node-id=9994-823&p=f&t=VHQbQWtP3hvHke31-0" class="nhsuk-link--no-visited-state" target="_blank" rel="noopener noreferrer">icons in Figma (opens in a new tab)</a>

## Accessibility

Icons that act as functional buttons should have aria labels, so that they are announced to screen reader users. If an icon is not functional, and it appears alongside supporting text that conveys the same meaning, it may not need alt-text or an aria label.

Designers and developers should work together to understand the most accessible option in context, considering [NHS Service Manual accessibility guidance](https://service-manual.nhs.uk/accessibility/design).

## Research

The icons used on the top navigation and bottom navigation of the NHS App were well-recognised when shown to users without supporting text in our research sessions.

Participants generally understood the meaning of the icons. However, the research supported the need for some icons to have accompanying text to make the meaning clear.
