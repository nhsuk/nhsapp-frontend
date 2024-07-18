---
layout: layouts/component.njk
title: Badge
description: Use badges to alert users to unread information. Badges can include a number count.
backlogID: 21
tags:
  - component
---

## When to use

Badges can be placed:

- on the edge of an icon
- on a card

Badges help to notify users about unread information that needs their attention. This could include new messages or new documents.

## How to use

Badges should be dynamic and temporary. After users have viewed the relevant information, badges should either:

- disappear
- remain if there are still unread items (but with an adjusted number count, if one is used)

There are different size and colour variations of badges.

### Large badges

Large badges always include a number count. This tells users how many items need their attention.

{% example "badges/badge-large.njk" %}

Above the count of 9, large badges always display 9+. This allows the width of the badge to be restricted to two characters.

{% example "badges/badge-large-9.njk" %}

### Small badges

Small badges are simple circles. They can be placed:

- on the edge of icons, such as on the bottom navigation
- on cards, alongside text, such as “Document attached” on appointment cards

{% example "badges/badge-small-red.njk" %}

The colour of small badges can be:

- red for important notifications that needs to stand out on a page
- blue for secondary notifications that can afford to be less prominent

For example, users will see a red badge on the bottom navigation to indicate unread messages.

![The bottom navigation menu with a red badge on the messages item to indicate unread messages.](/assets/images/bottom-nav-badge.png)

When they then navigate to their messages inbox to view those messages, unread message headings are indicated by blue badges.

{% example "cards/card-messages.njk" %}

## Accessibility

Badges are designed to stand out when placed over icons and cards. The contrast ratio is 3:1, meeting [WCAG 2.2. Contrast (Minimum) (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum).

We use visually hidden text to convey badges to screen reader users. Large badges announce the number count up to 9. They announce "nine plus" after that to match the visual display of 9+.

Small badges could announce "New notification", "Important" or "You have unread messages" depending on the context.
