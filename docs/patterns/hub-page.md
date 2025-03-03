---
layout: layouts/pattern.njk
title: Hub page
description: Hubs pages are the main menu pages in the NHS App. Each hub page contains a group of related links.
backlogID: 69
tags:
  - page
---

{% example "hub-pages/example.njk" %}

## The structure of a hub page

### Main heading

This is the name of the hub page.

### Description text (optional)

You can use a brief description to give users more context about a hub page. We don’t include full stops at the end of this description, following a similar principle to the [NHS service manual guidance on cards](https://service-manual.nhs.uk/content/formatting-and-punctuation#full-stops).

### Section heading

Use [section headings](/components/section-heading) to break up card links into themes.

This can help users to scan the information on the page more easily and reduces the cognitive load. Research shows that people can be overwhelmed by long lists on NHS App pages.

Do not list more than 6 card links in a row without using a section heading.

### Card links

[Card links](/components/card-links) on the hub pages can lead either directly into a service or feature, or to a sub-hub where more options are available.

## How to use hub pages

Hub pages are used as the main navigational pages within the information architecture of the NHS App. They must always be accessible from either the top navigation bar or the bottom navigation bar of the NHS App so that users can select them at any time.

## How not to use hub pages

Do not include a back button on hub pages. Hub pages are the starting point for deeper pages in the app, which should always include a back button.

## Current hub pages

### Services

This is where users can take actions to arrange healthcare or look after their health. People visit this hub when they want to start using a transactional service. For example, to request a repeat prescription or book a GP appointment.

{% example "hub-pages/services.njk" %}

### Your health

This is where users can view and manage their personal records, health choices and requests that are already in progress. For example, to manage an upcoming appointment, track a prescription request or view their GP health record.

{% example "hub-pages/your-health.njk" %}

### Messages

This is where users can read, and sometimes reply to, messages from their healthcare services. The number and type of inboxes available to them will depend on their GP surgery.

{% example "hub-pages/messages.njk" %}

### Account

In this area, users can change their contact and log in details (their NHS login) or manage services for another person. They can also change NHS App settings such as notifications, biometric login and cookies preferences.

{% example "hub-pages/account.njk" %}
