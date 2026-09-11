---
layout: layouts/ios.njk
title: Title
tags:
  - iosComponents
---

The title is the main heading of a screen. It can also appear in the navigation bar.

## When to use

Use a title on every screen, so users know where they are.

Most NHS App screens lead with a large heading at the top of the content, which moves into the navigation bar as the user scrolls down.

## When not to use

Do not use a title for headings within a screen — use a [section header](/ios/section-headers-and-footers).

Do not use more than one title on a screen.

## How it works

A title is made of 2 parts that work together:

- the `Title` component, which draws the large heading in the screen's content
- the `nhsTitle()` modifier, which sets the heading text and puts it in the navigation bar

There are 2 display modes:

- **large** — the heading is shown at the top of the content, and fades into the navigation bar once the user scrolls past it. This is the default, and how most NHS App screens work.
- **inline** — the heading is shown in the navigation bar only. Use it on screens that do not lead with a large heading, such as a pushed detail screen.

A title can also have a subtitle and a decorative icon.

The layout adapts to the user's settings:

- text scales with Dynamic Type
- at large text sizes, the icon is no longer shown so the heading has the full width
- headings are never truncated: they wrap onto more lines

## How to use

Apply `nhsTitle()` to the screen's scrolling container, and lead the content with a `Title`:

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

`Title()` takes its heading from `nhsTitle()`, so the text is written once.

### Titles in the navigation bar only

On a screen that does not lead with a large heading, use `.inline`. A `Title()` is not needed in the content:

```swift { .nhsuk-code--button }
List {
    // the rest of the screen
}
.nhsTitle("Removed messages", displayMode: .inline)
```

### Subtitles and icons

Add a subtitle for supporting information about the whole screen.

```swift { .nhsuk-code--button }
ScrollView {
  Title(
    subtitle: "Manage another person's healthcare or give access to your profile to someone you trust."
  )

  // the rest of the screen
}
.nhsTitle("Family and carer access")
```

### Icons

An icon where it helps users recognise the section [something about only using it for hub screens.]

```swift { .nhsuk-code--button }
ScrollView {
  Title(
      systemImage: "pills.fill"
  )

  // the rest of the screen
}
.nhsTitle("Prescriptions")
```

### Titles in a list view

To place a `Title` inside a `List`, apply modifiers so it renders edge to edge rather than as a standard inset row:

```swift { .nhsuk-code--button }
List {
    Title()
        .listRowInsets(EdgeInsets())
        .listRowBackground(Color.clear)
        .listRowSeparator(.hidden)

    // the rest of the screen
}
.nhsTitle("Prescriptions")
```

### Screens opened from another screen

Give every screen its own `nhsTitle()`, including screens opened as a sheet or pushed from another screen.

A `Title()` written without its own text takes the nearest heading above it. Content written inside another screen's body sits below that screen's `nhsTitle()`, so without its own it will show the wrong heading.

## Writing for this component

Keep the heading short and in sentence case, naming what the screen is for.

Use the same words as the link or button the user tapped to get there, so they know they are in the right place.

Use a subtitle only where the heading needs explaining. Keep it to one or two lines.

Follow the [NHS content guide](https://service-manual.nhs.uk/content) for style, voice and tone.

## Accessibility

This component supports Dynamic Type, Dark Mode and VoiceOver.

VoiceOver announces the title as a heading, so users can jump straight to it using the headings rotor.

The heading is announced once. While the large heading is on screen, the navigation bar copy is hidden from VoiceOver, and it is only announced once the user has scrolled past the heading.

The icon is decorative and is not read out.

Up to iOS 18, the title is also the label of the back button on screens opened from this one, and is what VoiceOver announces for that button. Keeping headings short helps here too.

## Research

This component is not yet being used by the live NHS App, but several rounds of research have been done on it.