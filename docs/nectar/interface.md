# Pages, widgets, themes and translations



## Pages, widgets and sidebar placement

The generated `nectar.json` is a working example. Change `frontend.pages` to add pages:

```json
{
  "slug": "tools",
  "title": "Server tools",
  "entry": "dist/pages/tools.html",
  "context": "cell",
  "sidebar": { "group": "tools", "icon": "settings" }
}
```

Dashboard pages use `/extensions/<id>/<slug>` and do not require a Cell. Cell pages use `/cells/<cell>/extensions/<id>/<slug>`. Add `frontend.combs`, such as `["game:minecraft"]`, to limit supported Combs. An empty/absent list supports all Combs.

Groups: `extensions`, `overview`, `management`, `automation`, `configuration`, `game`, `tools`. Icons: `puzzle`, `vote`, `settings`, `download`, `network`, `terminal`. Administrators can override page placement. Set `navigation: false` to hide a page's navigation link.

Widget slots: `dashboard.widgets`, `server.console.after`, `server.overview.after`. Declare them in `frontend.slots`; each uses `dist/index.html`. Cell pages and widgets receive `cellId` through `ready`. The basic builder uses one TypeScript entry for all declared pages; branch on `location.pathname` or adapt your bundler for separate entries.

## Theme and language

`applyTheme(ui)` applies Panel's `--hp-*` design tokens and document language. Consume colour values with `rgb(var(--hp-surface))`, `rgb(var(--hp-foreground))`, `rgb(var(--hp-accent))`, and radii with `var(--hp-panelRadius)` / `var(--hp-buttonRadius)`. The starter follows theme changes automatically.

Use `ui.locale` to select **your own extension's language catalogue**, with English fallback. `ui.messages` currently contains a small host-selected message set, not the full Panel catalogue. Do not depend on unrelated host translation keys. Text from settings or API responses should be rendered through `textContent` or framework escaping.

## Native page presentation

Full extension pages should sit directly in the Panel layout rather than adding a second framed card around their whole content. The 0.2.1 Panel patch removes the outer content wrapper, uses the native Cell-page heading/icon styles and opts full pages into automatic height. Widgets retain their existing fixed-height behaviour.

The SDK reports content height after its authenticated handshake using ResizeObserver. The host accepts resize messages only from the correct frame and nonce and clamps height to 80–12000px. It keeps the same opaque-origin sandbox and CSP. `createNectar({ autoResize: false })` disables reporting if your extension manages its own layout. Avoid `min-height: 100vh` or other viewport-height feedback in an auto-sized page. Use normal content flow; the SDK disconnects its observer on disposal.

Use zero body margins and leave a small content inset (for example 6px) for focus outlines and no full-page card border. Match the canvas with `rgb(var(--hp-surfaceDark))`; use panels only for individual sections where they add meaning. `applyTheme` also supplies `--nectar-accent-foreground` for readable text on filled accent buttons. The Votifier example demonstrates this and hides its Cell selector when context already provides the Cell.

## Reusable translations

```ts
import { createTranslator } from '@hivepanel/nectar';
const language = createTranslator({
    en: { welcome: 'Hello {name}' },
    de: { welcome: 'Hallo {name}' },
});
language.setLocale((await nectar.ready).ui.locale);
heading.textContent = language.t('welcome', { name: 'Jordan' });
nectar.onUI(ui => {
    language.setLocale(ui.locale);
    heading.textContent = language.t('welcome', { name: 'Jordan' });
});
```

Lookup tries the exact locale, its base language, then English (or a supplied fallback). Missing keys display their key; missing parameters retain their placeholder. Render translated values as text, never unsanitized HTML. The generated starter includes English/German text and responds to live locale updates.

See [the release checklist](./release-checklist), [troubleshooting](./troubleshooting) and [changelog](./changelog) before distributing an extension.
