# Extension manifest

Every extension has a root `nectar.json`. It declares the extension's identity, target Panel version, frontend entries and requested capabilities. Validate it with `npx nectar validate` during development and `npx nectar validate --built` after building.

## Minimal dashboard page

```json
{
    "id": "yourname.example",
    "name": "Example extension",
    "version": "1.0.0",
    "panelCompatibility": "dev",
    "permissions": ["cells.read"],
    "frontend": {
        "entry": "dist/index.html",
        "slots": [],
        "pages": [
            {
                "slug": "overview",
                "title": "Example extension",
                "entry": "dist/pages/overview.html",
                "context": "dashboard",
                "sidebar": { "group": "tools", "icon": "puzzle" }
            }
        ]
    }
}
```

The SDK builder generates these HTML files from `src/main.ts`. The built archive must contain root `nectar.json` and static assets under `dist/` without a wrapping directory.

## Identity and compatibility

| Field | Purpose |
| --- | --- |
| `id` | Unique lowercase extension identifier, such as `yourname.example`. |
| `name` | User-facing extension name. |
| `version` | Extension's semantic version, separate from the SDK version. |
| `panelCompatibility` | Exact target `NECTAR_PANEL_VERSION`, normally `dev` in development. |
| `description` | Optional extension description. |

The SDK exports `NectarManifest` and related TypeScript types for editor checks. The CLI still reads JSON; a TypeScript object does not replace the manifest or runtime validation.

## Pages, slots and Comb filters

Use `frontend.pages` for dashboard or Cell pages and `frontend.slots` for widgets. At least one page or slot must be declared. Cell context is supplied by the host; do not make users choose a Cell again when the host has already provided it.

`frontend.combs` can filter supported Combs, for example `["game:minecraft"]`. Omitting the list supports all Combs. See [pages and sidebar placement](./interface#pages-widgets-and-sidebar-placement) for supported groups, icons, routes and slots.

## Permissions, networking and events

Declare permissions before calling the corresponding client methods. HTTP and TCP capabilities require both a permission and a matching `network` scope; administrator approval and user authorization still apply. See [permissions and network access](./permissions).

Catalogue events require `cells.read`, a matching `events.subscribe` declaration and an authorized subscription through the SDK:

```json
{
    "events": { "subscribe": ["cell.updated"] }
}
```

Merge this fragment with your manifest. Events come from polling and must not be used as guaranteed lifecycle hooks.

## Administrator settings

Settings definitions support `text`, `number`, `toggle`, `select` and `password`:

```json
{
    "settings": [
        { "key": "greeting", "label": "Greeting", "type": "text", "default": "Hello" },
        { "key": "limit", "label": "Result limit", "type": "number", "min": 1, "max": 50, "default": 10 },
        { "key": "mode", "label": "Mode", "type": "select", "options": ["compact", "full"], "default": "compact" }
    ]
}
```

Select defaults must be among the declared options. Password settings cannot have defaults and are not returned by `settings.get()`. Never put credentials into source, assets or ordinary settings.

Backend code and shell hooks are unsupported. Panel validates declarations and archive contents again when installing the extension.
