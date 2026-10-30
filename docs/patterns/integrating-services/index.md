---
layout: layouts/docs.njk
title: Integrating services into the NHS App
description: The NHS App is made up of over 60 different services. We integrate services into the app in ways that make them feel like a coherent part of the app experience.
backlogID: 450
order: 2
tags:
  - structure
section: Web
subsection: Patterns
theme: Structure
themeOrder: 2
caption: Structure
---

This section covers the 3 integration types and the guidance you need to follow for each.

Before you start, read the [overview of integrating with the NHS App](/get-started/integrating-with-the-nhs-app/) to find out how integrations work and how to get onboarded.

## Integration types

| Integration type                                                                        | When to use                                                                                                        |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| [Default browser integration](/patterns/integrating-services/default-web-integrations/) | Unauthenticated, third-party information websites where you do not need to control the presentation or journey     |
| [Custom web view integration](/patterns/integrating-services/custom-web-integrations/)  | Website-based NHS App journeys, NHS website journeys, and authenticated third-party journeys                       |
| [API integration](/patterns/integrating-services/api-integrations/)                     | Services that can expose structured data via a compliant API, allowing the NHS App to display it in native screens |

Work with the NHS App team to confirm the right integration type for your service before you begin adapting your content or build.
