# Shared UI components

Available from **SDK 0.4.0** through `@hivedevelopment/nectar/ui`. These framework-independent DOM controls are optional: you can also use the shared CSS classes with your own framework.

The SDK builder copies the stylesheet into `dist/nectar-ui.css` and links it before your `public/style.css` in every generated HTML entry. No CDN, runtime style injection or sandbox change is needed. With a custom bundler, copy the exported `@hivedevelopment/nectar/ui.css` file into your assets and reference it through an external stylesheet link.

## Install and build

Once 0.4.0 is published, update an existing extension:

```bash
npm install @hivedevelopment/nectar@0.4.0
npm run build
npm run validate
npm run pack
```

Until publication, use the supplied SDK checkout or npm tarball. The UI module is included in the same npm package, not a separate dependency. Existing bridge calls remain compatible; no new Panel or Worker capability is required.

## Buttons and fields

```ts
import { button, input, select, switchControl } from '@hivedevelopment/nectar/ui';

const name = input({ label: 'Display name', description: 'Shown to other users.', required: true });
const layout = select({
    label: 'Layout',
    options: [{ value: 'compact', label: 'Compact' }, { value: 'full', label: 'Full' }],
    onChange: value => console.log(value),
});
const enabled = switchControl({ label: 'Enable notifications', checked: true });
const save = button('Save', { onClick: () => {
    if (!name.control.reportValidity()) return;
    // Call an authorized SDK capability and handle its errors here.
} });

container.append(name.element, layout.element, enabled.element, save);
```

All labels and messages are caller-supplied strings. Use your extension's translator to supply the current language. Strings are rendered as text, never HTML.

| Helper | Return value | Main options |
| --- | --- | --- |
| `button(text, options?)` | `HTMLButtonElement` | `variant`: `primary`, `secondary`, `danger`; `disabled`; `onClick`. |
| `input(options)` | `{ element, control }` | `label`, `description`, `type`, `value`, `required`, `placeholder`, `onInput`. |
| `field(control, label, description?)` | Field wrapper | Associate a visible label and optional help text with an existing control. |
| `select(options)` | `{ element, control, trigger, refresh, dispose }` | `label`, `{ value, label, disabled? }[]` options, `required`, `onChange`. |
| `switchControl(options)` | `{ element, control }` | `label`, `description`, `checked`, `disabled`, `onChange`. |

`input` types are `text`, `password`, `number` and `email`. Its `control` is a native input: set `min`, `max`, `pattern`, `maxLength` or `disabled` directly when needed. Button helpers always use `type="button"`; native form submission is blocked by Nectar's sandbox. Validate inputs explicitly before calling the SDK.

Async button handlers should handle their own errors and disabled state. UI controls do not make network calls or bypass host authorization.

## Enhance an existing select

```ts
import { enhanceSelect } from '@hivedevelopment/nectar/ui';

const dropdown = enhanceSelect(nativeSelect);
nativeSelect.value = 'compact';
dropdown.refresh();

// Before removing or replacing the component:
dropdown.dispose();
```

The native select remains the source of truth. Changes emit `input` and `change`; options and disabled attributes are observed automatically. Call `refresh()` after programmatic `.value` or `.selectedIndex` changes, because those assignments do not emit DOM events.

The dropdown supports arrows, Home/End, Enter/Space selection and Escape. Its menu expands in normal flow so it cannot be clipped by an iframe edge or cover later fields. Single-value selects are supported; multiple/size-list selects and grouped visual headings are not provided. Disabled options and groups are respected.

Call `dispose()` when replacing the component. It disconnects observation, removes listeners and restores the native select. Labels and optional help text remain associated with the trigger. Do not enhance the same select twice.

## Notices, loading and empty states

```ts
import { notice, loading, emptyState } from '@hivedevelopment/nectar/ui';

status.replaceChildren(loading('Loading content…'));
status.replaceChildren(notice('Changes saved.', 'success'));
status.replaceChildren(notice('Could not save changes.', 'danger'));
results.replaceChildren(emptyState('No results', 'Try another search.'));
```

