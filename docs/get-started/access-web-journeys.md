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
    <img class="app-image__fallback" src="/assets/images/web-overlay/full-journey.png" alt="Video showing a user entering and interacting with a full-screen web overlay from the native app.">
  <figcaption class="nhsuk-image__caption">This approach tested well in user research and helped users get their bearings.</figcaption>
</figure>

In the longer term, our ambition is to make the app more fully native. This may mean rebuilding certain web journeys using native code in the future.

## Which type of overlay to use

### Custom web view

Use custom web views if you need to customise or control how a journey is presented in the NHS App.

This includes:

- **website-based app journeys** – such as requesting a repeat prescription, viewing test results or booking a GP appointment
- **NHS website journeys** – both authenticated (such as 111 online) and unauthenticated (such as Health A to Z, Find NHS services and App help)
- **authenticated third-party journeys** – such as online consultations, Wayfinder integrations and Be Part of Research
- **the "Give feedback on the NHS App" survey** – which contains links to the NHS website that we need to display in a custom web view

<img class="app-image--no-border" src="/assets/images/web-overlay/custom-web-view.png" alt="Examples of a custom web view being used for repeat prescriptions, online constulations and NHS website journeys.">

### Web browser overlay

We use a standard web browser overlay (Safari View or Chrome Custom Tabs) for journeys that do not need any customisation for how they show in the NHS App.

Use a standard web browser overlay for unauthenticated third-party information websites. For example, online pharmacy websites.

<img class="app-image--no-border" src="/assets/images/web-overlay/web-browser-overlay.png" alt="Examples of Safari View being used for the external websites Bamboo Pharmacy, British Heart Foundation and a Department of Health PDF.">

## How to adapt your journey to a custom web view

### Add a title to the toolbar

Give the web view a title that matches the name of the service. Check with a content designer, but this will usually match with the card link that leads into the service. For example, “Request a repeat prescription”.

### Hide elements that could confuse users

On the first page of the journey, hide the back button. Include the back button on every other page.

<img class="app-image--no-border" src="/assets/images/web-overlay/hide-elements.png" alt="An example showing how the NHS website header and footer are visible in the web browser version of the app, but hidden when presented in the web overlay.">

Work with designers to check for any other website elements that may be better removed or hidden from the custom tab. For example, links to external website that may lead users stranded outside of the main journey.

<figure class="nhsuk-image">
  <img class="app-image--no-border" src="/assets/images/web-overlay/hide-elements-confirmation.png" alt="Example of an appointment confirmation screen. An upcoming and past appointments link is visible on a web page but hidden in the custom web view.">
  <figcaption class="nhsuk-image__caption">In this example, the "Upcoming and past appointments" link has been hidden so users don't navigate deeper into the overlay and get lost. When a user selects "Done", they return to the native Appointments screen which links to "Manage GP appointments".</figcaption>
</figure>

<figure class="nhsuk-image">
  <img class="app-image--no-border" src="/assets/images/web-overlay/hide-elements-nhsuk.png" alt="Example of the Find services near you page on a website, and then the same page with elements hidden in a custom web view.">
  <figcaption class="nhsuk-image__caption">Here, the NHS website header (including the search bar) and the breadcrumb links at the top of the page have been hidden. This prevents users from navigating to other parts of the NHS website and getting lost, which we've seen happen often in past user research. </figcaption>
</figure>

### Help users exit the overlay

Include an X button in the toolbar so that users can exit easily.

<figure class="nhsuk-image">
  <video autoplay loop muted playsinline class="app-image__video">
    <source src="/assets/images/web-overlay/close.mp4" type="video/mp4">
  </video>
  <!-- Fallback for browsers that don't support video -->
    <img class="app-image__fallback" src="/assets/images/web-overlay/close.png" alt="Video showing an overlay opening and then closing when X is selected.">
</figure>

This applies on every page apart from the final screen of transactional services where you should include a “Done” button instead.

<figure class="nhsuk-image">
  <video autoplay loop muted playsinline class="app-image__video">
    <source src="/assets/images/web-overlay/done.mp4" type="video/mp4">
  </video>
  <!-- Fallback for browsers that don't support video -->
    <img class="app-image__fallback" src="/assets/images/web-overlay/done.png" alt="Video showing a confirmation screen closing when done is selected.">
