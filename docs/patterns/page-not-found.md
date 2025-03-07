---
layout: layouts/pattern.njk
title: Page not found
description: A page not found tells someone we cannot find the page they were trying to view. They are also known as 404 pages.
backlogID: 260
tags:
  - page
---

## When to use

Use a page not found if someone is trying to view a page that does not exist.

In the native NHS App, this error only happens if someone selects a button or link leading to a page that does not exist. It means we need to fix the link.

{% example "page-not-found/native.njk" %}

If someone is accessing NHS App services in a web browser, this error can also happen if they:

- type or copy a web address for a page that does not exist
- type or copy a web address incorrectly

{% example "page-not-found/web.njk" %}

## How to use

The page should have:

- ‘Page not found – service name – NHS App’ as the page title
- ‘Page not found’ as the H1
- details of how to [get urgent medical advice](/patterns/get-urget-medical-advice/), if a broken link could be preventing users from using a service to get urgent medical help
