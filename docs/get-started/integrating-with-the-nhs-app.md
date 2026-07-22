---
layout: layouts/get-started.njk
title: Integrating with the NHS App
order: 3
tags:
  - integration
---

The NHS App has over 60 integrated services. This guidance is for teams who want to integrate a service with the NHS App, or who are preparing an existing integration for the native NHS App.

For full onboarding requirements, see [how to integrate with the NHS App](https://digital.nhs.uk/services/nhs-app/how-to-integrate-with-the-nhs-app).

## How integrations work

When a user navigates from an NHS App screen into an integrated service, that service is loaded in a way that keeps them inside the app experience. There are 3 integration types:

| Integration type | How it works |
|---|---|
| Default browser | Opens in Safari View (iOS) or Chrome Custom Tabs (Android). No adaptation required. |
| Custom web view | Opens in a controlled browser container your team adapts. Used for most NHS App journeys. |
| API-driven | Your service exposes data via an API. The NHS App presents that data in native screens. |

See [Integrating services into the NHS App](/patterns/integrating-services/) for detailed guidance on each type.

## Why consistent integrations matter

In the past, services were sometimes loaded in browser overlays rather than web views, and website navigation elements were not adapted for the app context. This caused problems for users, including:

- journeys that changed integration method partway through, creating a jarring and confusing experience
- standard website navigation leading to circular journeys — for example, selecting "My account" in a service header could prompt users to go through the NHS login journey only to return to the NHS App
- misleading link labels — links labelled "NHS App" could take users to content about the app rather than back to it
- a search bar that searched the external website rather than the NHS App, returning irrelevant results
- breadcrumb navigation that moved users up the website's own hierarchy rather than back to their previous page

For these reasons, all integrations must follow the guidance in this design system.

## Getting onboarded

Each integrating service has to be carefully onboarded so the rest of the app keeps performing. The onboarding process includes:

- reviewing your service blueprint to understand how your service will interact with the NHS App and other integrated services
- sharing your roll-out plans so the NHS App team understands expected transaction volumes and timelines
- agreeing what you want to track through analytics in the app
- trialling your integration in the sandbox environment to confirm it works as expected
- completing final approvals

[Learn more about how to integrate with the NHS App](https://digital.nhs.uk/services/nhs-app/how-to-integrate-with-the-nhs-app)
