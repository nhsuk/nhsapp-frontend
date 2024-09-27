---
layout: layouts/get-started.njk
title: Production
tags:
  - getStarted
---

This guide explains how to set up your project so you can start using the styles and coded examples in the NHS App design system in production.

## Before you start

First you must have followed the [NHS design system production setup guide](https://service-manual.nhs.uk/design-system/production).

## Include the NHS App frontend in your project

To start using NHS App styles, components and patterns contained here, you’ll need to include NHS App frontend in your project.

### Option 1: install using npm

We recommend installing NHS App frontend using npm. Using this option, you will be able to:

- selectively include the CSS or JavaScript for individual components
- build your own styles or components based on the palette or typography and spacing mixins
- customise the build (for example, overriding colours or enabling global styles)
- use the component Nunjucks templates

You will also need to set up JavaScript if you want to use any interactive components.

### Option 2: include compiled files

If your project does not use npm, or if you want to try out NHS App frontend in your project without installing it through npm, you can download and include compiled stylesheets, JavaScript and the asset files.

Using this option, you will be able to include all the CSS and JavaScript of NHS.UK fontend in your project.

You will not be able to:

- selectively include the CSS or JavaScript for individual components
- build your own styles or components based on the palette or typography and spacing mixins
- customise the build, for example, overriding colours or enabling global styles
- use the component Nunjucks templates
