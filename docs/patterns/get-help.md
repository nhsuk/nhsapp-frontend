---
layout: layouts/pattern.njk
title: Get help while using the NHS App 
description: Use the app help button to let users access help information while they use the NHS App.  
backlogID: 447
tags:
  - helpUsers
---

This helps users overcome problems they experience in the app without having to contact their GP or the app support team.

![The top navigation menu. The NHS logo is on the left and a button with the text app help is on the right.](/assets/images/top-navigation-2026.png)

## When to use

The button is part of the [top navigation]([../components/top-navigation) menu. It can be accessed from almost every screen of the app.

When a user is accessing NHS App services through a web browser, the help button is part of the persistent [header (web)](../components/header-web) menu.

## How to use

Use the button to open a help page hosted on the NHS website. In the mobile app the page opens in a web browser overlay.

<figure class="nhsuk-image" style="text-align: center;">
  <img
    src="/assets/images/help-overlay-example.png"
    alt="NHS App help content opening in a web browser overlay, on top of the main app interface."
    width="300"
    style="display: inline-block;"
  >
  <figcaption class="nhsuk-image__caption">
    An example of how the current web browser overlay for help pages displays on an Apple phone.
  </figcaption>
</figure>

This overlay pattern is being reviewed. We are looking to [improve how NHS website and third-party pages open from the app](https://github.com/nhsuk/nhsapp-frontend/issues/450).

In the web browser version of the NHS App, help pages open in a new browser tab.

### Which page to open

Take users to a help topic menu page that's relevant to where they are in the app. For example, [Help with your profile in the NHS App](https://www.nhs.uk/nhs-app/help/profile/) or [Help with appointments in the NHS App](https://www.nhs.uk/nhs-app/help/appointments/).

If there is not a relevant topic menu page, take users to the main [Help with using the NHS App](https://www.nhs.uk/nhs-app/help/) menu page. You should also take users here if they're using an integrated service, including one provided through a third-party.


## How not to use

Do not route the app help button to a particular article page. Users may need help with something other than the screen they are on in the app.

Showing users a menu page gives them various options that may be relevant to their problem.

## Research

“App help” was well understood as a label. People were consistently able to find and use the button.

There were some issues with user experience when users were using the browser overlay. Some people:

- navigated to other parts of the NHS website and lost their bearings
- thought they were still inside the app, and that they could take actions (such as requesting a prescription)

We've since made content changes to help pages, to make it clearer when users are viewing help rather than acting inside the NHS App. This includes adding an "NHS App help" sub-heading on help article pages. We've also introduced the continuous tense in page headings. For example, using "Requesting repeat prescriptions" instead of "Request repeating prescriptions".

We are [exploring how NHS website and third-party websites open from the app](https://github.com/nhsuk/nhsapp-frontend/issues/450).

## Accessibility

The button has been tested with visually impaired users. We found it to be accessible for screen readers.
