---
layout: layouts/get-started.njk
title: Adapt your web journey for the NHS App
description: How to adapt your existing web journey so it works inside the native NHS App using a web overlay.
tags:
  - howto
---

## When to use

Use web overlays when users go into:

- any transactional NHS App services
- their health records

## When not to use

Do not use web overlays for any of the main menu screens in the NHS App, including the:

- home screen
- hub screens (Profile and Messages)
- sub-hub screens (such as Appointments and Prescriptions)

These are built using native code to give users the best experience while they navigate the core screens of the app.

## How to use

Use WebView to open transactional NHS services and health records.

### Hide unhelpful elements

To avoid users getting lost in an overlay you should hide the:

- web page header and footer
- back link on the first page
- any links that take users out of the journey, such as links to other parts of the website or to external sites, as these can leave users stranded with no clear way back

### Give a title in the toolbar

In the toolbar for WebView journeys you should include a title for the service. For example, "Request a repeat prescription".

Keep titles short and specific. If a title is too long to fit, it is shortened with an ellipsis (…), so put the most important words first. The exact length that fits depends on screen width, so confirm the limit with the native team.

### Help users to exit the overlay

Include an X icon in the toolbar on:

- the first page
- pages within flows where users are only given information and cannot input data (for example, their medicines record)

Use an X icon with an alert on pages within flows with data input (for example, selecting a GP appointment).

Use a Done button on final pages (for example, a confirmation page).