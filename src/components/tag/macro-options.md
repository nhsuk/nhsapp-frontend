
| Name       | Type   | Required    | Description                                                                                                                               |
| ---------- | ------ | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| id         | string | no          | The ID of the tag.                                                                                                                        |
| text       | string | conditional | If `html` is set, this is not required. Text to use within the tag component. If `html` is provided, the `text` argument will be ignored. |
| html       | string | conditional | If `text` is set, this is not required. HTML to use within the tag component. If `html` is provided, the `text` argument will be ignored. |
| classes    | string | no          | Classes to add to the tag.                                                                                                                |
| attributes | object | no          | HTML attributes (for example data attributes) to add to the tag.                                                                          |
