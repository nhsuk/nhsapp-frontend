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

## When not to use

Do not place card links in the middle of paragraph text.

## How to use

The whole card should always act as a single, selectable link.

Use the variation below that fits best with the context.

### Short card link

This is our preferred style. A concise phrase explains where the link goes. It can be read quickly because of the short amount of text.

{% example "cards/card-link-short.njk" %}

### Card link with paragraph text

On pages deeper in the structure of the NHS App, users may need more details to understand where links go. In this case, you can use paragraph text below the heading to give more information.

Only use this variation if you have found a user need for more detailed links on a particular page.

{% example "cards/card-link-with-description.njk" %}

### Using icons

[Icons](/components/icons/) may help users to understand the meaning of a card link. We currently only use this variation for “Manage health services for others” and “Messages” links on the homepage.

{% example "cards/card-link-icon.njk" %}

### Using badges

Use [badges](/components/badge/) to alert users to new, important information that sits beyond a card link. This could include unread messages or new appointment details.

{% example "cards/card-link-with-badge.njk" %}

### Multiple card links

Multiple card links placed together must be marked up as lists in the HTML code. This helps screen reader users to navigate the content, for example by letting them know how many items there are in the list.

{% example "cards/card-group-stacked.njk" %}

If a page has a long list of card links, consider breaking them up using headings. This makes the information easier to digest and can help screen reader users who may navigate pages by headings.

{% example "cards/card-group-headings.njk" %}

### Secondary card links

Use secondary card links on hub pages to signpost groups of information on less important topics.

{% example "cards/card-link-secondary.njk" %}

Use them below primary card links which signpost more important information.

{% example "cards/card-link-secondary-stacked.njk" %}

### With footer

{% example "cards/card-footer.njk" %}

## Content guidance

Aim to use active phrasing for card link text. This means starting the link text with a verb. For example: "Request repeat prescriptions" and "Check for available GP appointments". This follows content guidance on links and helps users to understand the action they can take.

However, you may find reasons to vary this to fit with the context. On the "Your health" hub, we mainly use noun phrases (such as "GP health record") for brevity and to avoid multiple links starting with the same verb.

In usability testing, we did not see evidence of this mixture of phrasing causing problems for users. We also noted that GOV.UK also vary link phrasing in a similar way. However, more research on link phrasing may be helpful to validate the best approach.

## Research

In usability testing, people successfully navigated the NHS App and completed a range of tasks using short card links. They understood the meaning of the links despite the short amount of text.

In some usability testing involving card links with paragraph text, users have overlooked the paragraph text. However, paragraph text has been found to help users differentiate inboxes on the “Messages” hub.

The icons used on homepage card links were well understood in our user research. People were able to recognise the images and associate them with the link destination.

### Knowledge gaps

As noted in the content guidance section above, more research into link phrasing may help us to understand the best way to word NHS App links.
