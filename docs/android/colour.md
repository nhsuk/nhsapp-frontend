---
layout: layouts/docs.njk
title: Colour
colourGroups:
  - heading: Semantic
    description: Use semantic theme properties for their intended role.</p><p>Use <code>colorScheme.background</code> for screens and <code>nhsSecondaryBackground</code> for raised panels.
    colours:
      - token: colorScheme.background
        light: "#F0F4F5"
        dark: "#151B1F"
        highContrastLight: "#FFFFFF"
        highContrastDark: "#000000"
      - token: nhsSecondaryBackground
        light: "#E1E9EB"
        dark: "#090C0E"
        highContrastLight: "#FFFFFF"
        highContrastDark: "#000000"
      - token: colorScheme.primary
        light: "#005EB8"
        dark: "#3698FF"
        highContrastLight: "#003B8E"
        highContrastDark: "#6FB8FF"
      - token: colorScheme.onPrimary
        light: "#FFFFFF"
        dark: "#002F5C"
        highContrastLight: "#FFFFFF"
        highContrastDark: "#FFFFFF"
      - token: colorScheme.error
        light: "#D5281B"
        dark: "#F76957"
        highContrastLight: "#B51A10"
        highContrastDark: "#FF8A7A"
      - token: colorScheme.onError
        light: "#FFFFFF"
        dark: "#4A1917"
        highContrastLight: "#FFFFFF"
        highContrastDark: "#FFFFFF"
      - token: colorScheme.surface
        light: "#FFFFFF"
        dark: "#242B30"
        highContrastLight: "#FFFFFF"
        highContrastDark: "#000000"
      - token: colorScheme.onSurface
        light: "#212B32"
        dark: "#FFFFFF"
        highContrastLight: "#000000"
        highContrastDark: "#FFFFFF"
      - token: colorScheme.onSurfaceVariant
        light: "#4C6272"
        dark: "#C8D3D9"
        highContrastLight: "#000000"
        highContrastDark: "#FFFFFF"
  - heading: Core palette
    description: The core palette includes the NHS brand colours and supporting accent colours.
    colours:
      - token: nhsBlue
        light: "#005EB8"
        dark: "#3698FF"
        highContrastLight: "#003B8E"
        highContrastDark: "#6FB8FF"
      - token: nhsGreen
        light: "#007F3B"
        dark: "#00B658"
        highContrastLight: "#005C2A"
        highContrastDark: "#33E87A"
      - token: nhsRed
        light: "#D5281B"
        dark: "#F76957"
        highContrastLight: "#B51A10"
        highContrastDark: "#FF8A7A"
      - token: nhsOrange
        light: "#ED8B00"
        dark: "#FFA240"
        highContrastLight: "#CC7700"
        highContrastDark: "#FFBF66"
      - token: nhsAqua
        light: "#4AA199"
        dark: "#4AA199"
        highContrastLight: "#2E7A73"
        highContrastDark: "#66CCBF"
      - token: nhsPurple
        light: "#5C338E"
        dark: "#A988DD"
        highContrastLight: "#3F1F6B"
        highContrastDark: "#C9A6F5"
      - token: nhsPink
        light: "#AE2573"
        dark: "#E681BA"
        highContrastLight: "#8C1C5B"
        highContrastDark: "#F099D1"
      - token: nhsYellow
        light: "#FFEB3B"
        dark: "#FFEB3B"
        highContrastLight: "#E6D200"
        highContrastDark: "#FFEF5C"
      - token: nhsWarmYellow
        light: "#FFB81C"
        dark: "#FFB81C"
        highContrastLight: "#E6A300"
        highContrastDark: "#FFCC44"
  - heading: Dark variants
    description: Dark variants provide a deeper colour for use where the design calls for stronger contrast with a pale colour.
    colours:
      - token: nhsDarkBlue
        light: "#00386E"
        dark: "#ADD1FF"
        highContrastLight: "#001F4D"
        highContrastDark: "#CDE4FF"
      - token: nhsDarkGreen
        light: "#004C23"
        dark: "#ADFFC7"
        highContrastLight: "#003318"
        highContrastDark: "#CCFFDD"
      - token: nhsDarkRed
        light: "#801810"
        dark: "#FFB5AD"
        highContrastLight: "#6B100A"
        highContrastDark: "#FFD4CE"
      - token: nhsDarkOrange
        light: "#5F3800"
        dark: "#FFD2AD"
        highContrastLight: "#4D2D00"
        highContrastDark: "#FFE2C2"
      - token: nhsDarkYellow
        light: "#4C4612"
        dark: "#FFE799"
        highContrastLight: "#3D3A0F"
        highContrastDark: "#FFF3B3"
      - token: nhsDarkAqua
        light: "#25514D"
        dark: "#94FAEA"
        highContrastLight: "#1A3F3C"
        highContrastDark: "#B3FFF5"
      - token: nhsDarkPurple
        light: "#402463"
        dark: "#DACCFF"
        highContrastLight: "#2B1549"
        highContrastDark: "#EADBFF"
      - token: nhsDarkPink
        light: "#681645"
        dark: "#FFCCE2"
        highContrastLight: "#541138"
        highContrastDark: "#FFDBEE"
  - heading: Pale variants
    description: Pale variants provide a softer background colour for the corresponding colour family.
    colours:
      - token: nhsPaleBlue
        light: "#CCDFF1"
        dark: "#002F5C"
        highContrastLight: "#B3D4F0"
        highContrastDark: "#001A3D"
      - token: nhsPaleGreen
        light: "#CCE5D8"
        dark: "#004C23"
        highContrastLight: "#B3E0C8"
        highContrastDark: "#003318"
      - token: nhsPaleRed
        light: "#F7D4D1"
        dark: "#4A1917"
        highContrastLight: "#F5B8B3"
        highContrastDark: "#3D110F"
      - token: nhsPaleOrange
        light: "#FBE8CC"
        dark: "#523000"
        highContrastLight: "#F9D9A6"
        highContrastDark: "#3D2300"
      - token: nhsPaleYellow
        light: "#FFF7B1"
        dark: "#423D10"
        highContrastLight: "#FFF170"
        highContrastDark: "#3D3A0F"
      - token: nhsPaleAqua
        light: "#C9E3E0"
        dark: "#1E403D"
        highContrastLight: "#ADD9D4"
        highContrastDark: "#143330"
      - token: nhsPalePurple
        light: "#DED6E8"
        dark: "#3F2361"
        highContrastLight: "#CDBDE0"
        highContrastDark: "#2B1549"
      - token: nhsPalePink
        light: "#EFD3E3"
        dark: "#541238"
        highContrastLight: "#E8B8D4"
        highContrastDark: "#400E2B"
  - heading: Greyscale
    description: Greyscale tokens include text and neutral surfaces.
    colours:
      - token: nhsBlack
        light: "#212B32"
        dark: "#FFFFFF"
        highContrastLight: "#000000"
        highContrastDark: "#FFFFFF"
      - token: nhsGrey
        light: "#4C6272"
        dark: "#C8D3D9"
        highContrastLight: "#333333"
        highContrastDark: "#E0E0E0"
      - token: nhsGrey2
        light: "#768692"
        dark: "#AAB5BC"
        highContrastLight: "#555555"
        highContrastDark: "#CCCCCC"
      - token: nhsGrey3
        light: "#AAB5BC"
        dark: "#768692"
        highContrastLight: "#000000"
        highContrastDark: "#FFFFFF"
      - token: nhsGrey4
        light: "#D8DDE0"
        dark: "#4C5A63"
        highContrastLight: "#000000"
        highContrastDark: "#FFFFFF"
      - token: nhsGrey5
        light: "#F0F4F5"
        dark: "#151B1F"
        highContrastLight: "#FFFFFF"
        highContrastDark: "#000000"
      - token: nhsWhite
        light: "#FFFFFF"
        dark: "#242B30"
        highContrastLight: "#FFFFFF"
        highContrastDark: "#000000"
