---
layout: layouts/pattern.njk
title: Get urgent medical advice 
description: Tell users what to do if they need urgent medical advice. 
backlogID: 259
---

{% example "get-urgent-medical-advice/example.njk" %}

## When to use

Use this pattern to tell users how to get medical help by [using 111 online](https://111.nhs.uk/triage/check-your-symptoms) or calling 111. This can include error scenarios where a user is blocked from accessing a medical service.

## When not to use

Only use this pattern if you’ve first considered following the NHS service manual pattern for helping users [decide when and where to get care (care cards)](https://service-manual.nhs.uk/design-system/patterns/help-users-decide-when-and-where-to-get-care).

Do not include this pattern in scenarios where users are unlikely to need medical advice. We particularly want to avoid giving the impression that 111 can help with technical problems. You might leave out this text on an error page about not being able to download a file, for example.

If the error page already suggests contacting a GP surgery, you do not need to also mention 111.

You should:

- think about whether or not the user is being blocked from accessing particular medical help
- speak to the clinical team for advice
