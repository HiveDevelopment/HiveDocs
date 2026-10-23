# CLI commands

Use the generated npm scripts inside an extension, or invoke the installed CLI with `npx nectar`. The CLI operates on the current directory, except `init`, which creates the supplied new directory.

| Command | Purpose |
| --- | --- |
| `nectar init <directory>` | Generate an extension; existing directories are not overwritten. |
| `nectar dev` | Run the loopback preview with fixtures and automatic rebuilds. |
| `nectar build` | Bundle `src/main.ts`, copy public assets and generate HTML entries. |
| `nectar validate` | Check the manifest. |
| `nectar validate --built` | Also check built files against the archive contract. |
| `nectar doctor` | Check Node.js, the manifest and the source entry. |
| `nectar doctor --built` | Also check the built archive contract. |
| `nectar pack` | Package built files into a `.nectar` archive. |
| `nectar --version` | Display the installed SDK version. |
| `nectar --help` | Display command usage. |

## Generate a project

```bash
npx --package @hivedevelopment/nectar@0.3.0 nectar init my-extension --id yourname.example --panel-version dev --sdk-source npm
```

`--sdk-source npm` pins a registry dependency; `local` uses a relative SDK checkout. Installed npm copies default to `npm`; source checkouts default to `local`.

## Preview and compatibility

```bash
npx nectar dev --port 5174
npx nectar validate --built --panel-version dev
npx nectar doctor --built --panel-version dev
```

Preview uses mocks rather than a live Panel or service. `--panel-version` checks an exact target, not a semver range. Read the [quick start](./quick-start) for fixtures and rebuild behaviour.

## Package an extension

```bash
npm run build
npm run validate
npm run doctor
npx nectar pack --out yourname.example-1.0.0.nectar
```

`pack` does not rebuild and will not overwrite an existing output archive. Remove an old archive or choose a different output path. The generated project's `npm run pack` uses the default extension ID/version filename.

A `.nectar` package is installed through Panel. `npm pack` and `npm publish` have a different purpose: they package and publish an npm library, including the SDK itself.
