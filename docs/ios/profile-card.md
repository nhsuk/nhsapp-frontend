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

On the home screen, use the regular card. This shows either the user's own profile or the profile they have switched to.

On every other screen, show the compact acting for card whenever the user has switched to someone else's profile. This means it is always clear whose information they are looking at, not only on the home screen.

Do not show a card for the user's own profile on screens other than the home screen.

## When not to use

Do not use a profile card to prompt the user to do something. Use the [banner](/ios/banner) instead.

Do not use more than one profile card on a screen.

## How it works

There are 2 versions of the card:

- **your own profile**  —  a pale blue card showing the user's name and NHS number
- **acting for someone else**  — a warm yellow card showing whose profile the user has switched to and how to manage the switch

The colour change is the main signal that the user has switched profile, so the 2 versions always look different from each other.

The warm yellow card keeps the same colours in both light and dark mode, so it stays visually distinct. The pale blue card adapts to dark mode as normal.

Each card has an icon, the name, a line of supporting text, and a chevron showing that the card leads somewhere. The whole card is one tap target.

The layout adapts to the user's settings:

- text scales with Dynamic Type
- at large text sizes, the icon is no longer shown so the text has more room
- text is never truncated: the card grows to fit

## How to use

Use the profile card within a SwiftUI view.

The card triggers an action when tapped. Specify this using the `action` closure. See [handling actions](/ios/handling-actions) for how to navigate to another screen or present a sheet.

### Your own profile

Pass the user's name and their NHS number, formatted for display:

<img src="/assets/images/ios/profile-card.png" width="375">

{% from "details/macro.njk" import details %}
{% call details({ summaryText: "Swift options" }) %}
{% include "ios/profile-card/swift-options.md" %}
{% endcall %}

```swift { .nhsuk-code--button }
ProfileCard(
    name: "Kevin Francis",
    nhsNumber: "485 777 3456",
    action: {
        // open the user's profile
    }
)
```

### Acting for someone else

Use the `actingFor` version when the user has switched to another person's profile. Tapping the card usually asks the user to confirm switching back:

<img src="/assets/images/ios/profile-card-switched.png" width="375">

```swift { .nhsuk-code--button }
ProfileCard(
    actingFor: "Sharon Francis-Williams",
    action: {
        // ask the user to confirm switching back
    }
)
```

### The compact card

Use the compact size for the acting for card on screens other than the home screen. It uses smaller text and less padding, so it takes up less room above the screen's own content:

<img src="/assets/images/ios/profile-card-compact.png" width="375">

```swift { .nhsuk-code--button }
ProfileCard(
    actingFor: "Sharon Francis-Williams",
    size: .compact,
    action: {
        // ask the user to confirm switching back
    }
)
```

Place it below the screen's heading, above the screen's content, so it is seen before the information it applies to.

At compact size, "Acting for" runs inline with the name, rather than on its own line above it. This means each screen says whose profile is active, rather than relying on the user having seen the home screen.

Only use the compact size with the acting for card. Do not use it for the user's own profile.

## Writing for this component

The text in the card is set by the component. Only the name and NHS number come from your app.

Format the NHS number in 3 groups of digits, as this is easier to read out and check.

## Accessibility

This component supports Dynamic Type, Dark Mode and VoiceOver.

VoiceOver reads the card as a single button: the name and supporting text together, followed by the accessibility hint if one is set.

Set the accessibility hint only if the text in the card does not already make the result of tapping clear.

The icon and chevron are decorative and are not read out.

Do not rely on colour alone to show that the user has switched profile. Both versions include "Acting for" with the name, and the supporting text reads "Manage another person's profile", so the change is not only visual.

Both colour pairings meet [WCAG AA](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html) contrast.

## Research

These toolbar items are not yet being used by the live NHS App, but several rounds of research have been done on them.
