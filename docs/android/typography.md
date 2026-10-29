---
layout: layouts/android.njk
title: Typography
tags:
  - androidStyles
---

The Android design system uses Frutiger for all text, to match the [NHS web design system](https://service-manual.nhs.uk/design-system/styles/typography) and the iOS app.

The type scale follows the [Material 3 type scale](https://m3.material.io/styles/typography/type-scale-tokens), using the same roles, sizes, line heights and letter spacing, but rendered in Frutiger. `NHSAppTheme` passes the scale to `MaterialTheme`, so Material components use it automatically.

Sizes are set in `sp` (scale-independent pixels), so all text scales with the user’s font size setting in their device’s accessibility settings.

## How to use

Inside a composable, access the type styles through `MaterialTheme.typography`. Choose a role that matches the purpose of the text:

```kotlin
Text(
    text = "Vaccinations",
    style = MaterialTheme.typography.headlineSmall
)
```

## Type styles

| Role             | Size | Line height | Weight  |
| ---------------- | ---- | ----------- | ------- |
| `displayLarge`   | 57sp | 64sp        | Regular |
| `displayMedium`  | 45sp | 52sp        | Regular |
| `displaySmall`   | 36sp | 44sp        | Regular |
| `headlineLarge`  | 32sp | 40sp        | Bold    |
| `headlineMedium` | 28sp | 36sp        | Bold    |
| `headlineSmall`  | 24sp | 32sp        | Bold    |
| `titleLarge`     | 22sp | 28sp        | Regular |
| `titleMedium`    | 16sp | 24sp        | Regular |
| `titleSmall`     | 14sp | 20sp        | Regular |
| `bodyLarge`      | 16sp | 24sp        | Regular |
| `bodyMedium`     | 14sp | 20sp        | Regular |
| `bodySmall`      | 12sp | 16sp        | Regular |
| `labelLarge`     | 14sp | 20sp        | Bold    |
| `labelMedium`    | 12sp | 16sp        | Bold    |
| `labelSmall`     | 11sp | 16sp        | Bold    |

Use `display` styles only for short, prominent text such as onboarding screens. Use `bodyLarge` for most reading text.

## Weights

Frutiger is available in Regular and Bold only. Material 3 uses a Medium weight for some roles, so the design system makes these changes:

- `headline` and `label` styles are Bold
- `title` styles are Regular

To make other text bold, set the weight where you use the style:

```kotlin
Text(
    text = "Vaccinations",
    style = MaterialTheme.typography.titleMedium,
    fontWeight = FontWeight.Bold
)
```

Do not use italics.

## Custom sizes

If none of the type styles fit, you can use the `Frutiger` font family with a custom size. Always use `sp` units so that text scales with the user’s font size setting:

```kotlin
Text(
    text = "Vaccinations",
    fontFamily = Frutiger,
    fontSize = 20.sp
)
```
