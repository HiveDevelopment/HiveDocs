# Your first extension



## Start developing

Requires Node.js 22 or newer. From this SDK directory:

```bash
npm ci
npm run build
node bin/nectar.mjs init ../my-extension --id yourname.example --panel-version dev
cd ../my-extension
npm install
npm run build
npm run validate
npm run doctor
npm run pack
```

From a source checkout, the generator references your local SDK using a relative `file:` dependency. Keep that directory available while developing. Once version 0.3.0 has been published to npm, developers can instead use:

```bash
npx --package @hivepanel/nectar@0.3.0 nectar init my-extension --id yourname.example --panel-version dev --sdk-source npm
cd my-extension
npm install
npm run dev
```

Published installations generate a pinned npm dependency automatically, so projects do not depend on a temporary npx cache. Use `--sdk-source local` or `--sdk-source npm` to choose explicitly. The source/tarball route works before publication. See [publishing](./publishing) for the maintainer release steps.

`panelCompatibility` is an **exact** match for Panel's `config('nectar.panel_version')`, which defaults to `dev`. Set `--panel-version` to your deployment's `NECTAR_PANEL_VERSION`; semver ranges such as `>=1.0.0` are not supported by the current host.

## Install in a development Panel

Use the Panel integration shipped with SDK 0.1.1. SDK 0.3.0 includes an optional Panel page-layout patch for borderless content and automatic iframe height. Apply those two Vue files and rebuild Panel for that presentation; the API still uses the existing integration. No Worker changes are needed. Existing extensions using the v1 bridge remain supported.

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
