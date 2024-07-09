---
layout: layouts/component.njk
title: Install NHS App frontend in your prototype
---

While most NHS App components are created to automatically work with the NHS prototype kit, some patterns have been created with specific NHS App styles.

This guide explains how to install NHS App frontend to support these styles. You will only have to follow these steps once for your prototype. You must use version 4.0.0 or later of the NHS prototype kit for these to work.

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

Once you have installed NHS App frontend, all NHS App components should work in your prototype.

You will now have the latest version installed, later you can easily update to the latest NHS App frontend

To use the components, you should:

- find the component in NHS App design components
- copy the code from the example
- paste the code into the page in your prototype
