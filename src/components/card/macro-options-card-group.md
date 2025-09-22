<!-- prettier-ignore-file -->

| Name                          | Type        | Required    | Description                                                                                                                                   |
| ----------------------------- | ----------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| heading                       | string      | conditional | Text heading for the card group. Ignored if `html` is provided.                                                                               |
| html                          | string      | conditional | HTML that replaces the group heading block. If set, `heading` and `headingLevel` are ignored (include your own heading markup for semantics). |
| headingLevel                  | number      | conditional | Heading level (2–6) for `heading` when `html` not used. Defaults to 2.                                                                        |
| description                   | string      | conditional | Plain text description shown below the heading. Ignored if `descriptionHtml` is provided.                                                     |
| descriptionHtml               | string      | conditional | HTML description. If set, `description` is ignored.                                                                                           |
| stacked                       | boolean     | no          | If true, adds `nhsapp-cards--stacked` to stack cards vertically.                                                                              |
| isListItem                    | boolean     | no          | If true (default), wrapper is `<ul>` and each card a `<li>`. If false, wrapper is `<div>` and cards render as `<div>`.                        |
| id                            | string      | no          | ID of the card group.                                                                                                                         |
| classes                       | string      | no          | Classes to add to the group wrapper (`<ul>` or `<div>`).                                                                                      |
| attributes                    | object      | no          | HTML attributes (for example `data-*` or `aria-*`) to add to the card group.                                                                  |
| cards                         | array<Card> | yes         | Array of card objects (see card macro options). Group `isListItem` overrides any per‑card `isListItem` value.                                 |
| cards[].title                 | string      | conditional | If `cards[].html` is set, this is not required. Title text (renders as link, heading or paragraph).                                           |
| cards[].html                  | string      | conditional | If `cards[].title` is set, this is not required. Replaces the entire title block.                                                             |
| cards[].href                  | string      | conditional | URL for a clickable card (ignored if `cards[].html` provided).                                                                                |
| cards[].hrefAriaLabel         | string      | no          | Aria label for the link when `cards[].href` is provided (ignored if `cards[].html` provided).                                                 |
| cards[].headingLevel          | number      | conditional | Heading level (2–6) when no `cards[].href` and no `cards[].html`.                                                                             |
| cards[].titleClasses          | string      | no          | Classes added to the title element (ignored when `cards[].html` used).                                                                        |
| cards[].containerClasses      | string      | no          | Classes added to `nhsapp-card__container`.                                                                                                    |
| cards[].description           | string      | conditional | Plain text description. Ignored if `cards[].descriptionHtml` provided.                                                                        |
| cards[].descriptionHtml       | string      | conditional | HTML description. Ignored if `cards[].description` provided.                                                                                  |
| cards[].descriptionClasses    | string      | no          | Classes added to the description paragraph (when using `cards[].description`).                                                                |
| cards[].aboveContent.html     | string      | no          | HTML inserted above the card title area.                                                                                                      |
| cards[].footer.html           | string      | no          | HTML inserted in the card footer area.                                                                                                        |
| cards[].img.src               | string      | conditional | Image source URL; renders media block if present.                                                                                             |
| cards[].img.alt               | string      | no          | Image alt text. Defaults to alt text null `alt=""`.                                                                                           |
| cards[].prefixIcon            | string      | no          | Icon name rendered before the card content.                                                                                                   |
| cards[].badgeLarge.count      | number      | conditional | Number shown in the large badge (renders only when > 0).                                                                                      |
| cards[].badgeLarge.label      | string      | yes         | Visually hidden text announced after the count.                                                                                               |
| cards[].badgeLarge.id         | string      | no          | ID for the badge element.                                                                                                                     |
| cards[].badgeLarge.classes    | string      | no          | Classes added to the badge.                                                                                                                   |
| cards[].badgeLarge.attributes | object      | no          | HTML attributes (for example `data-*` or `aria-*`) added to the badge.                                                                        |
| cards[].id                    | string      | no          | ID of the card.                                                                                                                               |
| cards[].classes               | string      | no          | Classes added to the card wrapper.                                                                                                            |
| cards[].attributes            | object      | no          | HTML attributes (for example `data-*` or `aria-*`) added to the card.                                                                         |
