# Client API reference

## Client API

```ts
import { applyTheme, createNectar, decodeBody, NectarError } from '@hivedevelopment/nectar';

const nectar = createNectar();
const { cellId, ui } = await nectar.ready;
applyTheme(ui);
const stopThemeUpdates = nectar.onUI(next => applyTheme(next));
const cells = await nectar.cells.list();
const settings = await nectar.settings.get<{ greeting: string }>();

// Replaces this frame's subscribed event set after the host authorizes it.
const stopEvents = nectar.events.on(({ event, cell }) => console.log(event, cell.id));
await nectar.events.subscribe(['cell.updated']);
await nectar.events.subscribe([]); // Stop subscriptions/polling.

stopThemeUpdates();
stopEvents();
nectar.dispose(); // Call when your page/component unmounts.
```

Create one client per iframe. Call `ready` before reading `context`. All capability methods wait for readiness automatically. The host scopes requests to the signed-in user; the SDK cannot add authority by supplying an extension ID or token.

| API | Result | Declaration |
| --- | --- | --- |
| `ready` | `{ cellId, ui }` | None |
| `cells.list()` | Array of visible Cells, at most 100 before Comb filtering | `cells.read` |
| `settings.get<T>()` | Nonsecret administrator-configured settings | `settings.read` |
| `network.http(params)` | `{ status, body_base64 }` | `network.http` and exact host list; admin approval |
| `network.tcp(params)` | Worker session/result | `network.tcp`, `cell-allocations`; admin approval and Cell console-send permission |
| `events.subscribe(names)` | `{ ok: true }`, rejects on denial | `cells.read` and matching `events.subscribe` |
| `events.on(handler)` | Unsubscribe function | Local listener only |
| `onUI(handler)` | Unsubscribe function | Theme/locale updates |
| `dispose()` | Releases listeners and pending requests | Call on unmount |

Cell fields: `id`, `name`, `comb`, `allocations`, `installStatus`. **These are not live CPU/RAM or power-state telemetry.** Allocations are returned only where TCP permission and user authorization allow them. `cellId` is set on Cell pages/widgets and null on dashboard pages.

`NectarError` exposes `code` and optional `status`. Codes include `NOT_EMBEDDED`, `HANDSHAKE_TIMEOUT`, `REQUEST_TIMEOUT`, `TOO_MANY_REQUESTS`, `CAPABILITY_FAILED` and `DISPOSED`. The client permits ten concurrent requests. Default handshake timeout is 10 seconds; request timeout is 15 seconds. Adjust with `createNectar({ handshakeTimeoutMs, timeoutMs })`.

## Settings and events

Manifest settings support `text`, `number`, `toggle`, `select`, `password`. Numeric settings can specify `min`/`max`; select settings require `options`. Password defaults are forbidden and password values are excluded from `settings.get()`. Static extension assets are public when enabled; never bundle secrets.

Events: `cell.created`, `cell.updated`, `cell.deleted`. Declare them under `events.subscribe` and request `cells.read`. The host checks every subscription. Events are inferred from **15-second polling of the user's visible catalogue**, not durable lifecycle hooks. The first poll establishes a baseline; initial Cells do not emit creation events. Visibility loss can appear as deletion, and deletion payloads contain only `{ id }`. The list is capped at 100 before Comb filtering. Do not use these events for billing, backups or guaranteed automation.

## Typed manifest definitions

Import `NectarManifest`, `ExtensionPage`, `ExtensionSetting`, `Permission`, `WidgetSlot`, `SidebarGroup` and `SidebarIcon` for tooling and typed configuration. For example:

```ts
import type { NectarManifest } from '@hivedevelopment/nectar';
const manifest = {
    id: 'example.tools', name: 'Tools', version: '1.0.0', panelCompatibility: 'dev',
    frontend: { entry: 'dist/index.html', slots: ['dashboard.widgets'] },
} satisfies NectarManifest;
```

The CLI still reads **nectar.json**. These types provide editor checking; they do not generate JSON or replace `nectar validate`. Runtime limits, page slug/entry correspondence and permission/scope matching remain validator checks.
