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
- display vague terms or jargon like “500”, “404”, “bad request” or “we are experiencing technical difficulties”
- use red text to warn people
- use exclamation marks or informal language like “oops”
- blame the user

### Medical signposting

{% example "error-pages/medical-signposting.njk" %}

It is not always necessary to include this text. We particularly want to avoid giving the impression that 111 can help with technical problems. You might leave out this text on some error and status page, for exampe, if the error is about not being able to download a file.

You should:

- think about whether or not the user is being blocked from accessing particular medical help
- speak to the clinical team for advice if you are unsure

### Error codes

There are some scenarios where we encourage users to contact the NHS App team, to report a problem using our online form. It can help them to reach a resolution more quickly if they copy or note down an error code, then input that code when completing the form.

{% example "error-pages/contact-nhsapp.njk" %}

## Examples

### With medical signposting

In this scenario, a user is stopped from accessing particular medical help, so [medical signposting](#medical-signposting) to 111 has been added.

{% example "error-pages/no-appointments.njk" %}

### With alternative actions

In this scenario, there are alternative actions that the user could take.

Use the sub-heading "other things you can do" to give alternative actions.

Use the sub-heading "Find out more" to include suplementary information pages users might find helpful to read.

{% example "error-pages/confirmed-prescriptions.njk" %}

### With unknown errors

In this scenario, the exact problem may be unknown or lengthy to explain. We have used a simple “There is a problem with the service” explanation, similar to the [GOV.UK Design System error page for 500 errors](https://design-system.service.gov.uk/patterns/problem-with-the-service-pages/).

{% example "error-pages/problem-with-service.njk" %}

### When a user is not logged in

In this scenario, the [top navigation](/components/top-navigation) is not visible because the user is not logged in.

{% example "error-pages/update-app.njk" %}

## Research

Research has shown that users may:

- go straight to buttons and links without fully reading error pages
- not notice error codes
- be unsure about whether the problem was their fault or not

We should account for these challenges in our designs and continue to research and iterate the pattern.
