# HivePanel documentation

VitePress documentation for HivePanel, Worker, HiveRegistry and the Nectar SDK.

```bash
npm ci
npm run docs:dev
npm run docs:build
```

The production site is written to `docs/.vitepress/dist`.

## Editing

Write short, task-focused Markdown guides under `docs/`. Navigation lives in `docs/.vitepress/config.ts`; the custom home page is in `docs/.vitepress/theme/components/HomePage.vue`.

Production setup follows the installer and Docker Compose flow. Worker is a Node system service; Cells run in Docker. Shared Combs belong in HiveRegistry. Keep manual/source setup in Development rather than the installation path.

When merging pages, keep a short compatibility page for old URLs and remove it from navigation/search. Do not duplicate whole guides. Check internal links and run the production build before publishing. Do not commit dependencies, build output or credentials.

The privacy notice is retained separately and was not rewritten as part of the guide simplification.

Nectar author guides live under `docs/nectar/` and are served at https://docs.hivepanel.dev/nectar/. Use `@hivedevelopment/nectar` for npm examples and `HiveDevelopment/NectarSDK` for source links.
