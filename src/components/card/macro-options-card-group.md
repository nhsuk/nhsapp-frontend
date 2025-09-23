<!-- prettier-ignore-file -->

| Name                           | Type    | Required    | Description                                                                                                     |
| ------------------------------ | ------- | ----------- | --------------------------------------------------------------------------------------------------------------- |
| heading                        | string  | conditional | Text heading for the card group.                                                                                |
| headingLevel                   | number  | conditional | Heading level (2–6) for the group heading. Defaults to 2 when not set.                                          |
| description                    | string  | conditional | Plain text shown under the group heading. Ignored if `descriptionHtml` is set.                                  |
| descriptionHtml                | string  | conditional | HTML version of the description. Overrides `description`.                                                       |
| stacked                        | boolean | no          | Adds `nhsapp-cards--stacked` class to card group.                                                               |
| isListItem                     | boolean | no          | If true (default) wrapper is `<ul>` with each card as `<li>`. If false uses `<div>` wrappers.                   |
| id                             | string  | no          | ID for the card group.                                                                                          |
| classes                        | string  | no          | Classes for the card group.                                                                                     |
| attributes                     | object  | no          | HTML attributes for the card group (data-_ or aria-_).                                                          |
| cards                          | array   | yes         | Array of card objects.                                                                                          |
| cards[]title                   | string  | yes         | The card title text. Renders as: link (if `href`), heading (if `headingLevel` and no `href`), else a paragraph. |
| cards[]href                    | string  | conditional | Makes the `title` a link when provided.                                                                         |
| cards[]hrefAriaLabel           | string  | no          | `aria-label` for the title link. Use only if the visible text is not clear.                                     |
| cards[]headingLevel            | number  | conditional | Heading level (2–6) used only when there is no `href`. If not set (and no `href`) the title is a paragraph.     |
| cards[]titleClasses            | string  | no          | Classes for the title element.                                                                                  |
| cards[]containerClasses        | string  | no          | Classes for the inner container.                                                                                |
| cards[]description             | string  | conditional | Plain text description below the title. Ignored if `descriptionHtml` is given.                                  |
| cards[]descriptionHtml         | string  | conditional | HTML description (allows markup). Overrides `description`.                                                      |
| cards[]descriptionClasses      | string  | no          | Classes for the `description`.                                                                                  |
| cards[]aboveContent.html       | string  | no          | HTML shown above the title (for example a tag).                                                                 |
| cards[]footer.html             | string  | no          | HTML shown in the footer.                                                                                       |
| cards[]img{}.src               | string  | conditional | Image URL. Adds an image section when present.                                                                  |
| cards[]img{}.alt               | string  | no          | Image alt text. Leave empty only if purely decorative.                                                          |
| cards[]prefixIcon              | string  | no          | Icon shown before the content (for example messages icon).                                                      |
| cards[]badgeLarge{}.count      | number  | conditional | Number for the large badge. Badge appears only when `count > 0`.                                                |
| cards[]badgeLarge{}.label      | string  | yes         | Visually hidden text read after the number.                                                                     |
| cards[]badgeLarge{}.id         | string  | no          | ID attribute for the badge.                                                                                     |
| cards[]badgeLarge{}.classes    | string  | no          | Classes for the badge.                                                                                          |
| cards[]badgeLarge{}.attributes | object  | no          | HTML attributes for the badge (e.g. `data-*`, `aria-*`).                                                        |
| cards[]id                      | string  | no          | ID for the card.                                                                                                |
| cards[]classes                 | string  | no          | Classes for the card.                                                                                           |
| cards[]attributes              | object  | no          | HTML attributes for the card (e.g. `data-*`, `aria-*`).                                                         |
