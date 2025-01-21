---
layout: layouts/pattern.njk
title: Confirmation page
description: Use a confirmation page to show users they have completed a task. 
backlogID: 32
tags:
  - pattern
---

{% example "confirmation-pages/confirmation-page.njk" %}

## When to use

You should use a confirmation page at the end of a transactional journey.

## How to use

Confirmation pages must include:

- a [panel](/components/panel) with a heading that confirms what the user has done
- an application or reference number, if there is one
- details about what will happen next and when

You may also find a need to include:

- instructions about other steps the user needs to take
- a summary of the details they have submitted
- a way to give feedback about the service
- links to more information or related services that may be helpful

## How not to use

Avoid including too many different components on a confirmation page. Research suggests it can overwhelm people.

## Accessibility

If you add any interactive elements, make sure the panel or focus state are still accessible.

## Research

In our research, people found the green panel at the top of the confirmation page reassuring. They quickly understood the key message. The left-aligned heading text tested well with people who had visual impairments and used screen readers.

We also tested the green panel with participants who had colour blindness. They were able to read the text clearly. They were also able to recognise the shade of green used and understood that this was a confirmation page.

Some people became confused about the next step when presented with several different components on a confirmation page. This was especially the case for people who used screen readers.

### Known gaps

We need more evidence to understand whether people:

- find it helpful to save the information on confirmation pages
- try to return to confirmation pages after completing their transaction.

In testing, we used a confirmation page at the end of a GP appointment booking journey. Some participants said they would take a screenshot of the confirmation page on their phone. [GOV.UK have found that some users bookmark and return to confirmation pages](https://designnotes.blog.gov.uk/2015/12/10/do-users-return-to-your-service-after-finishing/).

Some participants expected to receive further confirmation after this page, such as a text message or email. Some also wanted more reassurance that there was nothing further for them to do before their appointment. It may be helpful to state this in the content, when relevant. Further research on these areas would be helpful.
