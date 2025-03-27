---
layout: layouts/get-started.njk
title: NHS App frontend
tags:
  - production
---

The [NHS App frontend](https://github.com/nhsuk/nhsapp-frontend) is a CSS library built on top of the [NHS.UK frontend](https://github.com/nhsuk/nhsuk-frontend). It provides NHS App-specific styles and [components](/components).

This guide explains how to set up the NHS App frontend in production.

## Before you start

Before you begin, make sure you have followed the [NHS design system production setup guide](https://service-manual.nhs.uk/design-system/production).

## Include the NHS App frontend in your project

To start using NHS App styles, components, and patterns, you need to add the NHS App frontend to your project.

### Install using npm

We recommend [installing the NHS App frontend using npm](/get-started/installing-with-npm/). This option lets you:

- select which component CSS to include
- build your own styles or components using the palette, typography, and spacing mixins
- customise the build, such as overriding colours or enabling global styles
- use the component Nunjucks templates
