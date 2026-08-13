---
layout: layouts/pattern.njk
title: Integrating services into the NHS App
description: This guidance is for teams preparing a service for integration into the NHS App.
backlogID: 450
order: 5
tags:
  - page
---

The NHS App is made up of over 60 services working together to provide a coherent experience for users. When a user navigates to an integrated service in the NHS App, they stay inside the app experience. This connection that allows a service to exist inside the NHS App is called an integration.

This section covers the 3 integration types and the guidance you need to follow for each.

Before you start, read [Integrating with the NHS App](/get-started/integrating-with-the-nhs-app/) in the Get started section for an overview of how integrations work and how to get onboarded.

## Integration types

| Integration type                                                                        | When to use                                                                                                         |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [Default browser integration](/patterns/integrating-services/default-web-integrations/) | Unauthenticated, third-party information websites where you do not need to control the presentation or journey.     |
| [Custom web view integration](/patterns/integrating-services/custom-web-integrations/)  | Website-based NHS App journeys, NHS website journeys, and authenticated third-party journeys.                       |
| [API integration](/patterns/integrating-services/api-integrations/)                     | Services that can expose structured data via a compliant API, allowing the NHS App to display it in native screens. |

Work with the NHS App team to confirm the right integration type for your service before you begin adapting your content or build.
