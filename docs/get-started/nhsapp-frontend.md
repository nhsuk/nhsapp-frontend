---
layout: layouts/get-started.njk
title: NHS App frontend
tags:
  - production
---

This guide explains how to set up the [NHS App frontend](https://github.com/nhsuk/nhsapp-frontend) in production.

## Before you start

First you must have followed the [NHS design system production setup guide](https://service-manual.nhs.uk/design-system/production).

## Include the NHS App frontend in your project

To start using NHS App styles, components and patterns contained here, you’ll need to include NHS App frontend in your project.

### Install using npm

We recommend [installing NHS App frontend using npm](/get-started/installing-with-npm/). Using this option, you will be able to:

- selectively include the CSS for individual components
- build your own styles or components based on the palette or typography and spacing mixins
- customise the build (for example, overriding colours or enabling global styles)
- use the component Nunjucks templates
