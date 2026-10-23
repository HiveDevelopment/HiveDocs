# Nectar SDK

Build sandboxed extensions that appear inside HivePanel as pages, sidebar links and widgets. The SDK provides a typed browser bridge, starter generator, local preview, manifest validation and `.nectar` packaging.

The **0.3.0 developer preview** supports Cell discovery, nonsecret settings, approved HTTPS/TCP requests, theme/language updates and polled catalogue events. It does not expose files, power controls, arbitrary Cell mutations or server-side extension code.

## Build your first extension

Start with the [quick start](./quick-start), then read the [API reference](./api), [permissions](./permissions), [pages and themes](./interface) and [testing and packaging](./testing).

The npm quick-start command requires the SDK's first publication. Until then, use the source or tarball instructions on the quick-start page. The package name is `@hivepanel/nectar`.

## Reference extensions

- **Hello Nectar:** dashboard page demonstrating Cells, settings, live themes/locales and event subscriptions.
- **Votifier Tester:** Minecraft Cell page demonstrating approved allocation-scoped TCP, a NuVotifier v2 exchange, themed controls and input validation.

Preview fixtures simulate calls locally. Test actual user permissions and networking on your development Panel before distributing an extension.
