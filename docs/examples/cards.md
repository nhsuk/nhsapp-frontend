---
layout: layouts/plain.njk
title: Cards
---

{% from "card/macro.njk" import card %}

<h2>Card Link</h2>
{{ card({
  title: 'Title',
  href: '#'
}) }}

<h2>Card Link with text</h2>
{{ card({
  title: 'Title',
  href: '#',
  description: 'Supporting text'
}) }}
