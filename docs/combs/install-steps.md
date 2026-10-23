# Installation and preinstall recipes

Comb `install` steps prepare Cell files before startup. Supported operations include downloads, writing files, directories, extraction, copy/move, Git and command steps. Each operation uses a `type` and a `with` object; use existing Registry manifests and the schema for the operation's exact options.

```json
{
  "type": "write_file",
  "with": {"target": "public/index.html", "content": "<h1>Ready</h1>"}
}
```

Make paths Cell-relative. Keep downloads reproducible, use HTTPS and check content hashes where supported. Reinstallation can rerun file-writing steps, so document replacements and avoid unnecessary destructive actions.

## Preinstall offers

A Comb can offer Registry preset IDs through `preinstalls` or administrator-authored `preinstall_recipes`. Recipes can clone/build/configure applications rather than only choosing a container image.

Use the Registry recipe schema and isolated staged installer. Keep secrets as runtime configuration; do not bake provider keys or bot tokens into build steps. Users should see a preview, replacement confirmation and progress through the [Preinstalls page](/cells/preinstalls).
