<!-- prettier-ignore-file -->

| Name                 | Type             | Required    | Description                                                                                                                          |
| -------------------- | ---------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| headingLevel         | number           | no          | Heading level for each item heading. Defaults to `3` (`<h3>`). Must be between 2 and 6.                                              |
| items                | array            | yes         | Array of timeline item objects. Falsy entries are ignored.                                                                           |
| items[].heading      | string or object | yes         | Heading for the item. Pass a string for plain text, or an object with `text` or `html`.                                              |
| items[].heading.text | string           | conditional | If `heading.html` is set, this is not required. Text for the item heading. If `heading.html` is provided, `heading.text` is ignored. |
| items[].heading.html | string           | conditional | If `heading.text` is set, this is not required. HTML for the item heading. If set, `heading.text` is ignored.                        |
| items[].headingText  | string           | no          | Deprecated. Use `heading.text` instead. Ignored if `heading` is set.                                                                 |
| items[].html         | string           | conditional | If `text` is set, this is not required. Raw HTML description inserted directly. If set, `text` is ignored.                           |
| items[].text         | string           | conditional | If `html` is set, this is not required. Plain text description wrapped in a paragraph element.                                       |
| items[].active       | boolean          | no          | Renders a large blue dot and bold heading styling for the current (active) item.                                                     |
| items[].isPastItem   | boolean          | no          | Marks the item as past: large blue dot and adds modifier class `nhsapp-timeline__item--past`.                                        |
| id                   | string           | no          | The ID of the timeline.                                                                                                              |
| classes              | string           | no          | Classes to add to the timeline.                                                                                                      |
| attributes           | object           | no          | HTML attributes for the timeline (e.g. `data-*`, `aria-*`).                                                                          |
