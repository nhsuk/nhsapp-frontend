---
layout: layouts/pattern.njk
title: Contact the NHS App team
description: Tell users how to contact the NHS App team for technical support.
backlogID: 258
tags:
  - helpUsers
---

{% example "contact-nhs-app-team/example.njk" %}

## When to use

Use this pattern at the end of error pages, if contacting the NHS App team may help to resolve a technical problem.

## When not to use

Do not use this pattern if:

- the NHS App team cannot help
- we can tell the users how to resolve the problem themselves

## How to use

The text should:

- have a h2 of ‘If the problem continues’ – you might adapt this depending on the other content on the page, for example to ‘If your GP surgery cannot help’
- make clear that users should only contact the NHS App team if the problem keeps happening, and if other solutions haven’t worked
- include the relevant error code before the link to the [NHS App contact form](https://www.nhs.uk/contact-us/nhs-app-contact-us/), to encourage users to note it down – it needs to be manually entered into the form

If the user enters the error code on the form that follows, it can help the NHS App service management team to provide them with more direct support. We do not currently have the ability to auto-populate the code into the contact form.

## Research

Research has shown that users may:

- go straight to buttons and links without fully reading error pages
- not notice error codes
