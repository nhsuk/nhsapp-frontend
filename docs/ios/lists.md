---
layout: layouts/ios.njk
title: Lists
tags:
  - iosLayouts
---

List views present rows of data in a single column.

## When to use

Use a list view for a screen containing a collection of similar rows backed by data that isn’t fixed, such as messages, appointments or medications.

If the data can be re-ordered by the user, or you want to enable swipe actions on each row.

You can also group rows into sections, for example recurring appointments and one-off appointments.

Each row in the list can be linked to a detail view. When doing this, a chevron will be displayed on the right.

Users using the VoiceOver screen reader will hear the content announced as a list, and the number of items there are. As they navigate through the list, the position within the list will be announced.

## When not to use

Do not use a list view if the screen is prose-heavy. Use a [scroll view](/ios/scroll-views) instead.

If you find yourself overriding the default styling on most rows, for example giving them a clear background or hiding their separators, the screen belongs in a [scroll view](/ios/scroll-views) instead.

If the screen collects input through a fixed set of controls, for example a group of toggle rows, use a [form view](/ios/forms) instead.

## How it works

Use the SwiftUI [List](https://developer.apple.com/documentation/SwiftUI/List) component, adding `.nhsListStyle()` to apply the NHS list styling and `.nhsListRowStyle()` to each row to style its background and separator.

Examples:

- [Basic list](#basic-list)
- [List with sections](#list-with-sections)
- [List with a title](#list-with-a-title)
- [List with navigation](#list-with-navigation)
- [Refreshable list](#refreshable-list)
- [List with an index](#list-with-an-index)

### Basic list

This example shows a basic list of prescriptions.

```swift { .nhsuk-code--button }
let prescriptions = [
    "Amoxicillin",
    "Atorvastatin",
    "Cetirizine"
]

var body: some View {
    List(prescriptions, id: \.self) { prescription in
        Text(prescription)
            .nhsListRowStyle()
    }
    .nhsListStyle()
}
```

### List with sections

Use `Section` to group related rows and apply `.nhsSectionStyle()` to each section. Every section needs a header styled with `.nhsSectionHeaderStyle()`. If you include a footer, style it with `.nhsSectionFooterStyle()`.

This example groups medicines into repeat and one-off prescriptions:

```swift { .nhsuk-code--button }
List {
    Section {
        Text("Atorvastatin")
        Text("Levothyroxine")
    } header: {
        Text("Repeat prescriptions")
            .nhsSectionHeaderStyle()
    } footer: {
        Text("Medicines prescribed for regular use.")
            .nhsSectionFooterStyle()
    }
    .nhsSectionStyle()

    Section {
        Text("Amoxicillin")
        Text("Fusidic acid cream")
    } header: {
        Text("One-off prescriptions")
            .nhsSectionHeaderStyle()
    } footer: {
        Text("Medicines prescribed for a specific course of treatment.")
            .nhsSectionFooterStyle()
    }
    .nhsSectionStyle()
}
.nhsListStyle()
```

### List with a title

Place a [Title](/ios/title) as the first item in the `List`, before any rows or sections. It has its own styling, so do not apply `.nhsListRowStyle()` to it.

Apply `.nhsTitle()` to the list to set the heading text. `Title()` uses that text at the top of the list. If the list is inside a `NavigationStack`, the title appears in the bar at the top of the screen (the navigation bar) when the heading scrolls out of view.

```swift { .nhsuk-code--button }
List {
    Title()

    Text("Atorvastatin")
        .nhsListRowStyle()
    Text("Levothyroxine")
        .nhsListRowStyle()
}
.nhsListStyle()
.nhsTitle("Prescriptions")
```

### List with navigation

Use a [card action](/ios/card-action) for each row that opens another screen. This will add a chevron on the right to show that the row is tappable. Apply `.nhsListRowStyle()` to the card action, just as you would for a text row.

In an existing `NavigationStack`, use `.navigationDestination(item:)` (iOS 17 and later) to open a detail view when the card action selects an item. This example does not need a navigation path. Replace the placeholder with your app's detail view.

```swift { .nhsuk-code--button }
@State private var selectedVaccination: String?

var body: some View {
    List {
        CardAction(title: "Flu") {
            selectedVaccination = "Flu"
        }
        .nhsListRowStyle()

        CardAction(title: "Shingles") {
            selectedVaccination = "Shingles"
        }
        .nhsListRowStyle()
    }
    .nhsListStyle()
    .navigationTitle("Vaccinations")
    .navigationDestination(item: $selectedVaccination) { _ in
        // Load the detail view
    }
}
```

### Refreshable list

Add SwiftUI's `.refreshable` modifier to let users pull down to reload the list. The refresh indicator stays visible until the refresh finishes.

```swift { .nhsuk-code--button }
List {
    // Requested medicine rows
}
.nhsListStyle()
.refreshable {
    await refreshRequestedMedicines()
}
```

This pattern has not yet been tested.

### List with an index

For a very long alphabetical list, group medicines by their first letter. Add `.sectionIndexLabel()` to each section so users can jump to a letter using the an index on the right.

This currently only works in iOS 26 and above.

```swift { .nhsuk-code--button }
List {
    Section {
        Text("Aciclovir")
        Text("Acrivastine")
        // More medicines beginning with A
    } header: {
        Text("A").nhsSectionHeaderStyle()
    }
    .sectionIndexLabel("A")
    .nhsSectionStyle()

    Section {
        Text("Baclofen")
        Text("Beclometasone inhalers")
        // More medicines beginning with B
    } header: {
        Text("B").nhsSectionHeaderStyle()
    }
    .sectionIndexLabel("B")
    .nhsSectionStyle()
}
.nhsListStyle()
```

This pattern has not yet been tested. 

## Research

If your team has tested lists with users, please [share your research findings](/community/share-findings/).

We do not yet have a pattern for loading more items in a list. We welcome research on loading items automatically as users scroll (infinite scrolling) or using a "Load more" button.

