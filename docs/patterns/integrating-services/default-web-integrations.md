---
layout: layouts/pattern.njk
title: Default browser integration
description: How to integrate a service with the NHS App using the default device browser, without adapting your service
backlogID: 450
order: 1
childPage: true
tags:
  - integratingServices
---

The default browser integration opens a service in the user's default browser whilst the useres stay in the NHS App. This is normally Safari View (iOS) or Chrome Custom Tabs (Android). You do not need to adapt your web service to use this type of integration.

## When to use

Use the default browser integration for services that are:

- unauthenticated
- third-party information websites
- not requiring NHS App branding or journey control

Examples include online pharmacy websites and external health information pages.

## When not to use

Do not use this integration type if:

- your service needs information about who is accessing it. Instead, use a [custom web view integration](/patterns/integrating-services/custom-web-integrations/)
- you need to control how links within the journey open. Instead, use a [custom web view integration](/patterns/integrating-services/custom-web-integrations/)
- your service exposes structured health data via an API. Instead, use an [API integration](/patterns/integrating-services/api-integrations/)

## How the default browser works

### In the current (web-based) NHS App

Some unauthenticated services open directly in the device's default browser. This takes users out of the NHS App context entirely. Users must return to the NHS App manually when they are done. You can currently control if your service opens inside the NHS App, or outside in their normal broswer.

### In the future native NHS App

In the native NHS App, the default browser will open as a web browser overlay. This is a view that sits on top of the native app. Users can dismiss it and return to where they were without leaving the app.

This also applies when users follow external links from within a custom web view journey. The external site opens as a sheet (a partial overlay) over the current page, so users can read the external content and dismiss it to return to their main task.

## How to use default browser integration

You do not need to make any chances to your web service for the default browser integration. Your service will appear as it does on the open web.

Make sure the entry point from the NHS App has a clear, accurate label so users know they are leaving the main app flow.
