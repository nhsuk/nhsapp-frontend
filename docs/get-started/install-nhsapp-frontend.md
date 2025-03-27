---
layout: layouts/get-started.njk
title: Add the NHS App frontend to the NHS prototype kit
---

This guide shows you how to add the [NHS App frontend](/get-started/nhsapp-frontend) to the [NHS prototype kit](https://prototype-kit.service-manual.nhs.uk/).

<div class="nhsuk-inset-text nhsuk-u-margin-top-5">
  <p>If you're using the <a href="/get-started/nhsapp-prototype">NHS App prototype</a>, you'll find the NHS App frontend is already included.</p>
</div>

## Step 1

Using GitBash or Terminal, navigate to where your prototype is. For example

```sh
cd ~/Documents/projects/project-prototype
```

If your prototype is already running, to stop it use

```sh
Ctrl + C
```

## Step 2

Enter

```sh
npm install --save nhsapp-frontend
```

## Step 3

In your HTML editor, open

```sh
/app/assets/sass/main.scss
```

After

```sh
// Import NHS.UK frontend library
@import 'node_modules/nhsuk-frontend/packages/nhsuk';
```

Paste

```sh
// Import all styles from the NHS App frontend library
@import 'node_modules/nhsapp-frontend/dist/nhsapp/all';
```

## Step 4

In your root folder, open

```sh
/app.js
```

and find

```sh
appViews
```

After

```sh
path.join(__dirname, 'node_modules/nhsuk-frontend/packages/components'),
```

Add

```sh
path.join(__dirname, 'node_modules/nhsapp-frontend/dist'),
```

So it looks like this

```sh
const appViews = [
  path.join(__dirname, 'app/views/'),
  path.join(__dirname, 'lib/example-templates/'),
  path.join(__dirname, 'lib/prototype-admin/'),
  path.join(__dirname, 'node_modules/nhsuk-frontend/packages/components'),
  path.join(__dirname, 'node_modules/nhsuk-frontend/packages/macros'),
  path.join(__dirname, 'node_modules/nhsapp-frontend/dist'),
];
```

## Step 5

In your root folder, open

```sh
/app.js
```

and find

```sh
app.use('/nhsuk-frontend', express.static(path.join(__dirname, 'node_modules/nhsuk-frontend/dist')));
```

and on the next line paste

```sh
app.use('/nhsapp-frontend', express.static(path.join(__dirname, 'node_modules/nhsapp-frontend/dist/nhsapp')));
```

## Step 6

After installing the NHS App frontend, all [NHS App components](/components) should work seamlessly in your prototype.
