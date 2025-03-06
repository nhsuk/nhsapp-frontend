---
layout: layouts/pattern.njk
title: Problem logging in
description: Tell users what to do when there are problems logging in. 
backlogID: 119
tags:
  - page
---

{% example "problem-logging-in/default.njk" %}

## When to use

Use this pattern for any general, temporary login errors.

## How to use

The page should have:

- a logged-out header bar
- ‘There was a problem logging you in – NHS App’ as the page title
- ‘There was a problem logging you in’ as the H1
- ‘Go back and try again.’ as a normal paragraph
- ‘Go back to login’ as a secondary button.

### Custom login error pages

If we know there’s a specific problem preventing the user from logging in, customise the page content accordingly.

{% example "problem-logging-in/custom.njk" %}

### Error codes

For some login errors, you may need to include an error code and tell users how to [contact the NHS App team](/patterns/contact-nhs-app-team/).
