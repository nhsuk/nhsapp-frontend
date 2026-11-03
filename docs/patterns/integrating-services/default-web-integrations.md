---
layout: layouts/docs.njk
title: Default browser integration
description: This type of integration opens a service in the user's default browser. 
backlogID: 450
order: 1
childPage: true
section: Patterns
subsection: Patterns
theme: Structure
themeOrder: 2
navParent: /patterns/integrating-services/
sectionCaption: Integrating services into the NHS App
---

The default browser is normally Safari View (iOS) or Chrome Custom Tabs (Android). You do not need to adapt your web service to use this type of integration.

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

## How to use default browser integration

You do not need to make any changes to your web service for the default browser integration. Your service will appear as it does on the open web.

Make sure the entry point from the NHS App has a clear, accurate label so users know they are leaving the main app flow.

You can currently control whether this type of integration opens:

- in a web browser overlay that sits on top of the NHS App
- in an external browser that takes users outside of the app

You can find out more about how default web integrations will open in the future in our guidance on [helping users access web journeys in the native NHS App](/patterns/access-web-journeys).
