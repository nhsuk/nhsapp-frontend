---
layout: layouts/ios.njk
title: Card action
tags:
  - iosComponents
---

Card actions are tappable rows used to link onwards from a list of options.

<img src="/assets/images/ios/card-action.png" width="375">

## How it works

There are 3 styles of a card action:

- [primary](#primary)
- [plain](#plain)
- [reverse](#reverse)

`CardAction`'s are usually grouped inside a `CardActionGroup`, which adds the card and the divider between each pair of card actions.

There are 2 card action group styles:

- [primary group](#card-action-group)
- [secondary group](#secondary-card-action-group)

## How to use

{% from "details/macro.njk" import details %}
{% call details({ summary: "Swift options" }) %}
{% include "ios/card-action/swift-options.md" %}
{% endcall %}

### Primary

Use the primary style for a card action that leads to another screen or a sheet in the app.

<img src="/assets/images/ios/card-action.png" width="375">

```swift { .nhsuk-code--button }
CardAction(title: "Check the progress of prescriptions") { }
    .nhsCardStyle()
```

For a single card action outside a group, apply `nhsCardStyle()` to add a card around it.

### Plain

Use the plain style for a card action that needs less emphasis, such as a link out to a web page. It has no chevron.

<img src="/assets/images/ios/card-action-plain.png" width="375">

```swift { .nhsuk-code--button }
CardAction(title: "Find services near you", style: .plain) { }
    .nhsCardStyle()
```

### Reverse

Use the reverse style for a card action on its own that needs to stand out. It has a bold title and white text on a blue card.

<img src="/assets/images/ios/card-action-reverse.png" width="375">

```swift { .nhsuk-code--button }
CardAction(title: "Family and carer access", style: .reverse) {
    // Action
}
```

It includes its own card, so don't add `nhsCardStyle()`. Don't use a reverse card action inside a card action group.

### With a subtitle

Add a `subtitle` for supporting text below the title.

<img src="/assets/images/ios/card-action-subtitle.png" width="375">

```swift { .nhsuk-code--button }
CardAction(
    title: "Your chosen pharmacy",
    subtitle: "Boots"
) {
    // Action
}
```

### Card action group

Pass the card actions as an array. The group adds the card and the dividers, so none of that is repeated at each card action.

<img src="/assets/images/ios/card-action-group.png" width="375">

```swift { .nhsuk-code--button }
CardActionGroup(header: "GP surgery", actions: [
    CardAction(title: "Request a repeat prescription") { },
    CardAction(title: "Check the progress of prescriptions") { },
    CardAction(title: "Medicines record") { },
])
```

### Secondary card action group

For links that need less emphasis, use a secondary group. It adds a bordered card and puts its card actions in the plain style automatically.

<img src="/assets/images/ios/card-action-group-secondary.png" width="375">

```swift { .nhsuk-code--button }
CardActionGroup(
    header: "NHS information and support",
    style: .secondary,
    actions: [
        CardAction(title: "Check your symptoms using 111 online") { },
        CardAction(title: "Health A to Z") { },
        CardAction(title: "Find services near you") { },
    ]
)
```

### A less prominent action

Mix a plain action into a primary group for one that needs less emphasis than the card actions above it, such as "See all" or "Show more". This has not been tested in [research](#research) yet.

<img src="/assets/images/ios/card-action-mixed.png" width="375">

```swift { .nhsuk-code--button }
CardActionGroup(header: "Test results", actions: [
    CardAction(title: "HPV test") { },
    CardAction(title: "Kidney function blood tests") { },
    CardAction(title: "Blood pressure") { },
    CardAction(title: "See all", style: .plain) { },
])
```

### Header and footer

Add a `header` above the card and a `footer` below it. Keep the header in sentence case.

```swift { .nhsuk-code--button }
CardActionGroup(
    header: "GP surgery",
    footer: "Services available from your GP surgery.",
    actions: [
        CardAction(title: "Request a repeat prescription") { },
        CardAction(title: "Check the progress of prescriptions") { },
    ]
)
```

Use a more prominent header, such as a top-level section on a long screen, by passing `headerFont: .nhsTitle3`.

## Accessibility

This component supports Dynamic Type, Dark Mode and VoiceOver.

A card action is announced as a single button, reading out the title and then the subtitle rather than as two separate items.

Where a card action leads somewhere less obvious than a screen in the app, describe what happens in `accessibilityHint`, for example "Opens in a web browser". A card action that opens a web page inside the app stays a button, because that is how it behaves: it presents something the person closes to come back.

```swift { .nhsuk-code--button }
CardAction(
    title: "Health A to Z",
    style: .plain,
    accessibilityHint: "Opens a web page in the app"
) {
    // Action
}
```

Add the link trait only where the card action really hands the URL to the system, so the person leaves for Safari or another app. VoiceOver then announces it as a link, and it appears in the links rotor:

```swift { .nhsuk-code--button }
CardAction(
    title: "Privacy and legal policies",
    accessibilityHint: "Opens in a web browser"
) {
    // Action
}
.accessibilityAddTraits(.isLink)
```

A group's header is marked up as a heading, so VoiceOver users can find it in the headings rotor.

## Research

This component is not yet being used by the live NHS App, but several rounds of research have been done on it.

Using a plain card action for a less prominent action, such as "See all" or "Show more", has been used in a prototype but not yet tested in research. The prototype showed the most recent few items on a hub page, with "See all" going to a list of every item.
