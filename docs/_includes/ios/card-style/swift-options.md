<!-- prettier-ignore-file -->

| Option              | Description                                                                                                 |
| ------------------- | ----------------------------------------------------------------------------------------------------------- |
| `backgroundColor`   | Optional. The card's background colour, white by default. Check your content has enough contrast against it |
| `borderColor`       | Optional. The border colour, `.nhsBorder` by default. Only visible when `borderWidth` is more than 0        |
| `borderWidth`       | Optional. The border width, 0 by default. Use 2 with a clear background for an outlined card                |
| `paddingVertical`   | Optional. The padding above and below the content, the standard NHS card padding by default                 |
| `paddingHorizontal` | Optional. The padding either side of the content, the standard NHS card padding by default                  |
| `alignment`         | Optional. How the content is aligned when it is narrower than the card, leading by default                  |

`nhsCardRowStyle()` has no options. Apply it after `nhsCardStyle()` when placing a card inside a `List`.
