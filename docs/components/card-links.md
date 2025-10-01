---
layout: layouts/component.njk
title: Card links
description: Use card links to help users reach the next stage of their NHS App journey.
backlogID: 10
tags:
  - component
---

{% example "cards/card-link.njk" %}

## When to use

Use card links to take users:

- to the start of an NHS App service
- deeper into an area of the app

## How to use

Use the variation below that fits best with the context.

### Short card link

Use a concise phrase to explain where the link goes.

{% example "cards/card-link-short.njk" %}

### Card link with description

Only use this variation if you have found a user need for more detailed links.

{% example "cards/card-link-with-description.njk" %}

### Using icons

[Icons](/styles/icons) may help users to understand the meaning of a card link. We currently only use this variation for “Manage health services for others” and “Messages” links on the homepage.

{% example "cards/card-link-icon.njk" %}

### Badges on card links

Use [badges](/components/badge/) on card links to alert users to new, important information.

{% example "cards/card-link-with-badge.njk" %}

### Secondary card links

Use secondary card links to signpost information that is less important in the context of the page.

{% example "cards/card-link-secondary.njk" %}

### Colour variations

You can use [colour](/styles/colour) to highlight a card link. This can help draw attention to important content.

Use colour sparingly and make sure there is enough contrast between text and background.

{% example "cards/card-link-light-blue.njk" %}

### Images on card links

You can add an image to a card link. We use this on the home screen of the NHS App to [help users learn about public health campaigns](/patterns/learn-about-health-campaigns/).

{% example "cards/card-link-with-image.njk" %}

### Custom content on card links

You can add custom content to a card link, such as a tag, appointment time and location.

Keep the content short and easy to scan. Test with users to check the card gives them the right amount of information.

{% example "cards/card-link-custom.njk" %}

### Footers on card links

You can use a footer to separate related content inside a card link.

{% example "cards/card-link-with-footer.njk" %}

### Card with no link

{% example "cards/card-with-no-link.njk" %}

### Multiple card links

Multiple card links placed together must be marked up as lists in the HTML code. This helps screen reader users to navigate the content, for example by letting them know how many items there are in the list.

#### Grouped card links

Use grouped card links to separate distinct groups of content or actions. Each card is visually independent.

{% example "cards/card-group.njk" %}

#### Stacked card links

Use stacked card links to show multiple items within a single group, such as different sections of the same service or related tasks.

{% example "cards/card-group-stacked.njk" %}

Use secondary card links below primary card links which signpost more important information.

{% example "cards/card-group-stacked-secondary.njk" %}

#### Using headings

Break up long lists of card links by using headings. It makes pages easier to scan and helps screen reader users to navigate.

{% example "cards/card-group-headings.njk" %}

You can add custom HTML to the heading using `headingHtml`.

{% example "cards/card-group-custom-heading.njk" %}

## Accesibility

Screen reader users often navigate by pulling up a list of all the links on a page. When they do this, they only hear the link text, not the content around it.

This means your `linkAriaLabel` must include all the important information from the card. It needs to make sense on its own, out of context.

In this example, a sighted user sees the date, location and 'Action needed' tag laid out visually. A screen reader user hears all of this in the `linkAriaLabel`: "Action needed: Orthopaedic appointment on Monday 3 June 2024 at 9:40am, at The Willows, Croydon University Hospital".

{% example "cards/card-link-accessibility.njk" %}

You can mark the visual content as `aria-hidden="true"` because it's already in the link label. This stops screen reader users hearing the same information twice.

Before you hide content with `aria-hidden="true"`, check it appears in the `linkAriaLabel`. If it does not, do not hide it. Screen reader users will miss it when they navigate through links.

## Research

In our research, people successfully navigated the NHS App and completed a range of tasks using short card links. They understood the meaning of the links despite the short amount of text.

Some people overlooked description text when it was included in card links.
