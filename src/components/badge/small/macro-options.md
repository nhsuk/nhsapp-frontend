<!-- prettier-ignore-file -->

| Name       | Type   | Required    | Description                                                                                                                                 |
| ---------- | ------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| text       | string | conditional | If `html` is set, this is not required. Text to use within the badge component. If `html` is provided, the `text` argument will be ignored. |
| html       | string | conditional | If `text` is set, this is not required. HTML to use within the badge component. If `html` is provided, the `text` argument will be ignored. |
| label      | string | yes         | Visually hidden accessible text that follows the count (for example `new messages`).                                                        |
| id         | string | no          | The ID of the badge.                                                                                                                        |
| classes    | string | no          | Classes to add to the badge.                                                                                                                |
| attributes | object | no          | HTML attributes (for example data attributes) to add to the badge.                                                                          |