</figure>

Show an alert when users select the X button in the middle of a transactional flow, where they have been entering data or making choices.

<figure class="nhsuk-image">
  <video autoplay loop muted playsinline class="app-image__video">
    <source src="/assets/images/web-overlay/close-alert.mp4" type="video/mp4">
  </video>
  <!-- Fallback for browsers that don't support video -->
    <img class="app-image__fallback" src="/assets/images/web-overlay/close-alert.png" alt="Video showing an alert overlaid on a screen, warning users their progress will not be saved if they exit.">
</figure>

Do not include an alert:

- on journeys with no data input
- on the first page of journeys, at which point users will not have entered any information

<img class="app-image--no-border" src="/assets/images/web-overlay/close-alert-message.png" alt="Video showing the alert content. The text is 'Exit this service? Your progress will not be saved' and there are buttons to cancel or exit.">

Alerts should consistently use the content shown in the examples above, which adheres to iOS and Android platform design guidance.

### Open further links in a sheet

The main journey opens as a full-screen overlay, because it's the task the user came to do. For example, viewing their medicines record.

When a user opens a link from within that journey, such as an NHS website page with more information, show it as a sheet.

A sheet is a partial overlay that slides up over the journey. It still uses a custom web view, but presenting it as a sheet keeps the main journey visible underneath. This shows users it's a temporary step and lets them dismiss it to get back to where they were.

<figure class="nhsuk-image">
  <video autoplay loop muted playsinline class="app-image__video">
    <source src="/assets/images/web-overlay/webview-sheet.mp4" type="video/mp4">
  </video>
  <!-- Fallback for browsers that don't support video -->
    <img class="app-image__fallback" src="/assets/images/web-overlay/webview-sheet.png" alt="Video of a user who is already in a full-screen custom web view selecting an NHS website. It opens in a sheet the slides over the top of the full-screen overlay.">
</figure>

External links work the same way, but use the web browser overlay instead of a custom web view. When a user opens a link to a third-party website from a full-screen overlay, open it in the web browser overlay (Safari View or Chrome Custom Tabs) as a sheet.

The principle is the same. The sheet keeps the page they were reading underneath, so they can read the external site and dismiss it to return.

<figure class="nhsuk-image">
  <video autoplay loop muted playsinline class="app-image__video">
    <source src="/assets/images/web-overlay/webview-external-link.mp4" type="video/mp4">
  </video>
  <!-- Fallback for browsers that don't support video -->
    <img class="app-image__fallback" src="/assets/images/web-overlay/webview-external-link.png" alt="Another video showing a sheet in action, but this time the user is following a third-party link which opens as a sheet in a web browser overlay.">
    <figcaption class="nhsuk-image__caption">In this example, the user is in the "Get health information and advice" overlay and selects the British Heart Foundation website link. Because it's an external site, it opens at bhf.org.uk in the web browser overlay, shown as a sheet over the page they were reading.</figcaption>
</figure>

The example below shows the "Give feedback" journey. The Qualtrics survey link opens in full-screen custom web view. The NHS website links in that journey then open as a custom web view sheet.

<figure class="nhsuk-image">
  <video autoplay loop muted playsinline class="app-image__video">
    <source src="/assets/images/web-overlay/give-feedback.mp4" type="video/mp4">
  </video>
  <!-- Fallback for browsers that don't support video -->
    <img class="app-image__fallback" src="/assets/images/web-overlay/give-feedback.png" alt="A video showing the Qualtrics survey opening in a full-screen custom web view, and an NHS website link on that journey opening as a sheet in a custom web view overlay.">
    <figcaption class="nhsuk-image__caption">This example shows the "Give feedback" survey journey. Although it's an unauthenticated, third-party journey, we use a full-screen custom web view rather than the web browser overlay. That lets us control how the NHS website links within the journey open. We open those links as custom web view sheets.</figcaption>
</figure>

### Giving users access to help

When users are completing a website-based app journey, use the bottom of the overlay to let them access the app help button.

The button should be present on every screen of the journey. It should open a relevant NHS App help page in a sheet.
