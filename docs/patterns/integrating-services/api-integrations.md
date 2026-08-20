---
layout: layouts/pattern.njk
title: API integration
description: How to integrate a service with the NHS App by exposing data through an API, allowing the NHS App to present it within native screens
backlogID: 450
order: 3
childPage: true
tags:
  - integratingServices
---

An API-driven integration allows the NHS App to consume data or functionality from your service and present it directly within App-owned screens without loading an external web page.

This offers the most seamless experience for users. There is no web container, no site header to suppress, and no browser navigation to manage.

## When to use

Use API-driven integration when:

- your service can expose structured data via a standards-compliant API. For example, FHIR R4.
- the NHS App team has screens designed and built to consume and display that data
- you do not need to control the visual presentation or user journeys because these are handled by the NHS App
- your service's data can be combined with other services to better meet user needs

## When not to use

Do not use this integration type if:

- your service does not expose a compliant API. Instead, use a [custom web view integration](/patterns/integrating-services/custom-web-integrations/)
- the NHS App does not yet have screens for your data type. Work with the NHS App team to assess feasibility before starting

## How to structure an API integration

### 1. Expose data via a compliant API

Your service must expose data following NHS England standards. For most health data, this means using FHIR R4.

### 2. Complete the onboarding and assurance process

See [Integrating with the NHS App](/get-started/integrating-with-the-nhs-app/) for an overview of the onboarding process.

### 3. Meet security, authentication, and performance standards

Your API must meet the security and performance requirements set by NHS England. These are assessed during the onboarding and assurance process.

### 4. Agree a data sharing agreement

You must agree a data sharing agreement with NHS England before your integration can go live.

## How to use API integration

Your team is responsible for the accuracy and availability of the data your API provides. The NHS App team is responsible for how that data is presented in the pages designed and built in the NHS App.

Keep the NHS App team informed of planned changes to your API that could affect how data is displayed. Agree a process for communicating breaking changes in advance.

For full technical standards and onboarding requirements, see [how to integrate with the NHS App](https://digital.nhs.uk/services/nhs-app/how-to-integrate-with-the-nhs-app).
