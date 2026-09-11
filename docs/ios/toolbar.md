---
layout: layouts/ios.njk
title: Toolbar
tags:
  - iosComponents
---

Toolbars are a standard iOS component - see [Toolbars in the Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/toolbars).

<img src="/assets/images/ios/toolbar.png" width="320" alt="Screenshot showing several toolbar items: a back button, a bin button, and a flag button">

The NHS design system for iOS adds some custom toolbar items which make it easier to use the NHS font, and to support some common actions within the NHS App.

## When to use

Use toolbars to give users the ability to take actions relevant to the current screen.

These can include:

- going back to the previous screen
- closing the current screen
- filtering a list view
- flagging or deleting an item

Only include the most commonly used actions, and avoid placing too many actions in a toolbar.

## When not to use

Do not use toolbar items for actions that are infrequent and significant, such as booking an appointment or referring yourself for care. Use a button within the main content area for these instead.

## How to use

The design system contains some specific toolbar items. Use these if the context applies:

- [Back button](#back-button)
- [Close button](#close-button)
- [Done button](#done-button)
- [Filter button](#filter-button)
- [Flag button](#flag-button)
- [Messages button](#messages-button)
- [NHS logo item](#nhs-logo-item)

If you need to add a different type of toolbar action, use one of these generic toolbar buttons instead:

- [Icon toolbar button](#icon-toolbar-button)
- [Text toolbar button](#text-toolbar-button)

### Back button

<img src="/assets/images/ios/back-button.png" width="320" alt="Screenshot showing a circular button on the left of a mobile screen with a left arrow within it">

The back button will appear in the toolbar at the top left automatically when using the `NavigationStack`. You do not need to add this.

### Close button

<img src="/assets/images/ios/close-button.png" width="320" alt="Screenshot showing a circular button on the right of a mobile screen with an X icon within it">

The close button should be added to most screens presented as a modal, allowing the user to return to the screen beneath it. Do not use it when the user has reached the end of a journey - use the 'done' button instead.

{% from "details/macro.njk" import details %}
{% call details({ summary: "Swift options" }) %}

| Option              | Description                                                                             |
| ------------------- | --------------------------------------------------------------------------------------- |
| `accessibilityHint` | Optional. A hint for VoiceOver users about what will happen when the button is pressed. |
| `action`            | The closure called when the button is pressed.                                          |

{% endcall %}

```swift { .nhsuk-code--button }
struct BookAppointmentView: View {
    var body: some View {
        NavigationStack {
            ScrollView {
                // content
            }
            .toolbar {
                CloseToolbarItem(accessibilityHint: "Returns to the prescriptions screen") {
                    // close the view
                }
            }
        }
    }
}
```

### Done button

<img src="/assets/images/ios/done-button.png" width="320" alt="Screenshot showing a green button on the right of a mobile screen with the word 'Done' inside it in white text">

The 'done' button is added to any screens presented as modal, when the user has reached the end of a journey and has completed a task. For example, after booking an appointment.

{% call details({ summary: "Swift options" }) %}

| Option   | Description                                    |
| -------- | ---------------------------------------------- |
| `action` | The closure called when the button is pressed. |

{% endcall %}

```swift { .nhsuk-code--button }
struct BookAppointmentConfirmationView: View {
    var body: some View {
        NavigationStack {
            ScrollView {
                // content
            }
            .toolbar {
                DoneToolbarItem() {
                    // close view
                }
            }
        }
    }
}
```

### Filter button

<img src="/assets/images/ios/filter-button.png" width="320" alt="Screenshot showing a button on the right of a mobile screen with first an icon showing 3 stacked horizontal lines of descending width, and then the word 'Filter' in black text">

The filter button can be added to list views, enabling a user to bring up options allowing the list to be filtered, or to change existing filters.

It is presented with both a filter icon and the word 'Filter', as research shows that not all users understand the icon. When filters are active, the button changes to using blue, bold text, and the number of active filters is shown in brackets.

{% call details({ summary: "Swift options" }) %}

| Option              | Description                                    |
| ------------------- | ---------------------------------------------- |
| `activeFilterCount` | The number of filters currently being applied. |
| `action`            | The closure called when the button is pressed. |

{% endcall %}

```swift { .nhsuk-code--button }
struct MessagesView: View {
    var body: some View {
        List {
            // content
        }
        .toolbar {
            FilterToolbarItem(activeFilterCount: 0) {
                // open filter options
            }
        }
    }
}
```

### Flag button

<img src="/assets/images/ios/flag-button.png" width="320" alt="Screenshot showing a button on the right of a mobile screen with an icon of a flag">

The flag button can be used on detail views for items which the user can flag, to mark the item.

{% call details({ summary: "Swift options" }) %}

| Option        | Description                                          |
| ------------- | ---------------------------------------------------- |
| `flagged`     | Whether the item is currently flagged.               |
| `labelSuffix` | A suffix appended to "Flag" in the accessible label. |
| `action`      | The closure called when the button is pressed.       |

{% endcall %}

```swift { .nhsuk-code--button }
struct MessageView: View {
    var body: some View {
        ScrollView {
            // content
        }
        .toolbar {
            FlagToolbarItem(
                flagged: false,
                labelSuffix: " this message"
            ) {
                // toggle flag status
            }
        }
    }
}
```

### Messages button

<img src="/assets/images/ios/messages-button.png" width="320" alt="Screenshot showing a button on the right of a mobile screen with an envelope icon and a red circle overlapping the top right of the button containing the number 3">

The messages button is used on the home screen only, and serves as both an indicator of any unread messages, and a way to navigate to the messages section.

{% call details({ summary: "Swift options" }) %}

| Option        | Description                                    |
| ------------- | ---------------------------------------------- |
| `unreadCount` | The number of unread messages.                 |
| `action`      | The closure called when the button is pressed. |

{% endcall %}

```swift { .nhsuk-code--button }
struct HomeView: View {
    var body: some View {
        ScrollView {
            // content
        }
        .toolbar {
            MessagesToolbarItem(unreadCount: 3) {
                // navigate to messages inbox
            }
        }
    }
}
```

### NHS logo item

<img src="/assets/images/ios/nhs-logo-item.png" width="320" alt="Screenshot showing a blue NHS logo on the left of a mobile screen">

The NHS logo item is used on the home screen only, and appears in the top left position. It is not button, and does not do anything when tapped. It is there to provide the reassurance of the NHS identity.

Use it by adding a `NHSLogoToolbarItem`. There are no additional options.

```swift { .nhsuk-code--button }
struct HomeView: View {
    var body: some View {
        NavigationStack {
            ScrollView {
                // content
            }
            .toolbar {
                NHSLogoToolbarItem()
            }
        }
    }
}
```

### Icon toolbar button

<img src="/assets/images/ios/icon-toolbar-item.png" width="320" alt="Screenshot showing a circular button on the right of a mobile screen containing a bin icon">

Use an icon toolbar button when you are confident through research that most users can understand the icon.

{% call details({ summary: "Swift options" }) %}

| Option              | Description                                                                            |
| ------------------- | -------------------------------------------------------------------------------------- |
| `systemImage`       | The name of the icon from SF Symbols.                                                  |
| `label`             | The accessible name for the button. Should be short and usually a verb.                |
| `accessibilityHint` | Optional. A hint for VoiceOver users about what will happen after pressing the button. |
| `action`            | The closure called when the button is pressed.                                         |

{% endcall %}

```swift { .nhsuk-code--button }
struct MessageView: View {
    var body: some View {
        ScrollView {
            // content
        }
        .toolbar {
            IconToolbarItem(
                systemImage: "trash",
                label: "Remove",
                accessibilityHint: "Removes this message from your inbox"
            ) {
                // remove action
            }
        }
    }
}
```

### Text toolbar button

<img src="/assets/images/ios/text-toolbar-item.png" width="320" alt="Screenshot showing a circular button on the right of a mobile screen containing the word 'Restore' in black text">

If you need to add a toolbar button which cannot be reliably identified using an icon, use a text toolbar button instead. This will use the NHS font.

{% call details({ summary: "Swift options" }) %}

| Option               | Description                                                                            |
| -------------------- | -------------------------------------------------------------------------------------- |
| `label`              | The text that appears in the button. Should be short and usually a verb.               |
| `accessibilityLabel` | Optional. A slightly longer alternative label for VoiceOver users.                     |
| `accessibilityHint`  | Optional. A hint for VoiceOver users about what will happen after pressing the button. |
| `action`             | The closure called when the button is pressed.                                         |

{% endcall %}

```swift { .nhsuk-code--button }
struct RemovedMessageView: View {
    var body: some View {
        List {
            // content
        }
        .toolbar {
            TextToolbarItem(
                label: "Restore",
                accessibilityHint: "Moves this message back to your inbox"
            ) {
                // restore action
            }
        }
    }
}
```

## Accessibility

This component supports Dynamic Type, Dark Mode and VoiceOver.

Where the button is an icon, the accessible label must be set for VoiceOver users. The specific buttons do this automatically, but the generic ones require this to be set.

The `accessibilityHint` is optional and can be used to give VoiceOver users an indication of what will happen after pressing the button, where this is otherwise not clear.

## Research

These toolbar items are not yet being used by the live NHS App, but several rounds of research have been done on them.
