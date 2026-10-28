---
layout: layouts/style.njk
title: Colour
backlogID: 393
tags:
  - style
  - deprecated
---

The NHS App design system used to extend the [NHS design system colour palette](https://service-manual.nhs.uk/design-system/styles/colou) with tints and shades, for use on the [tag](/components/tag/) and [card links](/components/card-links/) components.

These tints and shades have now been added to the NHS design system, from version 1.7.0.

The `nhsapp-colour()` function has now been deprecated from version 5.4.0 and will be removed in version 6.0.0. Use `nhsuk-colour()` instead.

<table class="app-colour-list" summary="Table of the full colour palette">
  <tr>
    <td class="nhsuk-u-padding-left-0" colspan="3">
      <h2 class="nhsuk-heading-m nhsuk-u-margin-bottom-0">
      Tints
      </h2>
    </td>
  </tr>
  <tbody>
      <tr class="app-colour-list__row">
      <th class="app-colour-list__column app-colour-list__column--name" scope="row">
        <span class="app-colour-list__swatch nhsuk-u-margin-right-2" style="background-color:#f7d4d1"></span>
        <code>nhsapp-colour("pale-red")</code>
      </th>
      <td class="app-colour-list__column app-colour-list__column--colour">
      #f7d4d1
      </td>
    </tr>
    <tr class="app-colour-list__row">
      <th class="app-colour-list__column app-colour-list__column--name" scope="row">
        <span class="app-colour-list__swatch nhsuk-u-margin-right-2" style="background-color:#fff9c4"></span>
        <code>nhsapp-colour("pale-yellow")</code>
      </th>
      <td class="app-colour-list__column app-colour-list__column--colour">
      #fff9c4
      </td>
    </tr>
        <tr class="app-colour-list__row">
      <th class="app-colour-list__column app-colour-list__column--name" scope="row">
        <span class="app-colour-list__swatch nhsuk-u-margin-right-2" style="background-color:#cce5d8"></span>
        <code>nhsapp-colour("pale-green")</code>
      </th>
      <td class="app-colour-list__column app-colour-list__column--colour">
      #cce5d8
      </td>
    </tr>
    <tr class="app-colour-list__row">
      <th class="app-colour-list__column app-colour-list__column--name" scope="row">
        <span class="app-colour-list__swatch nhsuk-u-margin-right-2" style="background-color:#bae6e3"></span>
        <code>nhsapp-colour("pale-aqua-green")</code>
      </th>
      <td class="app-colour-list__column app-colour-list__column--colour">
      #bae6e3
      </td>
    </tr>
    <tr class="app-colour-list__row">
      <th class="app-colour-list__column app-colour-list__column--name" scope="row">
        <span class="app-colour-list__swatch nhsuk-u-margin-right-2" style="background-color:#ccdff1"></span>
        <code>nhsapp-colour("pale-blue")</code>
      </th>
      <td class="app-colour-list__column app-colour-list__column--colour">
      #ccdff1
      </td>
    </tr>
    <tr class="app-colour-list__row">
      <th class="app-colour-list__column app-colour-list__column--name" scope="row">
        <span class="app-colour-list__swatch nhsuk-u-margin-right-2" style="background-color:#ded6e8"></span>
        <code>nhsapp-colour("pale-purple")</code>
      </th>
      <td class="app-colour-list__column app-colour-list__column--colour">
      #ded6e8
      </td>
    </tr>
    <tr class="app-colour-list__row">
      <th class="app-colour-list__column app-colour-list__column--name" scope="row">
        <span class="app-colour-list__swatch nhsuk-u-margin-right-2" style="background-color:#efd3e3"></span>
        <code>nhsapp-colour("pale-pink")</code>
      </th>
      <td class="app-colour-list__column app-colour-list__column--colour">
      #efd3e3
      </td>
    </tr>
    <tr class="app-colour-list__row">
      <th class="app-colour-list__column app-colour-list__column--name" scope="row">
        <span class="app-colour-list__swatch nhsuk-u-margin-right-2" style="background-color:#fbe8cc"></span>
        <code>nhsapp-colour("pale-orange")</code>
      </th>
      <td class="app-colour-list__column app-colour-list__column--colour">
      #fbe8cc
      </td>
    </tr>
  </tbody>
</table>

<table class="app-colour-list" summary="Table of the full colour palette">
  <tr>
    <td class="nhsuk-u-padding-left-0" colspan="3">
      <h2 class="nhsuk-heading-m nhsuk-u-margin-bottom-0">
      Shades
      </h2>
    </td>
  </tr>
  <tbody>
    <tr class="app-colour-list__row">
      <th class="app-colour-list__column app-colour-list__column--name" scope="row">
        <span class="app-colour-list__swatch nhsuk-u-margin-right-2" style="background-color:#801810"></span>
        <code>nhsapp-colour("dark-red")</code>
      </th>
      <td class="app-colour-list__column app-colour-list__column--colour">
      #801810
      </td>
    </tr>
     <tr class="app-colour-list__row">
      <th class="app-colour-list__column app-colour-list__column--name" scope="row">
        <span class="app-colour-list__swatch nhsuk-u-margin-right-2" style="background-color:#595215"></span>
        <code>nhsapp-colour("dark-yellow")</code>
      </th>
      <td class="app-colour-list__column app-colour-list__column--colour">
      #595215
      </td>
    </tr>
    <tr class="app-colour-list__row">
      <th class="app-colour-list__column app-colour-list__column--name" scope="row">
        <span class="app-colour-list__swatch nhsuk-u-margin-right-2" style="background-color:#004c23"></span>
        <code>nhsapp-colour("dark-green")</code>
      </th>
      <td class="app-colour-list__column app-colour-list__column--colour">
      #004c23
      </td>
    </tr>
    <tr class="app-colour-list__row">
      <th class="app-colour-list__column app-colour-list__column--name" scope="row">
        <span class="app-colour-list__swatch nhsuk-u-margin-right-2" style="background-color:#004a45"></span>
        <code>nhsapp-colour("dark-aqua-green")</code>
      </th>
      <td class="app-colour-list__column app-colour-list__column--colour">
      #004a45
      </td>
    </tr>
    <tr class="app-colour-list__row">
      <th class="app-colour-list__column app-colour-list__column--name" scope="row">
        <span class="app-colour-list__swatch nhsuk-u-margin-right-2" style="background-color:#003087"></span>
        <code>nhsapp-colour("dark-blue")</code>
      </th>
      <td class="app-colour-list__column app-colour-list__column--colour">
      #003087
      </td>
    </tr>
    <tr class="app-colour-list__row">
      <th class="app-colour-list__column app-colour-list__column--name" scope="row">
        <span class="app-colour-list__swatch nhsuk-u-margin-right-2" style="background-color:#330072"></span>
        <code>nhsapp-colour("dark-purple")</code>
      </th>
      <td class="app-colour-list__column app-colour-list__column--colour">
      #330072
      </td>
    </tr>
    <tr class="app-colour-list__row">
      <th class="app-colour-list__column app-colour-list__column--name" scope="row">
        <span class="app-colour-list__swatch nhsuk-u-margin-right-2" style="background-color:#6e234b"></span>
        <code>nhsapp-colour("dark-pink")</code>
      </th>
      <td class="app-colour-list__column app-colour-list__column--colour">
      #6e234b
      </td>
    </tr>
    <tr class="app-colour-list__row">
      <th class="app-colour-list__column app-colour-list__column--name" scope="row">
        <span class="app-colour-list__swatch nhsuk-u-margin-right-2" style="background-color:#5f3800"></span>
        <code>nhsapp-colour("dark-orange")</code>
      </th>
      <td class="app-colour-list__column app-colour-list__column--colour">
      #5f3800
      </td>
    </tr>
  </tbody>
</table>

## Accessibility

Follow the [NHS design system guidance on colour accessibility](https://service-manual.nhs.uk/design-system/styles/colour#accessibility).
