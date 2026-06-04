---
layout: layouts/get-started.njk
title: Adapt your web journey for the native NHS App
description: How to adapt your existing web journey so it works inside the native NHS App using a web overlay.
tags:
  - howto
---

## Overview

For the first native NHS App release, users will start their journeys on native menu screens. If they then select a website-hosted NHS App service from one of those menu screens, it will open in a web overlay.

<figure class="nhsuk-image">
  <video autoplay loop muted playsinline class="app-image__video">
    <source src="/assets/images/web-overlay/full-journey.mp4" type="video/mp4">
  </video>
  <!-- Fallback for browsers that don't support video -->
    <img class="app-image__fallback" src="/assets/images/web-overlay/full-journey.png" alt="">
  <figcaption class="nhsuk-image__caption">This approach tested well in user research and helped users get their bearings.</figcaption>
</figure>

In the longer term, our ambition is to make the app more fully native. This may mean rebuilding certain web journeys using native code in the future.

## Which type of overlay to use

### Custom web view

Use a custom web view for:

- website-based app journeys (such as requesting a repeat prescription, viewing test results or booking a GP appointment)
- authenticated NHS website journeys (such as 111 online)
- authenticated third-party journeys (such as online consultations, Wayfinder integrations and Be Part of Research)

<img class="app-image--no-border" src="/assets/images/web-overlay/custom-web-view.png" alt="">

### Web browser overlay

Use a standard web browser overlay (Safari View or Chrome Custom Tabs) for:

- unauthenticated NHS website journeys (such as Health A to Z, Find NHS services and App help)
- unauthenticated third-party information websites (for example, Lab Tests Online)

<img class="app-image--no-border" src="/assets/images/web-overlay/web-browser-overlay.png" alt="">

## How to adapt your journey to a custom web view

### Add a title to the toolbar

Give the web view a title that matches the name of the service. Check with a content designer, but this will usually match with the card link that leads into the service. For example, “Request a repeat prescription”.

### Hide elements that could confuse users

On the first page of the journey, hide the back button. Include the back button on every other page.

<img class="app-image--no-border" src="/assets/images/web-overlay/hide-elements.png" alt="">

Work with designers to check for any other website elements that may be better removed or hidden from the custom tab. For example, links to external website that may lead users stranded outside of the main journey.

<figure class="nhsuk-image">
  <img class="app-image--no-border" src="/assets/images/web-overlay/hide-elements-confirmation.png" alt="">
  <figcaption class="nhsuk-image__caption">In this example, the 'Upcoming and past appointments' link has been hidden so users don't navigate deeper into the overlay and get lost. When a user selects 'Done', they return to the native Appointments screen, which links to 'Manage GP appointments'.</figcaption>
</figure>

### Help users exit the overlay

Include an X button in the toolbar so that users can exit easily.

<figure class="nhsuk-image">
  <video autoplay loop muted playsinline class="app-image__video">
    <source src="/assets/images/web-overlay/close.mp4" type="video/mp4">
  </video>
  <!-- Fallback for browsers that don't support video -->
    <img class="app-image__fallback" src="/assets/images/web-overlay/close.png" alt="">
</figure>

This applies on every page apart from the final screen of transactional services where you should include a “Done” button instead.

<figure class="nhsuk-image">
  <video autoplay loop muted playsinline class="app-image__video">
    <source src="/assets/images/web-overlay/done.mp4" type="video/mp4">
  </video>
  <!-- Fallback for browsers that don't support video -->
    <img class="app-image__fallback" src="/assets/images/web-overlay/done.png" alt="">
</figure>

Show an alert when users select the X button in the middle of a transactional flow, where they have been entering data or making choices.

<figure class="nhsuk-image">
  <video autoplay loop muted playsinline class="app-image__video">
    <source src="/assets/images/web-overlay/close-alert.mp4" type="video/mp4">
  </video>
  <!-- Fallback for browsers that don't support video -->
    <img class="app-image__fallback" src="/assets/images/web-overlay/close-alert.png" alt="">
</figure>

Do not include an alert on journeys with no data input. Do not include an alert on the first page of journeys before users will have entered any information.

<img class="app-image--no-border" src="/assets/images/web-overlay/close-alert-message.png" alt="">

Alerts should consistently use the content shown in the examples above, which adheres to iOS and Android platform design guidance.