Notice tones are `info`, `success`, `warning` and `danger`. Danger notices use `role="alert"`; other notices and loading states use `role="status"`. Empty states optionally accept an action button as their third argument. Loading animation respects reduced-motion preferences.

## Tabs

```ts
import { tabs } from '@hivedevelopment/nectar/ui';

const view = tabs([
    { id: 'general', label: 'General', content: generalElement },
    { id: 'advanced', label: 'Advanced', content: advancedElement },
], 'Extension settings');
container.append(view.element);
view.select('advanced');
```

The helper supplies unique panel IDs, tab/panel associations, roving focus and Left/Right/Home/End keyboard navigation. IDs must be unique within the supplied list. Content elements are moved into the tabs; use distinct elements. These are local UI tabs, not Panel routes.

## Confirmation dialogs

```ts
import { confirmDialog } from '@hivedevelopment/nectar/ui';

const approved = await confirmDialog({
    title: 'Remove item?',
    description: 'This removes the selected item.',
    confirmText: 'Remove',
    cancelText: 'Cancel',
    danger: true,
});
if (!approved) return;
```

For an asynchronous action, pass an `onConfirm` callback:

```ts
await confirmDialog({
    title: 'Apply changes?',
    description: 'Apply the selected configuration.',
    confirmText: 'Apply',
    cancelText: 'Cancel',
    onConfirm: async () => applyChanges(),
    errorMessage: 'Could not apply changes. Please try again.',
});
```

The dialog disables its actions while the callback runs and prevents repeated submissions. Callback failure keeps the dialog open with an error, permitting retry or cancellation. The promise resolves `true` only after confirmation succeeds; cancel/Escape resolves `false`. Escape is blocked during the action. A second simultaneous dialog is rejected. Leaving the frame resolves an open dialog as cancelled but cannot undo an action already sent.

These dialogs use native `<dialog>` with focus containment and focus restoration. They operate **inside the extension iframe**, not across the whole Panel viewport. They do not invoke browser `window.confirm`, require `allow-modals`, or replace the Panel's Vue `ConfirmationModal`. SDK UI controls cannot access the parent's DOM. Modern browsers with native dialog support are required.

All visible action labels are explicit to support translation. An optional `errorMessage` gives failures a localized message; otherwise the thrown Error's text is shown safely as text.

## Theme, layout and language

Continue to call `applyTheme(ui)` after `nectar.ready` and on each `nectar.onUI` update. Controls read the same `--hp-*` tokens for surfaces, foregrounds, borders, accents and radii; primary buttons use the readable `--nectar-accent-foreground` generated by `applyTheme`.

Use `.nectar-page` on the root for typography and a 6px inset that leaves room for focus rings. `.nectar-stack`, `.nectar-grid` and `.nectar-wide` provide simple layouts; grids stack on narrow screens. The stylesheet scopes its control rules to `nectar-*` classes and does not globally restyle every button or input. It adds no full-page card.

Status colours have fallback values and can be customized with `--hp-danger`, `--hp-success` and `--hp-warning`. Danger button text defaults to white via `--nectar-danger-foreground`; if overriding these colours, choose an accessible text/background pair.

The component library does not own a separate language catalogue. Pass translated strings, and update existing elements or recreate components when the locale changes. Dispose enhanced selects before recreating their wrappers.

## Examples

- [UI Gallery](https://github.com/HiveDevelopment/NectarSDK/tree/main/examples/ui-gallery): all controls, state examples, tabs and a confirmation dialog with English/German labels.
- [Hello Nectar](https://github.com/HiveDevelopment/NectarSDK/tree/main/examples/hello-nectar): shared buttons, notices, loading and empty states.
- [Votifier Tester](https://github.com/HiveDevelopment/NectarSDK/tree/main/examples/votifier-tester): shared input/button styles, enhanced selects and result notices.

The 0.4.0 release bundle includes these sources before their repository publication. Build them locally or install the supplied `.nectar` packages on a development Panel.
