<!-- prettier-ignore-file -->

| Option              | Description                                                                                                                                                                |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`              | The user's name. Use `actingFor` instead for the name of someone the user has switched to                                                                                  |
| `actingFor`         | The name of the person the user is acting for. Use this instead of `name` and `nhsNumber`                                                                                  |
| `nhsNumber`         | The user's NHS number, formatted for display. Only used with `name`                                                                                                        |
| `size`              | Optional. `.regular` (the default) or `.compact`                                                                                                                           |
| `accessibilityHint` | Optional. A short description of what happens on tap, read out by VoiceOver after the card's text. Only set this if the text in the card does not already make this clear  |
| `action`            | The closure to run when the card is tapped                                                                                                                                 |