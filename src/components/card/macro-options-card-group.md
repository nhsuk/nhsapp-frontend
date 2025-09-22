<!-- prettier-ignore-file -->

| Name                           | Type    | Required    | Description                                                                                                                                   |
| ------------------------------ | ------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| heading                        | string  | conditional | Text heading for the card group. Ignored if `html` is provided.                                                                               |
| html                           | string  | conditional | HTML that replaces the group heading block. If set, `heading` and `headingLevel` are ignored (include your own heading markup for semantics). |
| headingLevel                   | number  | conditional | Heading level (2–6) for `heading` when `html` not used. Defaults to 2.                                                                        |
| description                    | string  | conditional | Plain text description shown below the heading. Ignored if `descriptionHtml` is provided.                                                     |
| descriptionHtml                | string  | conditional | HTML description. If set, `description` is ignored.                                                                                           |
| stacked                        | boolean | no          | If true, adds `nhsapp-cards--stacked` to stack cards vertically.                                                                              |
| isListItem                     | boolean | no          | If true (default), wrapper is `<ul>` and each card a `<li>`. If false, wrapper is `<div>` and cards render as `<div>`.                        |
| id                             | string  | no          | ID of the card group.                                                                                                                         |
| classes                        | string  | no          | Classes to add to the group wrapper (`<ul>` or `<div>`).                                                                                      |
| attributes                     | object  | no          | HTML attributes (for example `data-*` or `aria-*`) to add to the card group.                                                                  |
| cards                          | array   | yes         | Array of card objects (see card macro options). Group `isListItem` overrides any per‑card `isListItem` value.                                 |
| cards[]title                   | string  | conditional | If `html` is set, this is not required. Title text for the card (renders as link, heading or paragraph depending on other args).              |
| cards[]html                    | string  | conditional | If `title` is set, this is not required. Replaces the whole title block; ignores `title`, `href`, `headingLevel`, `titleClasses`.             |
| cards[]href                    | string  | conditional | The value of the card link `href` attribute.                                                                                                  |
| cards[]hrefAriaLabel           | string  | no          | `aria-label` for the `title` when a `href` is provided. Ignored if `html` is provided.                                                        |
| cards[]headingLevel            | number  | conditional | Heading level (2–6) when no `href` and no `html`. If omitted (and no link), a paragraph is provided.                                          |
| cards[]titleClasses            | string  | no          | Classes to add to the title element. Ignored if `html` is set.                                                                                |
| cards[]containerClasses        | string  | no          | Classes to add to the `nhsapp-card__container` element.                                                                                       |
| cards[]description             | string  | conditional | Plain text description paragraph. Ignored if `descriptionHtml` is provided.                                                                   |
| cards[]descriptionHtml         | string  | conditional | HTML description. Ignored if `description` is provided.                                                                                       |
| cards[]descriptionClasses      | string  | no          | Classes to add to the description paragraph (when using `description`).                                                                       |
| cards[]aboveContent.html       | string  | no          | HTML inserted above the title area.                                                                                                           |
| cards[]footer.html             | string  | no          | HTML inserted in the footer area.                                                                                                             |
| cards[]img{}.src               | string  | conditional | Image source URL. If present, media block is rendered.                                                                                        |
| cards[]img{}.alt               | string  | no          | Image alt text. Defaults to alt text null `alt=""`.                                                                                           |
| cards[]prefixIcon              | string  | no          | Icon name to render before the content.                                                                                                       |
| cards[]badgeLarge{}.count      | number  | conditional | Number shown in the large badge. Renders only when `count > 0`.                                                                               |
| cards[]badgeLarge{}.label      | string  | yes         | Visually hidden text announced after the count.                                                                                               |
| cards[]badgeLarge{}.id         | string  | no          | ID attribute for the badge element.                                                                                                           |
| cards[]badgeLarge{}.classes    | string  | no          | Classes to add to the badge.                                                                                                                  |
| cards[]badgeLarge{}.attributes | object  | no          | HTML attributes (for example `data-*` or `aria-*`) to add to the badge.                                                                       |
| cards[]id                      | string  | no          | The ID of the card.                                                                                                                           |
| cards[]classes                 | string  | no          | Classes to add to the card.                                                                                                                   |
| cards[]attributes              | object  | no          | HTML attributes (for example `data-*` or `aria-*`) to add to the card.                                                                        |
