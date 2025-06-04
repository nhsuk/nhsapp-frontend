---
layout: layouts/pattern.njk
title: Homepage
description: The homepage shows the user their name and NHS number, and gives links to the most popular parts of the NHS App. We work this out using Adobe Analytics and user feedback. The homepage is also used to promote important health campaigns. 
pageNotice: notice-homepage
backlogID: 66
---

{% example "homepage/homepage-native.njk" %}

## The structure of the homepage

### Main heading

This main heading includes the name of the user and a greeting that changes depending on the time of day. The name is sourced from the [personal demographics service (PDS)](https://digital.nhs.uk/services/personal-demographics-service) and may display in sentence case or block capitals depending on the data.

Below the name, we display the NHS number of the user. In research, participants regularly tell us they find having their NHS number here to be useful.

### Section heading

We use [section headings](/components/section-heading/) to separate links by which hub page of the app they come from. Alongside these section headings, ‘View all’ links lead to the relevant hub page.

### Card links

[Card links](/components/card-links/) on the page lead either directly to the start of a journey, or to a hub page.

### Campaign card

The campaign card promotes public health messaging agreed on by the senior leadership team of the NHS App that:

- is relevant to most NHS App users
- has an onward digital journey that meets our [usability and accessibility standards](https://digital.nhs.uk/services/nhs-app/how-to-integrate-with-the-nhs-app/standards-for-nhs-app-integration)

## Proposing changes to the homepage

We’re careful to limit the number of links on the homepage. We need to make sure users can quickly scan through the page and access popular features.

The Navigation and Onboarding team maintains and updates the homepage. We regularly review and test the selection of links that are included. If you'd like to suggest changes to the homepage, please contact us on Slack.
