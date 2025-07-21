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
2. See the [Access Heroku guidance (on SharePoint)](https://nhs.sharepoint.com/:u:/r/sites/X26_URPG/SitePages/tools/Heroku-cloud-platform.aspx?csf=1&web=1&e=geWbJC) to join the **nhs-heroku**.
3. Log in to [dashboard.heroku.com](https://dashboard.heroku.com).
4. Select **nhs-heroku > nhs-app > New > Create new app**, choose a name `nhsapp-prototype-[project-name]`, and select region **Europe**.
5. In the **Deploy** tab of your app, choose **GitHub** as your deployment method. You'll be prompted to log in to GitHub: make sure you use your `hscic.gov.uk` email address to do this.
6. Search and connect to your GitHub repo.
7. Choose a branch (usually `main`).
8. Enable **Automatic deploys** to publish changes every time you push to GitHub.
9. Select **Deploy Branch**.
10. In **Settings > Config Vars > Reveal Config Vars** you need to set a password - [see NHS prototype kit guidance for setting a password](https://prototype-kit.service-manual.nhs.uk/how-tos/publish-your-prototype-online).
11. Select **Open app** to view your prototype.

<hr class="nhsuk-section-break nhsuk-section-break--xl nhsuk-section-break--visible app-section-break--width-4">

## Get support

For troubleshooting or support, you can ask the design Slack community at:

- [#help-with-heroku](https://nhsdigitalcorporate.enterprise.slack.com/archives/C089RQPDZ9V)
- [#nhsapp-design-system](https://nhsdigitalcorporate.enterprise.slack.com/archives/C06GY1LRP19)

<hr class="nhsuk-section-break nhsuk-section-break--xl nhsuk-section-break--visible app-section-break--width-4">
