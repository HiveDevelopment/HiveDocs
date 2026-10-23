# Nectar SDK

Build sandboxed extensions that appear inside HivePanel as pages, sidebar links and widgets. The SDK provides a typed browser bridge, starter generator, local preview, manifest validation and `.nectar` packaging.

The **0.3.0 developer preview** supports Cell discovery, nonsecret settings, approved HTTPS/TCP requests, theme/language updates and polled catalogue events. It does not expose files, power controls, arbitrary Cell mutations or server-side extension code.

## Build your first extension

Start with the [quick start](./quick-start), then read the [API reference](./api), [permissions](./permissions), [pages and themes](./interface) and [testing and packaging](./testing).

The SDK is available on [npm](https://www.npmjs.com/package/@hivedevelopment/nectar) as `@hivedevelopment/nectar`. Source, examples and issues are maintained in [HiveDevelopment/NectarSDK](https://github.com/HiveDevelopment/NectarSDK).

## Reference extensions

- **Hello Nectar:** dashboard page demonstrating Cells, settings, live themes/locales and event subscriptions.
- **Votifier Tester:** Minecraft Cell page demonstrating approved allocation-scoped TCP, a NuVotifier v2 exchange, themed controls and input validation.

Preview fixtures simulate calls locally. Test actual user permissions and networking on your development Panel before distributing an extension.

## Reference guides

- [Manifest and project configuration](./manifest)
- [CLI commands](./cli)
- [Extension release checklist](./release-checklist)
- [Publishing the SDK](./publishing) — for SDK maintainers, separate from distributing `.nectar` extensions.
- [SDK changelog](./changelog)

## Shared UI controls

The SDK 0.4.0 release adds optional [shared UI components](./ui) and a UI Gallery example. The release bundle can be tested locally before publishing 0.4.0 to npm. Existing 0.3.0 projects continue to work.
