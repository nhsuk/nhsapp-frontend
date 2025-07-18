---
layout: layouts/pattern.njk
title: Page not found pages
description: Tell users we cannot find the page they were trying to view. They are also known as 404 pages.
backlogID: 260
---

## When to use

Use a page not found page if someone is trying to view a page that does not exist.

## How to use

In the native NHS App, this error only happens if someone selects a button or link leading to a page that does not exist. It means we need to fix the link.

{% example "page-not-found/native.njk" %}

If someone is accessing NHS App services in a web browser, this error can also happen if they:

- type or copy a web address for a page that does not exist
- type or copy a web address incorrectly

{% example "page-not-found/web.njk" %}

The page should have:

- ‘Page not found – NHS App’ as the page title
- ‘Page not found’ as the H1
- details of how to get urgent medical advice
