---
layout: layouts/component.njk
title: Panel
description: The panel component is a visible container used on confirmation or results pages to highlight important content.
backlogID: 210
tags:
  - component
---

{% example "panel/panel-with-ref.njk" %}

## When to use

Use the panel component to display important information when a transaction has been completed.

In most cases, the panel component is used on confirmation pages, to tell the user they have successfully completed the transaction.

## When not to use

Never use the panel component to highlight important information within body content.

## How to use

{% example "panel/panel-heading-only.njk" %}

### How to write panel text

Keep your panel text brief, as it's only meant for a high-level explanation of what has happened. For example, 'Application complete'.

Aim to use short words and phrases to make sure highlighted information is easy to read at different screen sizes. For example, shorter amounts of information is less likely to wrap around the panel, which can happen when using the zoom function on mobiles.

If you need to give detailed information, or more context, use the description text under the heading text.
