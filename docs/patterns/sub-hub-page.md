---
layout: layouts/pattern.njk
title: Sub-hub page
backlogID: 249
tags:
  - page
---

Sub-hubs are lower-level menu pages. Users can access them through [hub pages](/patterns/hub-page/).

Whereas hub pages represent broader groupings of information, sub-hubs contain more closely connected groups of links. They are positioned lower down in the [information architecture]().

{% example "sub-hub-pages/care-plans.njk" %}

## Structure of sub-hubs

### Back link

Always include a back link at the top of sub-hubs. This allows users to return to the hub page they came from.

### Main heading

This is the name of the sub-hub.

### Descriptive text (optional)

You can use a brief description to give users more context about a sub-hub. We don’t include full stops at the end of this description, following a similar principle to the [NHS service manual guidance on cards](https://service-manual.nhs.uk/content/formatting-and-punctuation#full-stops).

### Section heading

Use [section headings](/components/section-heading/) to break up card links into themes. It helps users to scan the information on the page more easily and reduces cognitive load. Research shows that people can be overwhelmed by long lists on NHS App pages.

Do not list more than 6 card links in a row without using a section heading.

### Card links

[Card links](/components/card-links/) on a sub-hub should lead directly into a specific service or feature.

Do not create further menu pages that sit one level below a sub-hub. Research shows it can be frustrating for users if they need to navigate through multiple pages to find what they are looking for.

## How to use sub-hubs

Use a sub-hub when you have evidence that grouping several links as a distinct category, one level below a hub page, would be helpful for users.

Before adding a new sub-hub, explore whether you could position the links on the hub page under a section heading instead.

## Examples on the NHS App

### Appointments

{% example "sub-hub-pages/appointments.njk" %}

### Prescriptions

{% example "sub-hub-pages/prescriptions.njk" %}
