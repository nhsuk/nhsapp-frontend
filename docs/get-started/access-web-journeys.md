---
layout: layouts/get-started.njk
title: Adapt your web journey for the native NHS App
description: How to adapt your existing web journey so it works inside the native NHS App using a web overlay.
tags:
  - howto
---

## Overview

For the first native NHS App release, users will start their journeys on native menu screens. If they then select a website-hosted NHS App service from one of those menu screens, it will open in a web overlay.

This approach tested well in user research and helped users get their bearings.

In the longer term, our ambition is to make the app more fully native. This may mean rebuilding certain web journeys using native code in the future.

## Which type of overlay to use

Use a custom web view for:

- website-based app journeys (such as requesting a repeat prescription, viewing test results or booking a GP appointment)
- authenticated NHS website journeys (such as 111 online)
- authenticated third-party journeys (such as online consultations, Wayfinder integrations and Be Part of Research)

Use a standard web browser overlay (Safari View or Chrome Custom Tabs) for:

- unauthenticated NHS website journeys (such as Health A to Z, Find NHS services and App help)
- unauthenticated third-party information websites (for example, Lab Tests Online)

## How to adapt your journey to a custom web view

1. On the first page of the journey, hide the back button. Include the back button on every other page.
2. Give the web view a title that matches the name of the service. Check with a content designer, but this will usually match with the card link that leads into the service. For example, “Request a repeat prescription”.
3. Include an X icon in the toolbar so that users can exit easily. This applies on every page apart from the final screen of transactional services where you should include a “Done” button instead.
4. Show an alert when users select the X button in the middle of a transactional flow, where they have been entering data or making choices. Do not include an alert on journeys with no data input. Do not include an alert on the first page of journeys before users will have entered any information. Alerts should consistently use the content shown in the example below, which adheres to iOS and Android platform design guidance.
5. Work with designers to check for any other website elements that may be better removed or hidden from the custom tab. For example, links to external website that may lead users stranded outside of the main journey.
