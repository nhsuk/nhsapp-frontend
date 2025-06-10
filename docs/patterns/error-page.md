---
layout: layouts/pattern.njk
title: Error pages
description: Use error pages to tell users there is a problem. Explain what has happened and what they can do next.
backlogID: 119
tags:
  - page
---

{% example "error-pages/show-gp-appointments.njk" %}

## When to use

Use an error page when:

- something has gone wrong
- users cannot continue to the next page

## When not to use

Do not use this type of error page if:

- you can adapt GOV.UK patterns for [page not found](https://design-system.service.gov.uk/patterns/page-not-found-pages/), [service unavailable](https://design-system.service.gov.uk/patterns/service-unavailable-pages/) or [there is a problem with the service](https://design-system.service.gov.uk/patterns/problem-with-the-service-pages/)
- a user makes a mistake completing a form – instead follow the NHS service manual guidance for [error messages](https://service-manual.nhs.uk/design-system/components/error-message) and [errors summaries](https://service-manual.nhs.uk/design-system/components/error-summary)

## How to use

The content for each type of error will vary depending on the circumstances.

The page should:

- be clear and concise
- summarise the problem, or give an instruction, in the main heading (h1)
- tell the user how to access the service another way, or use an alternative
- tell the user if there's something they can do to fix the problem

This page should not:

- blame the user
- include breadcrumbs
- display vague terms or jargon like "500", "504", "bad request" or "we are experiencing technical difficulties"
- use red text to warn people
- use exclamation marks or informal language like "oops"

### Writing headings

Use the main heading to clearly explain the problem or a solution.

Some error headings work better as instructions and some work better as descriptions.

Headings should be grammatically correct. Avoid abbreviated headings like "Prescriptions not available" as they can make it harder for users to understand what's caused the problem.

#### Instructive headings

If there’s a direct action the user can take to fix the problem, use the main heading to tell them this. Start the main heading with the verb that indicates the action they need to take. For example:

- "Update the NHS App to continue"
- "Check you’re registered with a GP in England"

{% example "error-pages/update-app.njk" %}

#### Descriptive headings

Descriptive headings often work better for a problem that lies with the NHS App. Starting the main heading with "we" can help make this clear. For example:

- "We could not log you in"
- "We could not show your confirmed prescriptions"

{% example "error-pages/confirmed-prescriptions.njk" %}

### Using calls to action and links

The components we use for calls to action and links depend on the context.

Use a:

- [secondary button](/components/buttons/#secondary-button) to give a call to action that may help fix the problem
- [secondary card link](/components/card-links/#secondary-card-links) under a h2 of "Other options in the NHS App" for links to services in the NHS App

Avoid giving users too many different links to choose from as a next step. This increases cognitive load, and is problematic for users experiencing high levels of stress or anxiety.

### Helping users get care another way

Always tell users how they can complete their task through a different channel.

Remember that the NHS App is a healthcare service. Errors can delay access to clinical care, and users may be experiencing urgent health needs. 

Talk to your service’s clinical lead for advice when you create or update an error page.

### Letting users report a technical problem

Signpost users to contact the NHS App team if:

- the error is being tracked by the service management team
- it's a technical problem

Use the h2 "If the problem continues" and include an error code.

Speak to the service management team for advice when you create or update an error page.

{% example "error-pages/manage-services.njk" %}

### When a user is not logged in

The top and bottom navigation are not visible because the user is not logged in.

{% example "error-pages/check-internet-connection.njk" %}

## Research

Research has shown that users may:

- go straight to buttons and links without fully reading error pages
- not notice error codes
- be unsure about whether the problem was their fault or not

We should account for these challenges in our designs and continue to research and iterate the pattern.

### Next steps

We want to learn more about:

- "try again" buttons on errors, and how we can best help users when these fail to solve the problem
- how we can avoid users needing to manually input error codes, for example by pre-populating these codes on our contact form
- how this guidance could evolve into separate pages covering specific errors
- allowing users to give feedback when they reach an error page
