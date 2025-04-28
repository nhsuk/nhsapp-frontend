---
layout: layouts/pattern.njk
title: Error pages
description: Use error pages to tell users there is a problem. Explain what has happened and what they can do next.
backlogID: 119
tags:
  - page
---

## When to use

Use error pages when:

- something has gone wrong
- users cannot continue to the next page

## When not to use

Do not use this pattern when:

- rather than creating a bespoke error page, you can adapt the GOV.UK patterns for [page not found](https://design-system.service.gov.uk/patterns/page-not-found-pages/), [service unavailable](https://design-system.service.gov.uk/patterns/service-unavailable-pages/) or [there is problem with the service](https://design-system.service.gov.uk/patterns/problem-with-the-service-pages/)
- a user makes a mistake completing a form – instead follow the NHS service manual guidance for [error messages](https://service-manual.nhs.uk/design-system/components/error-message) and [errors summaries](https://service-manual.nhs.uk/design-system/components/error-summary)

## How to use

The content for each type of error may vary depending on the circumstances.

These pages should:

- be clear and concise
- summarise the problem, or give an instruction, in the h1 heading
- explain anything we are doing to fix the problem
- let the user know if they need to do anything

These pages should not:

- blame the user
- include breadcrumbs
- display vague terms of jargon like "500", "504", "bad request" or "we are experiencing technical difficulties
- use red text to warn people
- use exclamation marks or informal language like "oops"

### Writing headings

Use the h1 heading to clearly explain the problem or a solution.

Some error headings work better as instructions and some work better as descriptions.

Make sure headings are grammatically correct, and not abbreviated versions of full sentences like "Cannot log in" or "Prescriptions not available". Shortened headings like these can be harder to read and understand.

#### Instructive headings

If there’s a direct action the user can take to resolve the problem, use the h1 to tell them this. Start the h1 with the verb that indicates the action they need to take. For example:

- "Update the NHS App"
- "Check you’re registered with a GP in England"

{% example "error-pages/no-appointments.njk" %}

#### Descriptive headings

For descriptive headings, starting the h1 with "we" can sometimes help to make clear that the problem lies with the NHS App, and not the user. For example:

- "We could not log you in"
- "We could not show your approved prescriptions"

{% example "error-pages/confirmed-prescriptions.njk" %}

### Using calls to action and links

The components we use for calls to action and links depend on the context.

Use:

- [primary buttons](/components/buttons/#primary-button) to give a main call to action that will directly solve the problem
- [secondary buttons](/components/buttons/#secondary-button) to give a more muted call to action – there is a chance it may help to solve the problem
- [secondary card links](/components/card-links/#secondary-card-links) under a h2 of "Other options in the NHS App" for links to services in the NHS App
- in-line links for pages that are external to the NHS App, such as NHS website pages

Avoid giving users too many different links to choose from as a next step. This increases cognitive load, and is problematic for users experiencing high levels of stress or anxiety.

### Helping users get care another way

If there is another way to use the service through an offline channel, always tell users how to do this.

Error pages will often need to signpost to services such as 111, if there’s a chance users may need more immediate medical help.

Talk to your service’s clinical lead for advice on this.

{% example "error-pages/medical-signposting.njk" %}

### Error codes

Some common issues with the NHS App are tracked by the service management team. Each of these issues has an associated error code.

When you need to include an error code, use the h2 "If the problem continues" and link to the NHS App contact form.

Speak to the service management team about whether you need to include an error code.

{% example "error-pages/could-not-log-in.njk" %}

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

- "try again" buttons on errors, and how we can best help users when they fail to solve the problem
- how we can avoid users needing to manually input error codes, for example by pre-populating these codes on our contact form
- how this guidance could evolve into separate pages covering specific errors, when we have enough evidence to do this