section: Android
subsection: Styles
theme: Styles
---

Colours are defined as tokens in the Android design system and exposed to Jetpack Compose through `MaterialTheme`.

The palette adapts to light and dark themes, and includes separate high-contrast light and dark variants. `NHSAppTheme` selects the matching NHS colour set based on the active theme and system contrast setting.

## How to use

In composables, use the theme-aware colour properties so colours adapt to the active variant:

```kotlin
Text(
    text = "Appointments",
    color = MaterialTheme.nhsBlue
)
```

Inside a composable, access Material 3 theme roles through `MaterialTheme.colorScheme`. Choose a role that matches the purpose of the element, and use its corresponding `on…` role for content such as text or icons placed on it.

For example, use `primary` for a primary action’s background and `onPrimary` for its content:

```kotlin
Surface(color = MaterialTheme.colorScheme.primary) {
    Text(
        text = "Continue",
        color = MaterialTheme.colorScheme.onPrimary
    )
}
```

{% for group in colourGroups %}

## {{ group.heading }}

{% if group.description %}<p>{{ group.description | safe }}</p>{% endif %}

<table class="app-table--no-border">
  <thead>
    <tr>
      <th>MaterialTheme property path</th>
      <th>Light</th>
      <th>Dark</th>
      <th>HC light</th>
      <th>HC dark</th>
    </tr>
  </thead>
  <tbody>
    {%- for colour in group.colours %}
    <tr>
      <th class="nhsuk-u-width-full">
        <code class="nhsuk-u-font-weight-normal">{{ colour.token }}</code>
      </th>
      {% for mode in ["light", "dark", "highContrastLight", "highContrastDark"] %}
      <td class="nhsuk-u-padding-0">
        <span class="app-colour-list__swatch app-colour-list__swatch--bordered" style="background-color:{{ colour[mode] }}"></span>
      </td>
      {% endfor %}
    </tr>
    {%- endfor %}
  </tbody>
</table>

{% endfor %}
