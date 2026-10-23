# Nectar troubleshooting

| Symptom | Check |
| --- | --- |
| Command is unavailable | Run npm install in your extension and use npm scripts or npx nectar. Node.js 22+ is required. |
| Open inside HivePanel / handshake timeout | Use nectar dev or install the archive in Panel. Opening dist/index.html directly has no host. Confirm your Panel has Nectar integration. |
| Installation rejected | Run nectar doctor --built --panel-version YOUR_TARGET. Compatibility is exact, not a semver range. |
| Network permission denied | Declare both capability and scope; administrator approval and the current user's Cell permissions still apply. |
| No Cells or allocations | Check account access, Comb filters and page context. Allocations require TCP permission and authorization. The catalogue is capped at 100 before filtering. |
| Form button does nothing | Sandbox disallows native form submission. Use type=button, reportValidity and SDK calls; do not weaken the sandbox. |
| Fetch/CDN/storage fails | Direct network and browser storage are intentionally unavailable. Bundle dependencies and use declared bridge capabilities. |
| Focus outline clipped | Leave a small inset in the extension content. An iframe cannot paint outside its boundary. |
| Frame height loops | Avoid viewport-height sizing in auto-resized pages. Use normal flow; autoResize:false opts out of reports. |
| Changes absent in Panel | Preview hot reload is local only. Rebuild, bump the extension version and reinstall on a disposable Panel. Back up settings. |
| Events seem delayed | Events derive from 15-second catalogue polling. They are not durable hooks or live resource metrics. |
| Select setting crashes validation | Upgrade to SDK 0.3.0; malformed options/defaults now return errors. |

A 0.3.0 SDK does not imply that Panel supports extra APIs. Consult the [client API capability table](./api#client-api). Never copy Panel credentials into frontend code or preview fixtures.

## Windows Node.js versions

If installing Node.js 24 still leaves `node -v` reporting an older version, check which installation is used:

```powershell
where.exe node
nvm list
```

If nvm-windows manages the first path, install and select Node 24 through nvm, then reopen your terminal and editor. Use the exact installed version shown by `nvm list` with `nvm use`.

## SDK test wildcard error

If an older SDK checkout reports that `test/*.test.mjs` cannot be found on Windows, update its test script from the repository root:

```powershell
npm pkg set "scripts.test=npm run build && node --test"
npm test
```

The wildcard can be passed literally by Windows shells. Node's automatic test discovery avoids that dependency on shell expansion. This changes the SDK contributor test script, not your extension's scripts.

## Publishing errors

See [SDK publishing](./publishing) for npm 2FA, staged placeholders, duplicate versions and trusted-publisher setup. An extension author building a `.nectar` file does not need to publish to npm.
