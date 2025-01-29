---
layout: layouts/pattern.njk
title: Hub page
description: Hubs pages are the main menu pages in the NHS App. Each hub is a grouping of related links. From a hub, users can follow links to start particular journeys or move deeper into the app to lower menu pages (sub-hubs).
backlogID: 69
tags:
  - pattern
---

{% example "hub-pages/your-health.njk" %}

## How to use hub pages

Hub pages are used at the highest level of the NHS App structure. They should always be accessible from the header or footer bar (the global navigation).

### The structure of a hub page

{% example "hub-pages/services.njk" %}

#### Page heading

This page heading is the name of the hub.

#### Page description

This short description is placed below the main heading. It gives users context about what each hub contains. On main hubs this text should be as concise as possible and fit into one line.

#### Card links

Use [card links](/components/card-links) takes users to a sub-hub or to the start of a specific journey.

If a hub page includes a long list of card links (more than 5 is a good guide) you should consider using [section heading](/components/section-heading) to group card links together.

This can help to divide and organise a page. It makes the page easier to scan and reduces the cognitive load on users. Research shows that users can be overwhelmed by long lists on NHS App pages.

#### Back buttons

Back buttons are not used on hub pages, as they are the starting point for different journeys. All journeys or sub-hubs accessed from a hub page will have a back button.

## Adding journeys to hub pages

For help with adding journeys to hub pages, see our guidance on adding a new journey to the NHS App.

## Research

In our research into hub labelling, users correctly understood that ‘Services’ relates to future care and support. ‘Your health’ was correctly associated with ongoing healthcare, health records and personal choices. Iterative adjustments were made to the hub labels throughout the research, including the transition from 'Medical Support' to 'Services’ based on user feedback.

### Hub icons

The hub icons on the header and footer bars were well recognised. The 'Your Health,' 'Messages,' 'Home,' and 'Account and Settings' icons were universally associated correctly by 100% of participants.

However, the 'Services' icon displayed varied associations, with 60% linking it to 'Your Health,' 20% directly to 'Services,' 13% to 'Help and Support,' and 7% to 'Switch Profiles.'
