---
layout: layouts/pattern.njk
title: Integrating services into the NHS App
description: Use this pattern to prepare your website-based service for integration into the NHS App. 
backlogID: 450
order: 5
tags:
  - page
---

## Before you integrate

The NHS App has over 60 integrated services. Each integrating service has to be carefully onboarded so the rest of the app keeps performing.

[Learn more about how to integrate with the NHS App](https://digital.nhs.uk/services/nhs-app/how-to-integrate-with-the-nhs-app)

## How integrations work in the NHS App

When a user goes from an NHS App screen into an integrated service, that service is loaded in a web view. A web view is a browser-like container, embedded within the header and footer of the app.

Using a web view allows users to move from the NHS App into a third-party or NHS service without:

- feeling like they are leaving the NHS App
- losing access to the app header and footer menus

In the past, some services were loaded in web brower overlays that came over the top of the NHS App screens, rather than in web views. This inconsistency, and websites not being adapted for how they showed in the NHS App, caused problems for users, including:

- journeys that changed integration pattern partway through, creating a jarring and confusing experience
- standard website navigation leading to circular journeys – for example, clicking "My account" in a service header could prompt users to go through the NHS login journey only to return to the NHS App
- misleading terminology – links labelled "NHS App" could take users to content about the app rather than back to it; links to "profile editor" could be misread as relating to the user's app profile rather than profiles within the external service
- a search bar that searched the external website rather than the NHS App, returning results that were confusing in an app context
- breadcrumbs that navigated up the website's own hierarchy rather than back to the user's previous page, trapping users within the service
- distracting header and footer links that could take users away from the task they came to the app to complete

For these reasons, intergrated services should be loaded as a web view when accessed from the NHS App, with certain adaptations in place.

## How to adapt your pages

When a user accesses your service through the NHS App, you must adapt your pages to work within the app context. There are 3 key adaptations.

### 1. Suppress the site header

Remove your full site header when your pages are viewed from within the NHS App. This means hiding:

- your service or organisation logo
- the account or profile button
- the search bar
- site navigation links

This prevents users from accidentally navigating away into unrelated parts of an external website, and avoids the circular journey problem caused by account links that re-trigger the NHS login flow.

Make sure removing the header does not affect the page title or the logical heading structure of your page. Screen reader users rely on page titles and headings to understand where they are. These must remain in place even when the visual header is hidden.

### 2. Simplify the site footer

Reduce the number of links shown in the footer to only those that are essential. The footer should contain:

- terms and conditions
- cookies policy
- accessibility statement

The footer should follow standard NHS design patterns in its visual appearance. Do not include promotional links, section navigation or other links that could take users out of their current journey.

### 3. Replace breadcrumbs with a Back link

Replace your site's standard breadcrumb navigation with a single Back link. The Back link should take users back one step in their browser history.

Breadcrumb navigation reflects your site's information architecture, which is not meaningful to a user who has arrived from the NHS App. A Back link respects where the user came from and gives them a reliable way to return to the previous page.

Do not use breadcrumbs on pages viewed within the NHS App.

The Back link must be keyboard accessible and placed consistently at the top of the page, before the main content. This helps keyboard-only users and screen reader users navigate reliably without needing to scan the whole page.

## How not to prepare your pages

Your integrated pages should not:

- include site header elements such as a service logo, search bar or account navigation
- use language or links that assume the user is on a website. For example, links labelled "NHS App" that lead to content about the app rather than back to it
- rely on a site search bar to help users find content – it searches your website, not the NHS App, which can be confusing for users

## Your accessibility responsibilities

As a public sector body, your service must meet the accessibility standards set out in the [Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/contents/made). This applies to all teams within NHS organisations building websites or mobile apps.

The NHS App has its own [accessibility statement](https://www.nhs.uk/nhs-app/about/privacy-legal-information/nhs-app-accessibility-statement/). This covers the NHS App itself but does not cover services that integrate with it. Each integrating service is responsible for its own accessibility compliance.

### Get an accessibility audit

You need an external accessibility audit to confirm your service meets WCAG 2.2 AA – the minimum standard required by law for public sector digital services. An audit helps you identify and fix barriers before your service goes live. NHS England normally uses [Dig Inclusion](https://diginclusion.com/) for audits.

### Publish an accessibility statement

You must publish an accessibility statement on your service. This helps users understand what to expect and how to get support if they encounter a barrier. Your statement must explain:

- how accessible your service is
- any known accessibility issues
- any parts of the service that are not accessible and why, including anything classed as a disproportionate burden (where the cost of fixing a barrier significantly outweighs the benefit)
- how users can report accessibility problems
- what to do if users need information in a different format
- your enforcement procedure

[Learn more about making your service accessible and publishing an accessibility statement](https://www.gov.uk/guidance/make-your-website-or-app-accessible-and-publish-an-accessibility-statement)

### Share your statement with us

Once your statement is published, send the link to the NHS App team. We will add it to the [NHS App accessibility statement](https://www.nhs.uk/nhs-app/about/privacy-legal-information/nhs-app-accessibility-statement/) when your service goes live as an integration. This makes it easier for users to find accessibility information about all the services available in the NHS App.
