---
layout: layouts/component.njk
title: Timeline
description: Use timelines to help people understand a process and what will happen next.
tags:
  - component
---

{% example "timeline/timeline-inactive.njk" %}

## When to use

Use timelines to show users:

- what has happened so far
- the point they are currently at
- what will be coming next

## When not to use

Do not use timelines to give lots of detailed information about every stage of a process. Instead, think about how you can give this information to users in context, at the relevant points in their journey. Timelines are meant to help users understand the broad steps of a process, rather than the finer details.

## How to use

In a timeline you can use nodes (dots), lines and text to explain processes and timings.

{% example "timeline/timeline-active.njk" %}

### Nodes

Nodes can be:

- white with a grey outline (a smaller dot)
- blue (a larger dot)

Use blue nodes to show that a step is already completed.

### Text

Each node should have an accompanying heading that describes which step the process it represents.

Below each heading, use body text to give further details about that step. This could include a date or a short description.

## Accessibility

We want to do further research to understand how screen reader users find timelines, and how much timelines help them to get their bearings.

## Research

Our user research has found that in general, users:

- find timelines helpful for getting their bearings during a process
- are familiar with timelines from other apps and websites they use
- find it helpful that timelines give a visual representation of the process

Some research suggests that users expect timelines to be dynamic, updating as they make progress. Bear in mind that static timelines may not always meet user expectations.

We would like to better understand whether users associate the length of a line between two nodes with the amount of time that stage will take. You may want to standardise the length of lines between nodes, or test what users understand about timings if you do include differing lengths.
