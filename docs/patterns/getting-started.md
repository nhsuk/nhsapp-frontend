---
layout: layouts/pattern.njk
title: Get started with the NHS App
description: Use this pattern to introduce users to the app and its main features.
backlogID: 250
tags:
  - helpUsers
---

## When to use

Use this to help users learn:

- benefits of the app
- how to use the app
- how to setup the app

## When not to use

Do not use this to:

- introduce newly released features
- show existing features we want users to discover

This pattern should only ever be used to help new users get familiar with the app, therefore it shouldn't be shown once they have used it.

## How to use

The getting started pattern features:

- a tab view or pager within a sheet / screen just at the startup of the app
- indicators to inform the user how many screens of information to expect and
- at the bottom, toolbar controls to help users navigate the screens if they cannot use gesture controls
- actions should be presented in a button which triggers and completes the desired action. Example turn on biometrics should complete the action of switching on biometric feature. If not possible, consider telling the user where on the app they can complete said action. Do not navigate or tab jump the user from onboarding directly into the app

### Content

Provide very brief content as people are often inclined to skip or skim-read content when onboarding.

Use images or animations to help users identify & remember the main information.

Consider including the information in help section of the app for users who might want to re-use it.

## Accessibility

Summarise the main information the user needs to know in an audio description. This ensures people using screen readers are not having to traverse through all the content on screen. An audio summary makes the information sound clear and more natural.

If there is information about multiple topics on the same screen, provide audio summaries for each information.

Use haptics to help people detect when an action has been taken, especially if they are unable to detect audio cues.

## Research

This pattern was tested in moderated usability sessions in April 2025.

The pattern was well understood by participants in terms purpose and familiarity, however they tried to skip or skim read the information if they felt more confident with apps.

### Known gaps

In our research, we found that participants attention threshold began to decline at the 3rd screen (out of the 5 screens we tested in the onboarding flow). However, we need to see if this behaviour is consistent within a larger sample size.
