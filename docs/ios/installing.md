---
layout: layouts/ios.njk
title: Installing
tags:
  - ios
---

The iOS design system for the NHS app is available as a [Swift package](https://developer.apple.com/documentation/xcode/swift-packages).

To use it, you’ll need to add the package as dependency to your prototype or production app.

## Creating a GitHub personal access token

At the moment, because the package is a private repository, you will need to create a GitHub personal access token to be able to access the code.

1. Go to [personal access tokens](https://github.com/settings/personal-access-tokens) on GitHub.
2. Click 'Generate new token'.
3. Give the token a name - this can be the name of your prototype or anything brief and descriptive.
4. Set 'resource owned' to NHSDigital.
5. Set the expiration to 366 days.
6. Select 'Only select repositories, then search for `nhsapp-design-system-ios` and select that.
7. Click 'Add permissions' and search for 'Contents' and select that.
8. Generate the token, and then copy it somewhere safe. You will need it in the next step.

In future this will no longer be required once the repository is public

## Adding the package

In Xcode, go to: File → Add Package Dependencies

Enter the repository URL (`https://github.com/NHSDigital/nhsapp-design-system-ios`). You will need to add your personal access token to view it.

For 'Dependency Rule', set it to 'Branch' and 'main'. (In future we will switch to versioned releases.) Select 'Add Package'.

In the dialog box, under 'Add to Target' change 'None' to your app name. Then select 'Add Package' again.

## Updating the package

Whenever there are changes made to the swift package, you will need to update the package within your project.

Do do this, go to File → Packages → Update to Latest Package Versions
