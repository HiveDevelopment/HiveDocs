# Your first extension

## Create a project

Install Node.js **22 or newer**; Node.js 24 is recommended. The SDK is published on npm as [`@hivedevelopment/nectar`](https://www.npmjs.com/package/@hivedevelopment/nectar).

Run these commands from the directory where you keep your projects:

```bash
npx --package @hivedevelopment/nectar@0.3.0 nectar init my-extension --id yourname.example --panel-version dev --sdk-source npm
cd my-extension
npm install
npm run dev
```

Open the loopback URL printed by the preview server. The generated project pins the SDK version in its dependencies, so it does not depend on a temporary npx cache. Developers installing the SDK do not need an npm account or publishing access.

Change `yourname.example` to your extension's unique ID. `--panel-version` must exactly match the target Panel's `NECTAR_PANEL_VERSION`, which defaults to `dev`; semver ranges are not supported by this host.

## Project files

| File | Purpose |
| --- | --- |
| `nectar.json` | Identity, permissions, settings, pages and widget declarations. |
| `src/main.ts` | Frontend entry bundled by the SDK. |
| `public/style.css` | Styles copied into the built extension. |
| `nectar.preview.json` | Optional local fixtures; never included in the extension archive. |

The starter demonstrates Cell discovery, settings, themes, live locale changes and catalogue event subscriptions. Read the [manifest guide](./manifest), [client reference](./api) and [interface guide](./interface) when adapting it.

## Build your extension

```bash
npm run build
npm run validate
npm run doctor
npm run pack
```

`pack` checks existing build output but does not rebuild it. Rebuild whenever source, assets or manifest entries change.

## Develop against SDK source

For SDK contributors, clone [HiveDevelopment/NectarSDK](https://github.com/HiveDevelopment/NectarSDK):

```bash
git clone https://github.com/HiveDevelopment/NectarSDK.git
cd NectarSDK
npm ci
npm run build
node bin/nectar.mjs init ../my-extension --id yourname.example --panel-version dev --sdk-source local
```

A source-generated project uses a relative `file:` dependency. Keep the checkout in place, then run `npm install` and `npm run dev` inside the generated project. Use `--sdk-source npm` to generate a registry dependency instead.

## Install in a development Panel

Use a development Panel with Nectar support. The SDK is tooling for extension authors; installing it does not update Panel or Worker. Full-page automatic height requires the host's corresponding Nectar frame support.

1. Upload the generated `.nectar` archive in **Admin → Extensions → Install**.
2. Review its declared permissions and configure its settings.
3. Approve network access if requested, then enable the extension.
4. Open its sidebar page. The starter appears under **Tools → Hello Nectar**.

Alternatively, copy the archive into the Panel application container and run `php artisan nectar:install /path/to/extension.nectar`. Installation leaves it disabled. That path must exist inside the container.

For this host version, replacing an installed extension requires disabling and uninstalling it before installing its rebuilt archive. Back up any extension settings first. Use a disposable development Panel.

## Local preview and automatic rebuilds

Inside a generated project or one of the examples:

```bash
npm run dev
# or: npx nectar dev --port 5174
```

Open the exact loopback URL printed by the command, normally `http://127.0.0.1:5174`. The toolbar selects a page/widget entry, Cell context, dark/light theme, language and success/denied/network-failure scenarios. Declared Cell events can be injected manually. Rebuild errors appear above the frame. Edits to `src/`, `public/`, `nectar.json` or `nectar.preview.json` rebuild and reload the frame automatically. Changes inside dependencies are not watched.

Preview runs the same `allow-scripts` opaque-origin iframe and CSP restrictions as Panel. It binds only to loopback and accepts scoped mock capability calls. **It never connects to a real Panel, external HTTP service or TCP listener.** Do not put production tokens in preview fixtures. Browser-side direct fetch and parent DOM access stay blocked. No permission is granted merely by using the SDK; mock calls check the manifest too, while real authorization must still be tested in Panel.

Create `nectar.preview.json` beside your manifest to override mock data:

```json
{
  "cells": [{
    "id": "preview-minecraft", "name": "My local example", "comb": "paper", "game": "minecraft",
    "installStatus": "installed", "allocations": [{ "id": "preview-votifier", "ip": "127.0.0.1", "port": 8192 }]
  }],
  "settings": { "greeting": "Hello from local preview" },
  "http": { "GET https://api.example.com/catalogue": { "status": 200, "body": { "items": [] } } },
  "votifier": { "token": "preview-token" }
}
```

`game` is preview-only metadata used for manifest Comb filtering. HTTP fixtures are selected by exact method and URL, and the hostname must also be declared in the manifest. Missing fixtures fail explicitly. The TCP mock implements a NuVotifier v2 handshake and signature check only; it is not a general socket simulator. Its demo token is `preview-token`. Settings are merged with manifest defaults; password settings are excluded from the capability response. Manual events do not modify the fixture catalogue; edit the fixtures to change the list.

Preview files and toolbar code are not included in `.nectar` archives. The preview does not emulate database-backed user permissions, worker allocation networking, TLS/proxy routing or durable events. Test those on your development Panel.

## Project diagnostics

Run `nectar doctor --built` inside your extension. It checks Node.js, manifest validity, the TypeScript entry and built archive constraints. Supply `--panel-version dev` (or your exact target) to check host compatibility. Run `nectar --version` to identify your installed SDK. These checks do not contact a Panel or verify remote permissions.
