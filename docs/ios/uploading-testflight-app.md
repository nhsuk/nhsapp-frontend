---
layout: layouts/ios.njk
title: Uploading an app to TestFlight
tags:
  - ios
---

We use [TestFlight](https://testflight.apple.com/) to share test versions of the app before they're released. This page covers how to get a build onto TestFlight and invite people to test it.

If you've been invited to test an app, see [Installing an app from TestFlight](./installing-testflight-app.md) instead.

## Before you start

You'll need:

- a Mac with [Xcode](https://developer.apple.com/xcode/) installed
- the app's source code, opened in Xcode
- access to your team's [Apple Developer account](https://developer.apple.com/account) and [App Store Connect](https://appstoreconnect.apple.com/)
- a role of **Account Holder**, **Admin** or **App Manager**, depending on the step

Some steps need a developer. Registering identifiers, configuring signing and uploading builds are development tasks. If you don't have a Mac, Xcode or the right account role, ask a developer on your team to do those parts. This page explains the whole process so you know what's involved and what to ask for.

## Step 1: Get an Apple Developer account

To use TestFlight, your organisation needs to be enrolled in the [Apple Developer Program](https://developer.apple.com/programs/). Enrolment costs a yearly fee and can take a little time to approve.

Most organisations already have one. Before setting up a new account, check whether your team has an existing Apple Developer account you can be added to.

To be added to an existing account, ask whoever holds the **Account Holder** role to invite you under **Users and Access** in App Store Connect, with the role you need.

## Step 2: Register a bundle ID

A bundle ID (also called an App ID) uniquely identifies the app across Apple's systems. You register it once, before the app can be created or uploaded.

1. Sign in to your [Apple Developer account](https://developer.apple.com/account).
2. Select **Certificates, Identifiers & Profiles**.
3. Select **Identifiers**, then select the add button (**+**).
4. Select **App IDs**, then **Continue**.
5. Select **App** as the type, then **Continue**.
6. Enter a **Description** (an internal name, not shown to users).
7. Next to **Bundle ID**, select **Explicit** and enter an ID in reverse-domain format, for example `uk.nhs.exampleapp`.
8. Select **Register**.

Choose the bundle ID carefully. It must be unique, it must match the one used in Xcode, and Apple does not let you delete it later. You need an **Admin** or **Account Holder** role to register one.

## Step 3: Create the app in App Store Connect

Next, create the app record that TestFlight builds attach to.

1. Sign in to [App Store Connect](https://appstoreconnect.apple.com/) and select **Apps**.
2. Select the add button (**+**), then **New App**.
3. Select the platform (**iOS**).
4. Enter the app **Name** and **Primary Language**.
5. Select the **Bundle ID** you registered in step 2.
6. Enter an **SKU** (an internal reference of your choice) and set **User Access**.
7. Select **Create**.

The app now appears in App Store Connect, ready to receive builds.

## Step 4: Set the bundle ID in Xcode

The build you upload must use the same bundle ID.

1. Open the project in Xcode.
2. In the project navigator, select the project, then select the app under **Targets**.
3. Select the **Signing & Capabilities** tab.
4. Tick **Automatically manage signing**.
5. Select your **Team**.
6. Set the **Bundle Identifier** to match the one you registered.

Automatic signing lets Xcode handle the certificates and provisioning profiles needed to upload. If your team manages signing manually, that setup is a developer task.

## Step 5: Upload the app from Xcode

1. In the scheme selector at the top of Xcode, set the run destination to **Any iOS Device (arm64)**. You cannot archive against a simulator.
2. Select **Product**, then **Archive**. Xcode builds the app and opens the **Organizer** window when it's done.
3. In the Organizer, select your archive, then select **Distribute App**.
4. Select **App Store Connect**, then **Next**.
5. Select **Upload**, then follow the prompts and select **Upload**.

The build takes a few minutes to process in App Store Connect. It then appears under **Builds** in the **TestFlight** tab.

If the build shows **Missing Compliance**, answer the export compliance (encryption) question. Until this is answered, the build is held and testers cannot install it.

## Step 6: Add internal testers

Internal testers are people on your own App Store Connect team.

- You can have up to 100.
- Each must be an App Store Connect user with access to the app.
- They get new builds within minutes, with no review by Apple.
- Each tester can install on up to 30 devices.

Use internal testers for your own team: designers reviewing a flow, quick checks with colleagues, or stakeholder demos.

1. In the **TestFlight** tab, select the add button (**+**) next to **Internal Testing** in the sidebar.
2. Give the group a name, for example 'Design team'.
3. Add testers. Only people who are already App Store Connect users on your team will appear.
4. Add the build to the group, or set the group to receive new builds automatically.

Internal testers get an email invite and can install straight away.

## Step 7: Add external testers

External testers are anyone outside your team, such as clinicians, research participants or members of the public.

- You can have up to 10,000 per app.
- The first build of each new version must pass Apple's Beta App Review before external testers can install it. This usually takes about a day.
- You invite them by email or with a public link.

You must create an internal group before you can create an external one.

1. In the **TestFlight** tab, select the add button (**+**) next to **External Testing** in the sidebar.
2. Give the group a name, for example 'Clinical reviewers'.
3. Under **Builds**, select **Add Builds** and choose the build for this group.
4. Fill in **What to Test** so testers know what to focus on.
5. The build is sent to Apple for **Beta App Review**. You'll be told when it's approved.

Once the build is approved, invite people by email:

1. Select the group.
2. Next to **Testers**, select the add button (**+**).
3. Add testers by email address, or import a list from a CSV file.

Tell testers to install the TestFlight app **before** opening the invite email, and to use the device signed in to the Apple ID for that email address. The [Installing an app from TestFlight](./installing-testflight-app.md) page explains this for them.

## Step 8: Create a public link

A public link lets anyone install the beta without you needing their email address in advance. It's the easiest way to reach a wider or unknown audience.

The build must have passed Beta App Review first (see step 7).

1. In the **TestFlight** tab, select your external group.
2. Under **Tester Management**, select **Enable Public Link**.
3. The link appears, ready to copy and share.

You can:

- set a limit on how many people can join through the link, so an open beta doesn't use up your 10,000 slots in one go
- set criteria such as device, platform or operating system version, so only people who can test the build are able to join

Anyone with the link can join, so you have less control over who tests than with email invites. Use a cap and criteria to keep the group manageable.

## Managing builds and versions

- When you upload a new version, add it to your tester groups the same way. Internal testers get it within minutes. The first build of each new external version needs Beta App Review again, though later builds of the same version usually go out without a full review.
- Test versions expire 90 days after you upload them. After that the build is gone and can't be reactivated, so upload a fresh build to keep testers going.
- To free up a tester slot, remove someone from the group. The spot becomes available straight away.

## If invite emails don't arrive

TestFlight invite emails sometimes don't arrive. This is a long-standing Apple issue.

- Ask the tester to check their spam and promotions folders.
- Check the build has passed Beta App Review and has no missing compliance.
- If it still doesn't arrive, use a public link instead, which avoids email delivery altogether.