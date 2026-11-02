---
layout: layouts/android.njk
title: Buttons
tags:
  - androidComponents
---

Buttons are used to help users carry out an action.

![Screenshot of 6 buttons: a green 'Primary' button, a white 'Secondary' button with a blue border, a red 'Warning' button, and a 'Tertiary' button with blue text only, followed by a white 'Reverse' button and a 'Outlined reverse' button with a white border on a blue background](/assets/images/android/button.png)

## How it works

There are 6 styles:

- [primary](#primary-button)
- [secondary](#secondary-button)
- [warning](#warning-button)
- [tertiary](#tertiary-button)
- [reverse](#reverse-button)
- [outlined reverse](#outlined-reverse-button)

The reverse styles are for use on dark backgrounds, such as the NHS blue.

Follow the [NHS design system button guidance](https://service-manual.nhs.uk/design-system/components/buttons) for when to use primary, secondary and warning buttons.

Buttons are built on [Material 3 buttons](https://developer.android.com/develop/ui/compose/components/button). They use the bold `labelLarge` text style, and are sized to their label by default. Use a `Modifier` such as `fillMaxWidth()` to make a button fill the width of its container.

When pressed, buttons scale down slightly and give haptic feedback.

## How to use

Use the `NHS…Button` composables from the NHS App design system. Each takes a `text` label and an `onClick` function.

### Primary button

![Screenshot of a green button with white text labelled 'Continue'](/assets/images/android/button-primary.png)

A filled green button with white text.

```kotlin { .nhsuk-code--button }
NHSPrimaryButton(
    text = "Continue",
    onClick = { /* handle tap */ }
)
```

### Secondary button

![Screenshot of a button with a blue border and blue text labelled 'Cancel'](/assets/images/android/button-secondary.png)

A button with a blue label and a 2dp blue outline.

```kotlin { .nhsuk-code--button }
NHSSecondaryButton(
    text = "Cancel",
    onClick = { /* handle tap */ }
)
```

### Warning button

![Screenshot of a red button with white text labelled 'Delete account'](/assets/images/android/button-warning.png)

Use it sparingly, only for destructive actions.

```kotlin { .nhsuk-code--button }
NHSWarningButton(
    text = "Delete account",
    onClick = { /* handle tap */ }
)
```

### Tertiary button

![Screenshot of a text-only button with blue text labelled 'Skip'](/assets/images/android/button-tertiary.png)

A low-emphasis text button with blue text and no outline or background. It has no horizontal padding, so it sits flush with surrounding content, but it keeps a touch target of at least 48dp.

```kotlin { .nhsuk-code--button }
NHSTertiaryButton(
    text = "Skip",
    onClick = { /* handle tap */ }
)
```

### Reverse button

![Screenshot of a white button with black text labelled 'Log in' on a blue background](/assets/images/android/button-reverse.png)

Use this on a dark background, such as the NHS blue:

```kotlin { .nhsuk-code--button }
NHSReverseButton(
    text = "Log in",
    onClick = { /* handle tap */ }
)
```

### Outlined reverse button

![Screenshot of a button with a white border and white text labelled 'Register' on a blue background](/assets/images/android/button-reverse-outlined.png)

A button with a white outline and white text, for use on a dark background. Use it for a lower-emphasis action, for example next to a standard reverse button:

```kotlin { .nhsuk-code--button }
NHSOutlinedReverseButton(
    text = "Register",
    onClick = { /* handle tap */ }
)
```

### Full width

![Screenshot of a green 'Continue' button stretched to fill the width of the screen](/assets/images/android/button-full-width.png)

Pass a `modifier` to make a button fill the available width:

```kotlin { .nhsuk-code--button }
NHSPrimaryButton(
    text = "Continue",
    onClick = { /* handle tap */ },
    modifier = Modifier.fillMaxWidth()
)
```

### With an icon

![Screenshot of a button with a blue border, sized to fit an information icon and the label 'App help'](/assets/images/android/button-with-icon.png)

Pass an `ImageVector` as `icon` to show an 18dp icon before the label. Icons are decorative, so the label should describe the action.

```kotlin { .nhsuk-code--button }
NHSSecondaryButton(
    text = "App help",
    onClick = { /* handle tap */ },
    icon = Icons.Filled.Info
)
```

### Icon only buttons

![Screenshot of 4 icon-only buttons: a blue search icon with no background, a white plus icon on a green circle, a blue pencil icon in a circle with a light blue outline, and a dark close (X) icon on a white circle on a blue background](/assets/images/android/button-icon-button.png)

For actions represented only by an icon, use one of 4 icon button styles. These require a `contentDescription` so the button has an accessible name.

- `NHSIconButton` is a plain icon with no background
- `NHSFilledIconButton` is an icon on a filled green circle
- `NHSOutlinedIconButton` is an icon in an outlined circle
- `NHSReverseIconButton` is an icon on a white circle, for blue backgrounds

```kotlin { .nhsuk-code--button }
NHSIconButton(
    icon = Icons.Filled.Search,
    contentDescription = "Search",
    onClick = { /* handle tap */ }
)

NHSFilledIconButton(
    icon = Icons.Filled.Add,
    contentDescription = "Add",
    onClick = { /* handle tap */ }
)

NHSOutlinedIconButton(
    icon = Icons.Filled.Edit,
    contentDescription = "Edit",
    onClick = { /* handle tap */ }
)

NHSReverseIconButton(
    icon = Icons.Filled.Close,
    contentDescription = "Close",
    onClick = { /* handle tap */ }
)
```

### Grouped buttons

![Screenshot of a 'Cancel' button with a blue border next to a green 'Confirm' button, sharing the available width equally](/assets/images/android/button-group.png)

Place buttons side by side in a `Row`, or stacked in a `Column`:

```kotlin { .nhsuk-code--button }
Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
    NHSSecondaryButton(text = "Cancel", onClick = { }, modifier = Modifier.weight(1f))
    NHSPrimaryButton(text = "Confirm", onClick = { }, modifier = Modifier.weight(1f))
}
```

## Accessibility

Button labels should describe the action and make sense out of context. Wrapping text is supported, so labels are not truncated when the font size is increased.

Icon-only buttons must have a `contentDescription` for TalkBack.

