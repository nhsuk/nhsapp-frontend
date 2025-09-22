<!-- prettier-ignore-file -->

| Name       | Type   | Required | Description                                                                                                                      |
| ---------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| count      | number | yes      | Numeric value to display. Values greater than 9 are shown as `9+`. Nothing is rendered if `count` is falsy (0, null, undefined). |
| label      | string | yes      | Visually hidden accessible text that follows the count (for example `new messages`).                                             |
| id         | string | no       | The ID of the badge.                                                                                                             |
| classes    | string | no       | Classes to add to the badge.                                                                                                     |
| attributes | object | no       | HTML attributes (for example `data-*` or `aria-*`) to add to the badge.                                                          |
