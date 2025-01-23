---
layout: layouts/component.njk
title: Tag
description: Use tags to show the status of a task or a process. 
backlogID: 11
tags:
  - component
---

{% example "tags/tag.njk" %}

## When to use

Use tags to help users:

- keep track of progress
- understand when they need to take an action

## How to use

You can place tags inside or outside a card. 

### Choosing colours

You should use colours that fit with the mental models of your users. Try to find this out through user research. You might find it works to use:

- green to signify confirmation or a positive status  
- red for a status that needs to stand out or be actioned
- grey for a status that doesn't need to stand out

Within the same NHS App service, you should always be consistent and match the same colour with the same tag text. 

You should also try to align the colours and text with other areas of the NHS App. There may be some variation between services because they need different statuses to fit with their contexts. For example, a red status tag might be labelled "Cancelled" in one service but "Action needed" in another. We want to do more research into how users percieve these variations.

### Writing tag text

Tag text should:

- be in sentence case
- describe the status in as few words as possible

For example:

- Requested
- In progress
- Ready for delivery
- Done
- Cancelled

## How not to use

Do not:

- use lots of tags or lots of colour variation – it can clutter pages and overwhelm users
- use tags as a header or grouping-class for elements or information
- use tags as a selectable element

Tag text should not:

- be in bold
- start with a verb – users may think they can select the tag

## Accessibility

Tag colours meet [WCAG 2.2 Success Criterion 1.4.3 Contrast (Minimum)](https://www.w3.org/TR/WCAG22/#contrast-minimum) AAA.

## Research

In our research, we found that red tags were associated with something having gone wrong.

We want to do more research to understand how variations in tag colours and text across different NHS App services might affect users.
