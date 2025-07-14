---
layout: layouts/nhsapp-prototype.njk
title: Publish prototypes online with Heroku
order: 5
tags:
  - nhsappPrototype
help: no
---

You can host your NHS App prototype using Heroku and connect it directly to your GitHub repository.

1. Go to [heroku.com](https://www.heroku.com/) and sign up for a free account using your `nhs.net` email.
2. See the [Access Heroku guidance (on SharePoint)]() to join the **NHS-Heroku**.
3. Log in to [dashboard.heroku.com](https://dashboard.heroku.com).
4. Select **New > Create new app**, choose a name `nhsapp-prototype-[project-name]`, and select a region **Europe**.
5. In the **Deploy** tab of your app, choose **GitHub** as your deployment method.
6. Under **Manual deploy**, choose a branch (usually `main`) and click **Deploy Branch**.
7. Enable **Automatic deploys** to publish changes every time you push to GitHub.
8. Go to **Settings > Config Vars** in Heroku to [set a password](https://prototype-kit.service-manual.nhs.uk/how-tos/publish-your-prototype-online).

<hr class="nhsuk-section-break nhsuk-section-break--xl nhsuk-section-break--visible app-section-break--width-4">

## Get support

For troubleshooting or support, you can ask the design Slack community at:

- [#help-with-heroku](https://nhsdigitalcorporate.enterprise.slack.com/archives/C089RQPDZ9V)
- [#nhsapp-design-system](https://nhsdigitalcorporate.enterprise.slack.com/archives/C06GY1LRP19)

<hr class="nhsuk-section-break nhsuk-section-break--xl nhsuk-section-break--visible app-section-break--width-4">
