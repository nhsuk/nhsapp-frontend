---
layout: layouts/ios.njk
title: Banner
tags:
  - iosComponents
---

The banner is a highly visible, tappable card that draws attention to an important action, such as proving your identity or giving feedback.

<img src="/assets/images/ios/banner-solid.png">

## When to use

Use a banner to promote a single important action that the user can choose to take, but does not have to take to continue.

For example:

- asking users to prove who they are so they can access more features
- inviting users to give feedback

Use banners sparingly. The more banners on a screen, the less attention each one gets.

Do not place banners next to each other. If you need more than one on a screen, separate them with other content and put the most important one first. For example, the home screen shows an identity banner at the top and a feedback banner at the bottom.

## When not to use

Do not use a banner:

- for information that does not have an action
- to show errors, warnings or the result of something the user just did
- for actions the user must take before they can continue — use the relevant journey or screen instead

## How it works

A banner has a short line of text explaining why the user should act, followed by a bold link-style label describing the action. It can also show a decorative icon.

The whole banner is tappable, not just the action label. This gives users a large tap target.

There are 2 styles:

- **solid** — a coloured background with no border
- **outlined** — a white background with a coloured border

The layout adapts to the user's settings:

- text scales with Dynamic Type
- at very large text sizes, the icon is no longer shown so the text has more room

## How to use

Use the banner within a SwiftUI view.

<img src="/assets/images/ios/banner-solid.png">

{% from "details/macro.njk" import details %}
{% call details({ summaryText: "Swift options" }) %}
{% include "ios/banner/swift-options.md" %}
{% endcall %}

```swift { .nhsuk-code--button }
Banner(
    title: "Tell us what you think about the NHS App",
    buttonText: "Give feedback",
    style: .solid(background: .nhsPaleGreen, accent: .nhsDarkGreen),
    systemImage: "ellipsis.bubble.fill",
    accessibilityHint: "Opens in web browser",
    action: { }
)
```

### Actions

The banner triggers an action when tapped. Specify this using the `action` closure.

<img src="/assets/images/ios/banner-outlined.png">

The action can present a view as a modal sheet:

```swift { .nhsuk-code--button }
struct ContentView: View {
    @State private var isPresentingSheet = false

    var body: some View {
        Banner(
            title: "Prove your identity to access all NHS App features",
            buttonText: "Prove who you are",
            style: .outlined(.nhsPurple),
            systemImage: "person.badge.shield.checkmark",
            accessibilityHint: "Opens a sheet to verify your identity",
            action: { isPresentingSheet = true }
        )
        .sheet(isPresented: $isPresentingSheet) {
            ProveIdentityView()
        }
    }
}
```

It can also open a link, navigate to another screen, or trigger any other action.

### Using a banner in a list view

To place a banner inside a `List`, apply the `nhsCardRowStyle()` modifier so it renders edge to edge rather than as a standard inset row:

```swift { .nhsuk-code--button }
List {
    Banner(
        title: "Tell us what you think about the NHS App",
        buttonText: "Give feedback",
        style: .solid(background: .nhsPaleGreen, accent: .nhsDarkGreen),
        systemImage: "ellipsis.bubble.fill",
        accessibilityHint: "Opens in web browser",
        action: { }
    )
    .nhsCardRowStyle()
}
```

## Writing for this component

Keep the title to a single short sentence explaining the benefit of acting. Say what the user gets, not what the system needs.

Make the action label describe what happens next, starting with a verb. For example, "Give feedback" or "Prove who you are".

Do not use "learn more" or other vague labels. User should know what will happen before they tap.

Write the accessibility hint to describe where the action takes the user. If it opens a web overlay, use "Opens in a web browser". Do not repeat the title or action label – VoiceOver reads those already.

Follow the [NHS content guide](https://service-manual.nhs.uk/content) for style, voice and tone.

## Accessibility

This component supports Dynamic Type, Dark Mode and VoiceOver.

VoiceOver reads the banner as a single button: the title and action label together, followed by the accessibility hint. The icon is decorative and is not read out.

The icon scales with the user's text size and is hidden at very large text sizes.

When choosing colours, check that the accent colour has enough contrast against the background colour to meet at least [WCAG AA](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html).

## Research

This component is not yet being used by the live NHS App.
