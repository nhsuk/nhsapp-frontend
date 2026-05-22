---
layout: layouts/pattern.njk
title: Access website journeys through the NHS App
description: Use web overlays to let users access website-based services and information in the NHS App.
backlogID: 
order: 4
tags:
  - helpUsers
---


## When to use

Use web overlays when users go into:

- any transactional NHS App services
- their health records
- NHS services integrated with the app, such as 111 online
- NHS website pages
- third-party services or websites

## When not to use

Do not use web overlays for any of the main menu screens in the NHS App, including the:

- home screen
- hub screens (Profile and Messages)
- sub-hub screens (such as Appointments and Prescriptions)

These are built using native code to give users the best experience while they navigate the core screens of the app. 

## How to use 

The way we use overlays depends on the service.

Use WebView to open transactional NHS services, health records and integrated NHS App services.

Use SafariView or [custom tabs? Not sure of Android equivalent?] to open NHS website information pages, and third-party services or websites.

### Hide unhelpful elements

To avoid users getting lost in an overlay you should hide the:

- website header and footer
- back link on the first page
- any links that can cause navigation problems [need a better way of explaining this]

### Give a title in the toolbar

In the toolbar for WebView journeys anyou should include a title for the service. For example, "Request a repeat prescription". [anything on truncation here?]

### Help users to exit the overlay

Include an X icon in the toolbar on:

- the first page
- pages within flows where users are only given information and not able to input data (for example, their medicines record)
- pages within an externally hosted NHS service (for example, 111 online) 
- pages within a third party service (for example, an online consultation form)

Use an X icon with an alert on pages within flows with data input (eg: select GP appointment)

Use a done button on:

- final pages (eg: confirmation page)