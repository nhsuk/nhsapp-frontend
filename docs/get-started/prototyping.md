---
layout: layouts/get-started.njk
title: Prototyping
tags:
  - getStarted
---

This guide explains how to create prototypes using the NHS App design system with the [NHS prototype kit](https://prototype-kit.service-manual.nhs.uk/).

You must follow the [NHS prototype kit setup guide](https://prototype-kit.service-manual.nhs.uk/install) first.

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
/app/assets/sass/application.scss
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
  path.join(__dirname, 'node_modules/nhsuk-frontend/packages/components'),
  path.join(__dirname, 'node_modules/nhsapp-frontend/dist'),
  path.join(__dirname, 'docs/views/'),
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

Once you have installed NHS App frontend, all NHS App components should work in your prototype.

You will now have the latest version installed, later you can easily update to the latest NHS App frontend

To use the components, you should:

- find the component in NHS App design components
- copy the code from the example
- paste the code into the page in your prototype
