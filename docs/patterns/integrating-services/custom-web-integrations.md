---
layout: layouts/docs.njk
title: Custom web view integration
description: A custom web view is a browser-like container. Your team controls and adapts it to fit the NHS App context. This is the most common integration type in the NHS App.
backlogID: 450
order: 2
childPage: true
section: Patterns
subsection: Patterns
theme: Structure
themeOrder: 2
navParent: /patterns/integrating-services/
sectionCaption: Integrating services into the NHS App
---

Users are not always aware that these services are separate from the NHS App. That means it's important to consider their end-to-end experiences, what help content they might need, and what support tickets they might raise.

**In the current (web-based) NHS App**, the web view is embedded within the app's own header and footer. The NHS App navigation menus remain visible throughout.

**In the future native NHS App**, the web view will open as a full-screen overlay on top of native screens. Users will start their journeys from native menu screens and enter the web view when they select a website-hosted service. This approach tested well in user research, helping users understand where they were.

## When to use

Use the custom web view for:

- **Website-based app journeys** such as viewing hospital appointment information, or vaccination records
- **All NHS website journeys** whether authenticated (such as 111 online) or unauthenticated (such as Health A to Z and App help)
- **Authenticated third-party journeys** such as online consultations and Be Part of Research registration
- **The "Give feedback on the NHS App" survey** which contains NHS website links that need to be controlled

## When not to use

Do not use this integration type if:

- your service is an unauthenticated, third-party information website where no customisation is needed. Instead, use [default browser integration](/patterns/integrating-services/default-web-integrations/)
- your service exposes structured health data via a compliant API, especially if it can be aggregated with data from another service to better meet users' needs. Instead, consider an [API integration](/patterns/integrating-services/api-integrations/)

## How to adapt your web service to be shown in in the NHS App

### 1. Hide navigation elements

Remove or hide website navigation elements that could confuse users or lead them away from their current task:

- your service or organisation logo
- the account or profile button
- the search bar
- site navigation links
- breadcrumb links

On NHS website pages, also hide the NHS website header, including the search bar, and all breadcrumb links at the top of the page.

Make sure hiding these elements does not affect the page title or the logical heading structure. Screen reader users rely on page titles and headings to understand where they are. These must remain in place even when the visual header is hidden.

![Two screens showing the NHS website in a web view within the NHS App. The first shows the NHS website header visible in the web view: it has a red cross against it. The second shows the header suppressed: it has a green tick against it.](/assets/images/integration-pattern/suppress-header.png)

Work with NHS App interaction designers to identify other elements that should be removed. For example, contextual navigation links that could lead users deeper into your service without a clear way back.

You can do this by attending the weekly NHS App Interaction Design Huddles, or by using the [NHS App Interaction Design slack channel](https://nhsdigitalcorporate.enterprise.slack.com/archives/C04GHLAPMPV) to ask for support.

### 2. Manage back navigation

Users need a clear and reliable way to go back one step. This custom web integration ensures that users feel like they are still in the NHS App, so it's important we do not confuse them by providing "Back" actions that take them to places they do not expect.

If you need to to allow users to move around in your service, it may be more appropriate to use a [default browser integration](/patterns/integrating-services/default-web-integrations) where it is clearer to users that they are not within the NHS App.

Do not use breadcrumb navigation on any pages viewed within the NHS App. Breadcrumbs reflect your own site's information architecture, which is not meaningful to users arriving from the NHS App.

**In the current web-based NHS App:** Replace your site's breadcrumb navigation with a single back link. The back link should take users back one step in their browser history. It must be keyboard accessible and placed consistently at the top of the page, before the main content.

**In the future native custom web view:** Hide the back button on the first page of the journey. Include the back button on every other page. This helps users understand they are at the start of a new journey, while still giving them a way to navigate back once they have moved forward.

![Two screens showing the NHS website opening in a web view within the NHS App. The first shows the breadcrumb link 'Home' at the top: it has a red cross against it. The second shows a 'Back' button used instead: it has a green tick against it.](/assets/images/integration-pattern/include-back-button.png)

### 3. Simplify the site footer

Reduce the number of links in the footer to only those that are essential:

- terms and conditions
- cookies policy
- accessibility statement

The footer should follow standard NHS design patterns in its visual appearance. Do not include promotional links, section navigation, or other links that could take users out of their current journey.

![Two screens showing the NHS website opening in a web view within the NHS App. The first shows the full NHS website footer visible in the web view: it has a red cross against it. The second shows a simplified version of the footer: it has a green tick against it.](/assets/images/integration-pattern/simplify-footer.png)

### Other steps for the future native NHS App

If you're preparing a custom web integration for the future native NHS App, there are some other steps you'll need to take. Read our guidance on [helping users access a web journey in the native NHS App](/patterns/access-web-journeys).

## How not to use custom web view integration

Integrated pages should not:

- include site header elements such as a service logo, search bar, or account navigation. These cause circular journeys and confuse users about where they are
- use language or links that assume the user is on a website. For example, links labelled "NHS App" that lead to content about the app rather than back into it
- rely on a site search bar to help users find content because it searches your website, not the NHS App, which returns irrelevant results in an app context
- include breadcrumb navigation because breadcrumbs reflect a site's own hierarchy and are not meaningful to users who arrived from the NHS App

Do not assume that hiding navigation elements once is sufficient. Changes to your service may reintroduce them over time. Build checks into your release process to catch these regressions before they reach users.
