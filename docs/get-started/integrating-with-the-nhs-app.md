---
layout: layouts/get-started.njk
title: Integrating with the NHS App
order: 3
tags:
  - integration
---

The NHS App has over 60 integrated services. This guidance is for teams who want to integrate a service with the NHS App, or who are preparing an existing integration for the NHS App.

Explore the full guidance about [how to integrate with the NHS App](https://digital.nhs.uk/services/nhs-app/how-to-integrate-with-the-nhs-app).

## How NHS App integrations work

When a user navigates to an integrated service within the NHS App, users stay inside the app experience. This connection that allows a service to exist inside the NHS App is called an integration. 

There are 3 different ways to integrate services into the NHS App:

| Integration type | How it works |
|---|---|
| Default browser | Opens in Safari View (iOS) or Chrome Custom Tabs (Android). You do not need to change your web service to use this integration. |
| Custom web view | Opens your web service making it feel like part of the NHS App. You will need to change how your web service behaves when it is viewed through the NHS. This integration type is used for most services that are in Public Beta or Live. |
| API-driven | Your service exposes data via an API, and the screens are designed, built and maintained by the NHS App team. This integration type is used for high traffic services such as prescription ordering or viewing appointments. |

Learn more about the ways to [integrate services into the NHS App](/patterns/integrating-services/) for detailed guidance on each type.

## Why consistent integrations matter

In the past, services were sometimes loaded in browser overlays rather than web views, and website navigation elements were not adapted for the app context. This caused problems for users, including:

- journeys that changed integration method partway through, creating a jarring and confusing experience
- standard website navigation leading to circular journeys. For example, selecting "My account" in a service header could prompt users to go through the NHS Login journey only to return to the NHS App
- misleading link labels. Links labelled "NHS App" could take users to content about the NHS App rather than back to it
- a search bar that searched the external website rather than the NHS App, returning irrelevant results
- breadcrumb navigation that moved users up the website's own hierarchy rather than back to their previous page

For these reasons, all integrations must follow the guidance in this design system.

## Getting onboarded

Each integrating service has to be carefully onboarded so the rest of the NHS App keeps performing. The onboarding process includes:

- reviewing your service blueprint to understand how your service will interact with the NHS App and other integrated services
- sharing your roll-out plans so the NHS App team understands expected transaction volumes and timelines and can plan to support them
- agreeing what you want to track through analytics in the app
- trialling your integration in the sandbox environment to confirm it works as expected
- completing final approvals

[Learn more about how to integrate with the NHS App](https://digital.nhs.uk/services/nhs-app/how-to-integrate-with-the-nhs-app)
