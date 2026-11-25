---
layout: layouts/android.njk
title: Divider
tags:
  - androidStyles
---

Use a divider to visually separate related items or sections of content.

The screenshots show dividers within cards.

![A white card with First item and Second item separated by a grey horizontal line](/assets/images/android/divider.png)

## How to use

There are 2 divider types:

- [horizontal dividers](#horizontal-dividers)
- [vertical dividers](#vertical-dividers)

By default, both dividers use [`nhsGrey4`](/android/colour#greyscale) and have a thickness of `1.dp`. The colour adapts to light, dark and high contrast modes.

### Horizontal dividers

Use the [`HorizontalDivider`](https://developer.android.com/develop/ui/compose/components/divider) from Jetpack Compose when separating items or sections arranged vertically.

```kotlin { .nhsuk-code--button }
Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
    Text("First item")
    HorizontalDivider()
    Text("Second item")
}
```

### Vertical dividers

Use [`VerticalDivider`](https://developer.android.com/develop/ui/compose/components/divider) to separate items arranged horizontally.

For example:

![A white card with a date and appointment details separated by a vertical grey line](/assets/images/android/divider-vertical.png)

```kotlin { .nhsuk-code--button }
Row(
    modifier = Modifier.height(IntrinsicSize.Min),
    horizontalArrangement = Arrangement.spacedBy(16.dp),
) {
    Column {
        Text("OCT")
        Text("26")
    }
    VerticalDivider()
    Column {
        Text("10:30 AM")
        Text("St. Mary's Hospital")
    }
}
```

### Custom colours and thickness

You can change the colour of the divider and its thickness:

![A pale blue card with First item and Second item separated by a thicker blue line](/assets/images/android/divider-custom.png)

```kotlin { .nhsuk-code--button }
Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
    Text("First item")
    HorizontalDivider(color = MaterialTheme.nhsBlue.copy(alpha = 0.2f), thickness = 2.dp)
    Text("Second item")
}
```
