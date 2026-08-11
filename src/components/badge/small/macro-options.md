<!-- prettier-ignore-file -->

| Name             | Type    | Required    | Description                                                                                                                                 |
| ---------------- | ------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| text             | string  | conditional | If `html` is set, this is not required. Text to use within the badge component. If `html` is provided, the `text` argument will be ignored. |
| html             | string  | conditional | If `text` is set, this is not required. HTML to use within the badge component. If `html` is provided, the `text` argument will be ignored. |
| label            | string  | yes         | Visually hidden accessible text before the `text` (for example `New`).                                                                      |
| color            | string  | no          | Defaults to `red`. Built-in variants: `red`, `warm-yellow`, `aqua-green`. Adds `nhsapp-badge-small__indicator--{color}` class to indicator. |
| positionAbsolute | boolean | no          | When true adds the `nhsapp-badge-small--absolute` class so the indicator is absolutely positioned relative to the badge wrapper.            |
| id               | string  | no          | ID attribute for the badge.                                                                                                                 |
| classes          | string  | no          | Classes for the badge.                                                                                                                      |
| attributes       | object  | no          | HTML attributes for the badge (for example `data-*` or `aria-*`).                                                                           |
