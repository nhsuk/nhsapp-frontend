<!-- prettier-ignore-file -->

| Name                  | Type   | Required    | Description                                                                                                                       |
| --------------------- | ------ | ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| title                 | string | conditional | If `html` is set, this is not required. Title text for the card (renders as link, heading or paragraph depending on other args).  |
| html                  | string | conditional | If `title` is set, this is not required. Replaces the whole title block; ignores `title`, `href`, `headingLevel`, `titleClasses`. |
| href                  | string | conditional | URL for a clickable card. Used only when `html` not provided.                                                                     |
| hrefAriaLabel         | string | no          | Aria label for the link when `href` is provided (ignored if `html` replaces the block).                                           |
| headingLevel          | number | conditional | Heading level (2–6) when no `href` and no `html`. If omitted (and no link), a paragraph is used.                                  |
| titleClasses          | string | no          | Classes to add to the title element (ignored when `html` is used).                                                                |
| containerClasses      | string | no          | Classes to add to the `nhsapp-card__container` element.                                                                           |
| description           | string | conditional | Plain text description paragraph. Ignored if `descriptionHtml` is provided.                                                       |
| descriptionHtml       | string | conditional | HTML description. Ignored if `description` is provided.                                                                           |
| descriptionClasses    | string | no          | Classes to add to the description paragraph (when using `description`).                                                           |
| aboveContent.html     | string | no          | HTML inserted above the title area.                                                                                               |
| footer.html           | string | no          | HTML inserted in the footer area.                                                                                                 |
| img.src               | string | conditional | Image source URL. If present, media block is rendered.                                                                            |
| img.alt               | string | no          | Image alt text. Defaults to alt text null `alt=""`.                                                                               |
| prefixIcon            | string | no          | Icon name to render before the content.                                                                                           |
| badgeLarge.count      | number | conditional | Number shown in the large badge. Renders only when `count > 0`.                                                                   |
| badgeLarge.label      | string | yes         | Visually hidden text announced after the count.                                                                                   |
| badgeLarge.id         | string | no          | ID attribute for the badge element.                                                                                               |
| badgeLarge.classes    | string | no          | Classes to add to the badge.                                                                                                      |
| badgeLarge.attributes | object | no          | HTML attributes (for example `data-*` or `aria-*`) to add to the badge.                                                           |
| id                    | string | no          | The ID of the card.                                                                                                               |
| classes               | string | no          | Classes to add to the card.                                                                                                       |
| attributes            | object | no          | HTML attributes (for example `data-*` or `aria-*`) to add to the card.                                                            |
