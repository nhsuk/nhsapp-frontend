---
layout: layouts/pattern.njk
title: There is a problem with the service
description: Tell users there is something wrong with an NHS App service. These are also known as 500 and internal server errors. 
backlogID: 262
---

{% example "problem-with-service/example.njk" %}

## When to use

Use these pages for any general, temporary service errors.

## How to use

These pages should have:

- ‘There is a problem with the service – service name – NHS App’ as the page title
- ‘There is a problem with the service’ as the H1
- ‘Try again later.’ as a normal paragraph, or more specific guidance if we have it
  information about what has happened to their answers if they are in the middle of a transaction
- a link to another service under the H2 ‘Other options’, if they can use it to do what they came to do
- guidance on how to [contact the NHS App team](/patterns/contact-nhs-app-team/), if it helps meet a user need

Have clear and concise content and do not use:

- a back button
- breadcrumbs
- jargon like 500 or bad request
- ‘We are experiencing technical difficulties’
- red text to warn people

## Research

Research has shown that users may:

- go straight to buttons and links without fully reading error pages
- not notice error codes
