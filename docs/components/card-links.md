---
layout: layouts/component.njk
title: Cards
description: A card is a flexible component. We use different variations for links and displaying information.
backlogID: 10
tags:
  - component
---

## Card links

Card links are the main way users navigate the NHS App. The whole card is selectable.

### Short card link

Use a concise phrase to explain where the link goes.

{% example "cards/card-link-short.njk" %}

### Card link with description

Only use this variation if you have found a user need for more detailed links.

{% example "cards/card-link-with-description.njk" %}

### Badges on card links

Use [badges](/components/badge/) on card links to alert users to new, important information.

{% example "cards/card-link-with-badge.njk" %}

### Multiple card links

Multiple card links placed together must be marked up as lists in the HTML code. This helps screen reader users to navigate the content, for example by letting them know how many items there are in the list.

{% example "cards/card-group-stacked.njk" %}

Break up long lists of card links by using headings. It makes pages easier to scan and helps screen reader users to navigate.

{% example "cards/card-group-headings.njk" %}

### Secondary card links

Use secondary card links to signpost information that is less important in the context of the page.

{% example "cards/card-link-secondary.njk" %}

Use them below primary card links which signpost more important information.

{% example "cards/card-link-secondary-stacked.njk" %}

## Account card

We use this card to display personal information on the account area of the app. It includes a link to managing health services for others.

{% example "cards/card-account.njk" %}

## Campaign card

We use the campaign card on the home screen of the NHS App to [help users learn about public health campaigns](/patterns/learn-about-health-campaigns/).

{% example "cards/card-campaign.njk" %}

## Research

### Card links

In our research, people successfully navigated the NHS App and completed a range of tasks using short card links. They understood the meaning of the links despite the short amount of text. Some people overlooked description text when it was included in card links.

### Account card

People were able to find their NHS number on the account card. They expected their name, date of birth and NHS number to be grouped together. They found it logical having the options to manage health services for others close to their own name.

### Campaign card

People noticed and engaged with the campaign card. They responded positively to the tone of the text, the use of photography, and the idea of campaigns being shown on the home screen.
