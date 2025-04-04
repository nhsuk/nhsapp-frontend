---
layout: layouts/pattern.njk
title: Error and status pages
description: Use error and status pages to tell users there is a problem. Explain what has happened and what they can do next.
backlogID: 119
tags:
  - page
---

## When to use

Use error and status pages when:

- something has gone wrong
- users cannot continue to the next page

## When not to use

Do not use error and status pages when a user makes a mistake while completing a form. Instead, follow the NHS service manual guidance for [error messages](https://service-manual.nhs.uk/design-system/components/error-message) and [errors summaries](https://service-manual.nhs.uk/design-system/components/error-summary), to help users understand what to do in context.

To tell someone we cannot find the page they were trying to view, use a [page not found](/patterns/page-not-found) page.

## How to use

The content for each type of error may vary depending on the circumstances.

To ensure that the content is clear and helpful for the user, ask a Content Designer to help you write it.

These pages should:

- be clear and concise
- summarise the problem in the <code>h1</code> heading
- explain anything we are doing to fix the problem
- let the user know if they need to do anything with a call to action if needed

These pages should not:

- have breadcrumbs
- display vague terms or jargon like "500", "404", "bad request" or "we are experiencing technical difficulties"
- use red text to warn people
- use exclamation marks or informal language like "oops"
- blame the user

### Writing headings

You can use the main heading to explain the problem in a neutral way. For example:

- "No appointments available to book at this time"
- "There is a problem with the service"

Only include "you" in headings when you're telling the user to take a direct action. For example:

- "You need to update the NHS App"
- "Check you're registered with a GP in England"

If the NHS App cannot show something for a technical reason, you can start the heading with "we" to make clear that it's not the user's fault. For example:

- "We could not show your approved prescriptions"
- "We could not log you in"

### Medical signposting

{% example "error-pages/medical-signposting.njk" %}

You may need to include medical signposting if users are being blocked from accessing medical help.

Speak to the clinical team for advice about whether this is needed.

### Error codes

Tell users how to contact the NHS App team for technical support, if doing this may help resolve the problem.

{% example "error-pages/contact-nhsapp.njk" %}

Include the heading "If the problem continues". You might need to adapt this depending on the other content on the page, for example to "If your GP surgery cannot help".

The service management team will need you to include an error code. Users can enter this code on the [NHS App contact form](https://www.nhs.uk/contact-us/nhs-app-contact-us/) to get more direct support from the team.

We have [research findings](#research) and [next steps](#next-steps) about error codes.

## Examples

### With medical signposting

In this scenario, a user is stopped from accessing particular medical help, so [medical signposting](#medical-signposting) to 111 has been added.

{% example "error-pages/no-appointments.njk" %}

### With alternative actions

In this scenario, there are alternative actions that the user could take.

Use the sub-heading "Other things you can do" to give alternative actions.

Use the sub-heading "Find out more" to include suplementary information pages users might find helpful to read.

{% example "error-pages/confirmed-prescriptions.njk" %}

### With unknown errors

In this scenario, the exact problem may be unknown or lengthy to explain. We have used a simple "There is a problem with the service" explanation, similar to the [GOV.UK Design System error page for 500 errors](https://design-system.service.gov.uk/patterns/problem-with-the-service-pages/).

We've used a [secondary button](/components/buttons#secondary-button) because this might solve the problem.

{% example "error-pages/problem-with-service.njk" %}

### When a user is not logged in

In this scenario, the [top navigation](/components/top-navigation) is not visible because the user is not logged in.

We've used a [primary button](/components/buttons#primary-button) because this should directy solve the problem.

{% example "error-pages/update-app.njk" %}

## Research

Research has shown that users may:

- go straight to buttons and links without fully reading error pages
- not notice error codes
- be unsure about whether the problem was their fault or not

We should account for these challenges in our designs and continue to research and iterate the pattern.

## Next steps

We want to learn more about:

- "try again" buttons on errors, and how we can best help users when they fail to solve the problem
- how we can avoid users needing to manually input error codes, for example by pre-populating these codes on our contact form
- how this guidance could evolve into separate pages covering specific errors, when we have enough evidence to do this
