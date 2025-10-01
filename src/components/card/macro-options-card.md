<!-- prettier-ignore-file -->

| Name                    | Type   | Required    | Description                                                                                                     |
| ----------------------- | ------ | ----------- | --------------------------------------------------------------------------------------------------------------- |
| title                   | string | yes         | The card title text. Renders as: link (if `href`), heading (if `headingLevel` and no `href`), else a paragraph. |
| href                    | string | conditional | Makes the `title` a link when provided.                                                                         |
| linkAriaLabel           | string | no          | `aria-label` for the title link. Use only if the visible text is not clear.                                     |
| headingLevel            | number | conditional | Heading level (2–6) used only when there is no `href`. If not set (and no `href`) the title is a paragraph.     |
| titleClasses            | string | no          | Classes for the title element.                                                                                  |
| containerClasses        | string | no          | Classes for the inner container.                                                                                |
| description             | string | conditional | Plain text description below the title. Ignored if `descriptionHtml` is given.                                  |
| descriptionHtml         | string | conditional | HTML description (allows markup). Overrides `description`.                                                      |
| descriptionClasses      | string | no          | Classes for the `description`.                                                                                  |
| aboveContent.html       | string | no          | HTML shown above the title (for example a tag).                                                                 |
| footer.html             | string | no          | HTML shown in the footer.                                                                                       |
| img{}.src               | string | conditional | Image URL. Adds an image section when present.                                                                  |
| img{}.alt               | string | no          | Image alt text. Leave empty only if purely decorative.                                                          |
| badgeLarge{}.count      | number | conditional | Number for the large badge. Badge appears only when `count > 0`.                                                |
| badgeLarge{}.label      | string | yes         | Visually hidden text read after the number.                                                                     |
| badgeLarge{}.id         | string | no          | ID attribute for the badge.                                                                                     |
| badgeLarge{}.classes    | string | no          | Classes for the badge.                                                                                          |
| badgeLarge{}.attributes | object | no          | HTML attributes for the badge (e.g. `data-*`, `aria-*`).                                                        |
| id                      | string | no          | ID for the card.                                                                                                |
| classes                 | string | no          | Classes for the card.                                                                                           |
| attributes              | object | no          | HTML attributes for the card (e.g. `data-*`, `aria-*`).                                                         |
