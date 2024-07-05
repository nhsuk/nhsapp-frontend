---
layout: layouts/component.njk
title: Section heading
description: Section headings are second-level headings (marked as H2 in the code). Use them to break pages up into sections.
tags:
  - component
---

{% example "section-heading/section-heading-default.njk" %}

### When to use

Use section headings to separate pages into distinct sections. This helps to create hierarchy and structure.

Organising content into sections with descriptive headings can help users:

- find what they need more easily
- understand the relationship between different parts of a page

Section headings may be particularly helpful to users on:

- longer pages
- pages with several distinct groupings of information

### When not to use

Section headings are not interactive, so do not use them as selectable headers.

### How to use

Place section headings at the start of a new area of information or options. They can be followed by text, panel links or other components.

Section headings should only be a few words long. The text should not go over one line.

#### With a link

This component has the option to toggle on a right-aligned link text. On the homepage, these links are used for “View all”, allowing users to navigate to a hub page containing the full list of features represented by the section title.

{% example "section-heading/section-heading-with-link.njk" %}

#### With supporting text

{% example "section-heading/section-heading-with-description.njk" %}

### Accessibility

Section headings can act as an important H2 anchor point for screen reader users when they navigate pages by headings.

### Research

In usability testing, we have regularly seen users scan through pages by section title to find what they are looking for.
