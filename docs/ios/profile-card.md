---
layout: layouts/ios.njk
title: Profile card
tags:
  - iosComponents
---

The profile card is a tappable card showing whose profile the user is currently viewing.

<img src="/assets/images/ios/profile-card.png" width="375">

## When to use

Use a profile card to show the user whose profile they are in.

On the home screen, add the profile card to show either the user's own profile or the profile they have switched to.

On every other screen, show the compact acting for card whenever the user has switched to someone else's profile. This means it is always clear whose information they are looking at, not only on the home screen.

Do not show a card for the user's own profile on screens other than the home screen.

## How it works

There are 2 versions of the card:

- [your own profile](#your-own-profile)
- [acting for someone else](#acting-for-someone-else)

Each card has an icon, the name, a line of supporting text, and a chevron showing that the card leads somewhere. The whole card is one tap target.

## How to use

{% from "details/macro.njk" import details %}
{% call details({ summaryText: "Swift options" }) %}
{% include "ios/profile-card/swift-options.md" %}
{% endcall %}

### Your own profile

A pale blue card showing the user's name and NHS number:

<img src="/assets/images/ios/profile-card.png" width="375">

```swift { .nhsuk-code--button }
ProfileCard(
    name: "Kevin Francis",
    nhsNumber: "485 777 3456",
    action: {
        // open the user's profile
    }
)
```

Format the NHS number in 3 groups of digits, as this is easier to read out and check.

### Acting for someone else

Use the `actingFor` version when the user has switched to another person's profile. This shows a warm yellow card with the person's name and supporting text to manage the switch:

<img src="/assets/images/ios/profile-card-switched.png" width="375">

```swift { .nhsuk-code--button }
ProfileCard(
    actingFor: "Sharon Francis-Williams",
    action: {
        // open options to switch profile
    }
)
```

The colour change is the main signal that the user has switched profile, so the 2 versions always look different from each other.

The warm yellow card keeps the same colours in both light and dark mode, so it stays visually distinct.

### The compact card

Use the compact size for the acting for card on screens other than the home screen. It uses smaller text and less padding, so it takes up less room above the screen's own content:

<img src="/assets/images/ios/profile-card-compact.png" width="375">

```swift { .nhsuk-code--button }
ProfileCard(
    actingFor: "Sharon Francis-Williams",
    size: .compact,
    action: {
        // open options to switch profile
    }
)
```

Place it below the screen's heading, above the screen's content, so it is seen before the information it applies to.

Only use the compact size with the acting for card. Do not use it for the user's own profile.

## Accessibility

This component supports Dynamic Type, Dark Mode and VoiceOver.

VoiceOver reads the card as a single button: the name and supporting text together, followed by the accessibility hint if one is set.

Set the accessibility hint only if the text in the card does not already make the result of tapping clear.

The icon and chevron are decorative and are not read out.

Do not rely on colour alone to show that the user has switched profile. Both versions include "Acting for" with the name, and the supporting text reads "Manage another person's profile", so the change is not only visual.

Both colour pairings meet [WCAG AA](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html) contrast.

## Research

This component is not yet being used by the live NHS App, but several rounds of research have been done on it.
