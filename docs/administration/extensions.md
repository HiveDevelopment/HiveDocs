# Nectar extensions

Manage extensions under **Admin → Extensions**. Review the extension's source, configuration and declared permissions before enabling it. An extension that declares network access needs that approval first.

Extensions can provide full Panel pages, sidebar entries in existing groups and content in supported page slots. A page does not have to be tied to a Cell; server-scoped features still need the appropriate Cell context and authorization.

Use the extension's configuration page for its settings. If enabling fails, check the validation message and outstanding permission approvals. Disabling an extension removes its active integration; follow its own instructions for any retained data.

Authors should use Panel theme variables and language messages so their interface fits the surrounding pages.

## Develop an extension

Use the [Nectar SDK](/nectar/) to build pages and widgets, preview them locally and package them for installation. Start with the [quick start](/nectar/quick-start). Its npm package is `@hivedevelopment/nectar`.

Network permissions need administrator approval in addition to the signed-in user's normal Cell access. Password settings are excluded from the frontend settings response. Never bundle secrets into extension assets.
