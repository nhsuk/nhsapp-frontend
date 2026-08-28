---
layout: layouts/get-started.njk
title: Installing NHS App frontend with npm
---

## Requirements

To use NHS App frontend with node package manager (npm) you must:

1. Install the long-term support (LTS) version of [Node.js](https://nodejs.org/en/), which includes npm.

2. Create a [package.json file](https://docs.npmjs.com/files/package.json) if you don’t already have one. You can create a default `package.json` file by running `npm init` from the root of your application.

## Installation

To install, run:

```sh
npm install --save nhsapp-frontend
```

If you want to use the NHS App frontend Nunjucks macros, install Nunjucks - the minimum version required is 3.0.0.

```sh
npm install nunjucks --save
```

After you have installed NHS App frontend the `nhsapp-frontend` package will appear in your `node_modules` folder.

## Importing styles

You need to import the NHS App frontend styles into the main Sass file in your project. You should place the below code before your own Sass rules (or Sass imports) if you want to override NHS App frontend with your own styles.

Configure Sass to resolve dependencies from `node_modules`, rather than adding the project working directory to `loadPaths`. For example, use `--load-path=node_modules` with the Sass CLI.

1. To import all components, add the below to your Sass file:

```scss
@import "nhsapp-frontend/dist/nhsapp";
```

2. To import an individual component (for example a button), add the below to your Sass file:

```scss
@import "nhsapp-frontend/dist/nhsapp/components/button";
```

## Importing assets

The NHS App Frontend ships with all SVG icons. They can be found in `node_modules/nhsapp-frontend/assets/icons`.
