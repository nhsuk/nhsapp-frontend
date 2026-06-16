---
layout: layouts/ios.njk
title: Colour
tags:
  - ios
colourGroups:
  - heading: Core palette
    colours:
      - token: nhsBlue
        light: "#0060bf"
        dark: "#2ca2ff"
      - token: nhsAquaGreen
        light: "#4aa199"
        dark: "#58bbb2"
      - token: nhsBlack
        light: "#212b33"
        dark: "#ffffff"
      - token: nhsGreen
        light: "#007f3b"
        dark: "#00c55f"
      - token: nhsOrange
        light: "#ed8b00"
        dark: "#ffa240"
      - token: nhsPink
        light: "#ae2573"
        dark: "#f681ba"
      - token: nhsPurple
        light: "#5c338e"
        dark: "#a988dd"
      - token: nhsRed
        light: "#d5281b"
        dark: "#f76957"
      - token: nhsWhite
        light: "#ffffff"
        dark: "#263037"
      - token: nhsWarmYellow
        light: "#ffb81c"
      - token: nhsYellow
        light: "#ffeb3b"
        dark: "#ffffff"
  - heading: Greyscale
    colours:
      - token: nhsGrey1
        light: "#4c6273"
        dark: "#c8d3d9"
      - token: nhsGrey2
        light: "#778792"
        dark: "#aab5bc"
      - token: nhsGrey3
        light: "#aeb7be"
        dark: "#7b888f"
      - token: nhsGrey4
        light: "#d8dde0"
        dark: "#4c5a63"
      - token: nhsGrey5
        light: "#f0f4f5"
        dark: "#1b2429"
  - heading: Dark variants
    colours:
      - token: nhsDarkAquaGreen
        light: "#25514d"
        dark: "#94faea"
      - token: nhsDarkBlue
        light: "#00386e"
        dark: "#add1ff"
      - token: nhsDarkGreen
        light: "#004c23"
        dark: "#adffc7"
      - token: nhsDarkOrange
        light: "#603700"
        dark: "#ffd2ad"
      - token: nhsDarkPink
        light: "#681645"
        dark: "#ffcce2"
      - token: nhsDarkPurple
        light: "#402463"
        dark: "#daccff"
      - token: nhsDarkRed
        light: "#801810"
        dark: "#ffb5ad"
      - token: nhsDarkYellow
        light: "#4c4612"
        dark: "#ffe799"
  - heading: Pale variants
    colours:
      - token: nhsPaleAquaGreen
        light: "#c9e3e0"
        dark: "#1e403d"
      - token: nhsPaleBlue
        light: "#ccdff1"
        dark: "#002f5c"
      - token: nhsPaleGreen
        light: "#cce5d8"
        dark: "#004c23"
      - token: nhsPaleOrange
        light: "#fce7cc"
        dark: "#513000"
      - token: nhsPalePink
        light: "#efd3e3"
        dark: "#541238"
      - token: nhsPalePurple
        light: "#ded6e8"
        dark: "#3f2361"
      - token: nhsPaleRed
        light: "#f7d4d1"
        dark: "#4a1917"
      - token: nhsPaleYellow
        light: "#fff7b1"
        dark: "#423d10"
  - heading: Fixed colours
    description: These use the same colour value in both light and dark mode. Use them when you need a colour that does not change.
    colours:
      - token: nhsBlueOnly
        light: "#005eb8"
      - token: nhsAquaGreenOnly
        light: "#4aa199"
      - token: nhsBlackOnly
        light: "#232b32"
      - token: nhsGreenOnly
        light: "#007f3b"
      - token: nhsOrangeOnly
        light: "#ed8b00"
      - token: nhsPinkOnly
        light: "#ae2573"
      - token: nhsPurpleOnly
        light: "#5c338e"
      - token: nhsRedOnly
        light: "#d5281b"
      - token: nhsWhiteOnly
        light: "#ffffff"
      - token: nhsDarkAquaGreenOnly
        light: "#25514d"
      - token: nhsDarkBlueOnly
        light: "#00386e"
      - token: nhsDarkGreenOnly
        light: "#004c23"
      - token: nhsDarkOrangeOnly
        light: "#5a390f"
      - token: nhsDarkPinkOnly
        light: "#681645"
      - token: nhsDarkPurpleOnly
        light: "#402463"
      - token: nhsDarkRedOnly
        light: "#801810"
      - token: nhsDarkYellowOnly
        light: "#4c4612"
      - token: nhsPaleAquaGreenOnly
        light: "#c9e3e0"
      - token: nhsPaleBlueOnly
        light: "#ccdff1"
      - token: nhsPaleGreenOnly
        light: "#cce5d8"
      - token: nhsPaleOrangeOnly
        light: "#f8e8cf"
      - token: nhsPalePinkOnly
        light: "#efd3e3"
      - token: nhsPalePurpleOnly
        light: "#ded6e8"
      - token: nhsPaleRedOnly
        light: "#f7d4d1"
      - token: nhsPaleYellowOnly
        light: "#fff7b1"
---

Colours are defined in the NHS iOS App Design as extensions on SwiftUI's `Color`.

All colours will adapt to dark mode, except for those with the 'Only' suffix, which are fixed.

## Accent colour

The NHS brand colour should be set up as the global accent or 'tint' colour across your app. This is then used by some native SwiftUI components.

To set it up, open the file which defines the top-level entry point for your app and add `.tint(.nhsAccent)` like this:

```swift
import SwiftUI
import NHSAppDesign

@main
struct NHSAppDesignExampleApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
                .tint(.nhsAccent)
        }
    }
}
```

This tint colour will then be inherited by all of your views.

{% for group in colourGroups %}

## {{ group.heading }}

{% if group.description %}<p>{{ group.description }}</p>{% endif %}

<table class="app-table--no-border">
  <thead>
    <tr>
      <th>Code</th>
      <th>Light</th>
      <th>Dark</th>
    </tr>
  </thead>
  <tbody>
    {%- for colour in group.colours %}
    <tr>
      <th class="nhsuk-u-width-full">
        <code class="app-code--transparent nhsuk-u-font-weight-normal">.{{ colour.token }}</code>
      </th>
      <td class="nhsuk-u-padding-0">
        <span class="app-colour-list__swatch {{ "app-colour-list__swatch--bordered" if colour.token == "nhsGrey5" }}" style="background-color:{{ colour.light }}"></span>
      </td>
      <td class="nhsuk-u-padding-0">
        <span class="app-colour-list__swatch" style="background-color:{{ colour.dark if colour.dark else colour.light }}"></span>
      </td>
    </tr>
    {%- endfor %}
  </tbody>
</table>

{% endfor %}
