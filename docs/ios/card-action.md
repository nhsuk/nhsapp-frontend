---
layout: layouts/ios.njk
title: Card action
tags:
  - iosComponents
---

Card actions are tappable rows used to link onwards from a list of options.

## How it works

There are 3 versions of a card action:

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

```swift { .nhsuk-code--button }
CardActionGroup(actions: [
    CardAction(title: "Request a repeat prescription") { },
    CardAction(title: "Check the progress of prescriptions") { },
    CardAction(title: "Medicines record") { },
])
```

### Primary

```swift { .nhsuk-code--button }
CardAction(title: "Check the progress of prescriptions") { }
    .nhsCardStyle()
```

For a single card action outside a group, apply `nhsCardStyle()` to add a card around it.

### Plain

```swift { .nhsuk-code--button }
CardAction(title: "Check the progress of prescriptions", style: .plain) { }
    .nhsCardStyle()
```

### Reverse

For a card action on its own that needs to stand out, use the reverse style — white text with a bold title on a blue card. It has its own card, so don't add `nhsCardStyle()`:

```swift { .nhsuk-code--button }
CardAction(title: "Family and carer access", style: .reverse) {
    showFamilyAccess = true
}
```

### With a subtitle

Add a `subtitle` for supporting text below the title:

```swift { .nhsuk-code--button }
CardAction(
    title: "Your chosen pharmacy",
    subtitle: "Boots"
) {
    // Action
}
```

### Card action group

Pass the card actions as an array. The group adds the card and the dividers, so none of that is repeated at each card action:

```swift { .nhsuk-code--button }
CardActionGroup(header: "GP surgery", actions: [
    CardAction(title: "Request a repeat prescription") { },
    CardAction(title: "Check the progress of prescriptions") { },
    CardAction(title: "Medicines record") { },
])
```

### Secondary card action group

For links that need less emphasis, use a secondary group. It adds a bordered card and puts its card actions in the plain style — blue text with no chevron — automatically:

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

### Header and footer

Add a `header` above the card and a `footer` below it. Keep the header in sentence case:

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

### A "See all" action

Mix a plain action into a primary group for an action like "See all", set apart from the card actions above it:

```swift { .nhsuk-code--button }
CardActionGroup(header: "Test results", actions: [
    CardAction(title: "HPV test") { },
    CardAction(title: "Kidney function blood tests") { },
    CardAction(title: "Blood pressure") { },
    CardAction(title: "See all", style: .plain) { },
])
```

### Building card actions from data

Build the card actions with `map`:

```swift { .nhsuk-code--button }
CardActionGroup(style: .secondary, actions: links.map { link in
    CardAction(title: link.title) { showWebView(link.url) }
})
```

For a card action that is only sometimes shown, build the array in a computed property and append the card action when it applies:

```swift { .nhsuk-code--button }
private var prescriptionActions: [CardAction] {
    var actions = [
        CardAction(title: "Request a repeat prescription") { },
    ]
    if let pharmacy {
        actions.append(
            CardAction(title: "Your chosen pharmacy", subtitle: pharmacy.name) { }
        )
    }
    return actions
}
```

## Navigation

A card action runs a closure when tapped rather than holding a destination, so your app keeps control of how it navigates — a navigation path, a sheet, a full-screen cover, or something else. This matches the home menu item, profile card and campaign card, none of which navigate on your behalf.

Keeping the destination out of the card action means a card action whose behaviour depends on state stays a single call site, instead of branching between two different kinds of card action:

```swift { .nhsuk-code--button }
enum Route: Hashable {
    case gpSurgery, healthChoices
}

@State private var path: [Route] = []

NavigationStack(path: $path) {
    content
        .navigationDestination(for: Route.self) { route in
            switch route {
            case .gpSurgery:     GPSurgeryView()
            case .healthChoices: HealthChoicesView()
            }
        }
}

// At the call site
CardAction(title: "Your GP surgery") {
    if hasAccess {
        path.append(.gpSurgery)
    } else {
        showUpgradeSheet = true
    }
}
```

Type the path as an array of your own route type rather than `NavigationPath`, so you can write `path.append(.gpSurgery)`. `NavigationPath` accepts any `Hashable`, so it gives the leading dot no type to resolve against.

## Accessibility

This component supports Dynamic Type, Dark Mode and VoiceOver.

A card action is announced as a single button, reading out the title and then the subtitle rather than as two separate items.

Where a card action leads somewhere less obvious than a screen in the app, describe what happens in `accessibilityHint` — for example "Opens in a browser". A card action that opens a web page inside the app stays a button, because that is how it behaves: it presents something the person closes to come back.

```swift { .nhsuk-code--button }
CardAction(
    title: "Health A to Z",
    style: .plain,
    accessibilityHint: "Opens a web page in the app"
) {
    webPage = healthAToZURL
}
```

Add the link trait only where the card action really hands the URL to the system, so the person leaves for Safari or another app. VoiceOver then announces it as a link, and it appears in the links rotor:

```swift { .nhsuk-code--button }
CardAction(
    title: "Privacy and legal policies",
    accessibilityHint: "Opens in a browser"
) {
    openURL(policiesURL)
}
.accessibilityAddTraits(.isLink)
```

A group's header is marked up as a heading, so VoiceOver users can find it in the headings rotor.

## Research

This component is not yet being used by the live NHS App. Add a note here when research has been done on it.
