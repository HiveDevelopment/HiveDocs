# HiveRegistry

HiveRegistry supplies shared **Combs**, Minecraft catalogue/version data and application preinstall recipes. Combs belong in Registry, not in the Worker's source catalogue.

Panel can use the public Registry, a private instance or manually managed local Combs. Registry-backed content installers need a reachable Registry; Worker content downloads require its HTTPS origin. Provider API keys, including CurseForge credentials where required, stay in Registry.

## Import a Comb

Open **Admin → Combs → HiveRegistry**, choose the template and import it. The manifest includes console commands, shutdown settings, variables, images, resource recommendations and supported page/config declarations. Existing local edits are protected from ordinary Registry reimport.

## Run Registry from source

```bash
npm ci
npm run build
npm start
```

Use its `.env.example` for the port, provider credentials and cache settings. This is separate from the Panel installation wizard.

## Add lighttpd

The catalogue manifest is `src/data/combs/web/lighttpd.json`. Import it through Panel after deploying Registry. Build or publish the supplied `images/lighttpd/Dockerfile` in your image repository and make its configured image available on each target Node. The default `hivepanel/lighttpd:local` tag is a local build, not an already-published image.

See [API access](/api/) for catalogue checks and [Combs](/combs/) for authoring.
