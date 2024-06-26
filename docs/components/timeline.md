---
layout: layouts/component.njk
title: Timeline
description: Use timelines to help people understand a process and what will happen next.
tags:
  - component
---

## When to use

Use timelines to show users:

- what has happened so far
- the point they are currently at
- what will be coming next

Timelines can work well on:

- confirmation pages that come after a user has taken an action or submitted a request
- pages that users visit to check on progress

## When not to use

Do not use timelines to give lots of detailed information about every stage of a process. Instead, think about how you can give this information to users in context, at the relevant points in their journey. Timelines are meant to help users understand the broad steps of a process, rather than the finer details.

## How to use

In a timeline you can use nodes (dots), lines and text to explain processes and timings.

### Nodes

Nodes can be:

- white with a grey outline (a smaller dot)
- blue (a larger dot)

Use blue nodes to show that a step is already completed.

If you’re using a timeline as a progress indicator, to show users the current status and what is coming next, use blue nodes to do this. But if your timeline is a static list outlining the points in a process in general, every node can be left white.

{% example "timeline/timeline-active.njk" %}

### Lines

Lines between two blue nodes are coloured blue. Otherwise, lines are left grey.

We would like to better understand whether users associate the length of a line between two nodes with the amount of time that stage will take. You may want to standardise the length of lines between nodes, or test what users understand about timings if you do include differing lengths.

{% example "timeline/timeline-inactive.njk" %}

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
