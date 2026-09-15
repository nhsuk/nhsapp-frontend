---
layout: layouts/ios.njk
title: Title
tags:
  - iosComponents
---

The title is the main heading of a screen. It can also appear in the toolbar.

## When to use

Use a title on every screen, so users know where they are.

## When not to use

Do not use a title for headings within a screen. Use a section header instead.

Do not use more than one title on a screen.

## How it works

There are 2 display modes:

- [large title](#large-title)
- [inline title](#inline-title)

## How to use

### Large title

Large titles display at the top of the content, then move into the toolbar as the user scrolls down.

<img src="/assets/images/ios/title-large.png">

{% from "details/macro.njk" import details %}
{% call details({ summaryText: "Swift options" }) %}
{% include "ios/title/swift-options.md" %}
{% endcall %}

```swift { .nhsuk-code--button }
ScrollView {
    Title()

    // the rest of the screen
}
.nhsTitle("Health choices")
```

Apply `nhsTitle()` to the screen's scrolling container, and lead the content with a `Title()`.

`Title()` takes its heading from `nhsTitle()`, so the text is written once.

#### With a subtitle

Add a subtitle for supporting information about the whole screen.

<img src="/assets/images/ios/title-with-subtitle.png" width="375">

```swift { .nhsuk-code--button }
ScrollView {
  Title(
    subtitle: "Manage another person's healthcare or give access to your profile to someone you trust."
  )

  // the rest of the screen
}
.nhsTitle("Family and carer access")
```

#### With an icon

An icon may help users recognise a section. Only use it on the first screen the user opens from the home menu, not on later screens.

<img src="/assets/images/ios/title-with-icon.png" width="375">

```swift { .nhsuk-code--button }
ScrollView {
  Title(
      systemImage: "pills.fill"
  )

  // the rest of the screen
}
.nhsTitle("Prescriptions")
```

#### In a list view

To place a `Title()` inside a `List`, apply modifiers so it renders edge to edge rather than as a standard inset row.

```swift { .nhsuk-code--button }
List {
    Title()
        .listRowInsets(EdgeInsets())
        .listRowBackground(Color.clear)
        .listRowSeparator(.hidden)

    // the rest of the screen
}
.nhsTitle("Face ID")
```

### Inline title

On a screen that does not lead with a large title, use an inline title.

<img src="/assets/images/ios/title-inline.png">

```swift { .nhsuk-code--button }
List {
    // the rest of the screen
}
.nhsTitle("Removed messages", displayMode: .inline)
```

Add `displayMode: .inline` to the `.nhsTitle`.

A `Title()` is not needed in the content.

The inline title must not truncate, because it is the only place the heading appears. Truncation is only acceptable when the inline title is the collapsed form of a large title, where the heading has already been shown in full.

## Writing for this component

Keep the heading short and in sentence case, naming what the screen is for.

Use the same words as the link or button the user tapped to get there, so they know they are in the right place.

Use a subtitle only where the heading needs explaining. Keep it to one or two lines.

Follow the [NHS content guide](https://service-manual.nhs.uk/content) for style, voice and tone.

## Accessibility

This component supports Dynamic Type, Dark Mode and VoiceOver.

VoiceOver announces the title as a heading, so users can jump straight to it using the headings rotor.

The heading is announced once. While the large heading is on screen, the toolbar copy is hidden from VoiceOver, and it is only announced once the user has scrolled past the heading.

The icon is decorative and is not read out.

Up to iOS 18, the title is also the label of the back button on screens opened from this one, and is what VoiceOver announces for that button. Keeping headings short helps here too.

## Research

This component is not yet being used by the live NHS App, but several rounds of research have been done on it.
