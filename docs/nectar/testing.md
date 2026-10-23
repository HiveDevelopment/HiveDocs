# Test and distribute extensions

## Build and package contract

`nectar build` bundles `src/main.ts` as a classic script, copies `public/` into `dist/`, and creates the HTML entries. CSS belongs in `public/style.css`. Rebuild before packing; `pack` validates built files but does not rebuild them. Compiled framework code can be bundled too, provided it needs no `eval` or inline JavaScript.

A `.nectar` file is a ZIP containing only root `nectar.json` and static files under `dist/`. No wrapping folder. Allowed types: JSON, HTML, JS, CSS, PNG, WebP, WOFF2. Limits: 150 files, 20 MiB archive, 60 MiB unpacked. The packager rejects symlinks, source maps, source files, missing entries and case-insensitive filename collisions. Archive contents are deterministic. Panel validates again on install.

The iframe uses `sandbox="allow-scripts"` with an opaque origin and strict CSP. Use relative classic scripts and styles; no CDN imports, inline scripts, direct fetch, WebSockets, workers, local storage, parent DOM access, backend PHP or shell hooks. All privileged operations go through the bridge. Opening built HTML directly will report that it must be opened inside a host. Use `nectar dev` for a local sandbox with mocks. Hot reload is local only; an installed Panel extension still needs rebuilding and reinstalling.

## Votifier reference extension

`examples/votifier-tester/` is a complete SDK-based NuVotifier v2 example with a Cell page under **Tools → Votifier Tester**, matching `game:minecraft`. It uses `cells.read` and approved `network.tcp` calls. It has its own English/German catalogue and follows Panel design tokens.

```bash
git clone https://github.com/HiveDevelopment/NectarSDK.git
cd NectarSDK
npm ci
npm run build
cd examples/votifier-tester
npm install
npm run dev
```

For a local simulated vote, enter a Minecraft username and the demo token `preview-token`. Change scenarios to test rejection and networking errors. The extension clears the token after every attempt, sends a numeric millisecond timestamp, checks the listener response and closes the TCP session. Native form submission remains blocked by the sandbox: its button validates inputs and invokes the SDK directly. No `allow-forms` or looser CSP is needed.

Build and install the generated `.nectar` file to test an actual server. See the [example README](https://github.com/HiveDevelopment/NectarSDK/tree/main/examples/votifier-tester) for permissions, replacing the old Votifier extension, and a real-vote checklist. The protocol source is kept separate from the SDK: game protocols do not belong in the core bridge.

## Verify an extension

Run the extension's build, validation, diagnostic and packaging scripts. Use the [release checklist](./release-checklist) to test permissions, themes, languages and failure paths on Panel. These checks apply to your `.nectar` archive; npm publication is only required when distributing an npm package.

## Verify SDK changes

From the SDK repository root:

```bash
npm ci
npm test
npm pack
```

SDK tests cover handshake source/origin/nonce checks, timeout/disposal, unique request identifiers, backpressure, events, permission failures and archive validation. Also test installation on a disposable Panel with a normal user, a restricted Cell subuser, an administrator, and denied/unapproved capabilities before distributing your extension.

This release does not expose arbitrary Cell mutations, filesystem access, database access, power controls or backend extension code. Add host capabilities with authorization and tests before adding SDK methods for them.
