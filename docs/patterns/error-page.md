---
layout: layouts/pattern.njk
title: Error page
description: Use an error page to tell users there was a problem. Explain what has happened and what they can do next.
backlogID: 119
tags:
  - page
---

{% example "error-pages/touch-id.njk" %}

## When to use

Use an error page when:

- something has gone wrong
- users cannot continue to the next page

## When not to use

Do not use an error page when a user makes a mistake while completing a form. Instead, follow the NHS service manual guidance for [error messages](https://service-manual.nhs.uk/design-system/components/error-message) and [errors summaries](https://service-manual.nhs.uk/design-system/components/error-summary), to help users understand what to do in context.

## How to use

Error pages should:

- have a main heading that tells users what has gone wrong
- have body content that tells users what to do next
- be short, with simple, uncluttered design

You may also need to include signposting to medical help and an error code.

### Main heading

Use the main heading to describe the problem. For example:

- “Face ID did not work”
- “No internet connection”
- “Not enough storage space”

It can sometimes be helpful to start with “We” or “You” to show where the problem lies:

- “We could not log you in”
- “You need to update the NHS App”

In our research, participants were less concerned with what had gone wrong, and more concerned about finding out how to fix the problem. Try to sum up the problem in the heading, then move on to a solution or next steps in the body text.

### Body content

Users are likely to scan the page very quickly. You might need to:

- give an action
- suggest alternative options

Our research suggests users rarely read content when it is placed beneath a button.

### Medical signposting

You can use inset text to mention NHS 111 at the end of an error page.

{% example "error-pages/medical-signposting.njk" %}

It is not always necessary to include this text. We particularly want to avoid giving the impression that 111 can help with technical problems. You might leave out this text on an error page about not being able to download a file, for example.

If the error page already suggests contacting a GP surgery, you do not need to also mention 111.

You should:

- think about whether or not the user is being blocked from accessing particular medical help
- speak to the clinical team for advice if you are unsure

### Error codes

There are some scenarios where we encourage users to contact the NHS App team, to report a problem using our online form. It can help them to reach a resolution more quickly if they copy or note down an error code, then input that code when completing the form. See the 500 error example below.

## Examples

### 404 error (page not found) - App version

{% example "error-pages/page-not-found.njk" %}

If a 404 error occurs in the native app, it means there is a broken link that the NHS App team need to fix. We have included medical signposting because it’s possible that the broken link could lead a medical service.

### 404 error (page not found) - Browser version

{% example "error-pages/page-not-found-web.njk" %}

In the browser version, the user is more likely to inputted the wrong web address, so the focus is on helping users to correct that problem.

### 500 error (internal server error)

{% example "error-pages/problem-with-service.njk" %}

In the above example, the exact problem may be unknown or lengthy to explain. We have used a simple “There is a problem with the service” explanation, similar to the GOV.UK Design System error page for 500 errors.

## Research

Research has shown that users may:

- go straight to buttons and links without fully reading error pages
- not notice error codes
- be unsure about whether the problem was their fault or not

We should account for these challenges in our designs and continue to research and iterate the pattern.
