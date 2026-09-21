# HivePanel Documentation

Documentation site for HivePanel, built with Vue-powered VitePress and Tailwind CSS.

## Development

```bash
npm install
npm run docs:dev
```

## Production build

```bash
npm run docs:build
```

The generated site is written to `docs/.vitepress/dist`.

## Writing documentation

Documentation pages live under `docs/` and are written in Markdown. Add the page to the sidebar in `docs/.vitepress/config.ts` when it should appear in navigation.

Use product terminology consistently:

- **Panel** — the central HivePanel control plane.
- **Node** — a physical machine or VM that runs Worker.
- **Worker** — the Node service that interfaces with Docker and carries out Panel instructions.
- **Cell** — a running game server instance managed by HivePanel.
- **Comb** — a reusable definition describing how a Cell type is installed and started.
- **Container** — the isolated Docker runtime used to execute a Cell.

## Documentation rule

Release-specific commands, ports, dependency versions and compatibility statements should come from the corresponding HivePanel release or source repository. Do not guess them in the docs.
