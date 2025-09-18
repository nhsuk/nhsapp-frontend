<!-- prettier-ignore-file -->

| Name                | Type        | Required    | Description                                                                                                                      |
| ------------------- | ----------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------- |
| headingLevel        | number      | no          | Heading level for each item heading. Defaults to `3` (`<h3>`). Must be between 2 and 6.                                          |
| items               | array<Item> | yes         | Array of timeline item objects. Falsy entries are ignored.                                                                       |
| items[].headingText | string      | yes         | Text for the item heading.                                                                                                       |
| items[].html        | string      | conditional | If `text` is set, this is not required. Raw HTML description inserted directly (unsafe if untrusted). If set, `text` is ignored. |
| items[].text        | string      | conditional | If `html` is set, this is not required. Plain text description wrapped in a paragraph element.                                   |
| items[].active      | boolean     | no          | Renders a large blue dot and bold heading styling for the current (active) item.                                                 |
| items[].isPastItem  | boolean     | no          | Marks the item as past: large blue dot and adds modifier class `nhsapp-timeline__item--past`.                                    |
| id                  | string      | no          | The ID of the timeline.                                                                                                          |
| classes             | string      | no          | Classes to add to the timeline.                                                                                                  |
| attributes          | object      | no          | HTML attributes (for example data attributes) to add to the timeline.                                                            |
