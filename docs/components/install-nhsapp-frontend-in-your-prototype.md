---
layout: layouts/component.njk
title: Install NHS App Frontend in your prototype
---

While most NHS App patterns are created to automatically work with the NHS Prototype Kit, some patterns have been created with specific NHS App styles.

This guide explains how to install NHS App Frontend to support these styles. You will only have to follow these steps once for your prototype. You must use version 9.0.0 or later of the NHS Prototype Kit for these to work.

## Step 1

Using GitBash or Terminal, navigate to where your prototype is. For example

`cd ~/Documents/projects/project-prototype`

If your prototype is already running, to stop it use

`Ctrl + C`

## Step 2

Enter

`npm install --save nhsapp-frontend`

Once you have installed NHS App Frontend, All NHS App patterns should work in your prototype.

You will now have the latest version installed, later you can easily update to the latest NHS App Frontend

To use the patterns, you should:

- find the pattern in NHS App Design Patterns
- copy the code from the example
- paste the code into the page in your prototype
