# Comb Variables

Variables make a Comb reusable across Cells with different configuration values.

## Schema

Each variable should have a name, type and default where appropriate. Mark values required when installation or startup cannot proceed without them.

## Template use

Variables can be referenced by the parts of the Comb that support templating, such as startup commands or installation URLs.

## Good variable design

Keep names short and obvious. Avoid exposing internal values that should remain fixed by the Comb itself.

::: tip Defaults
A good default should create a useful Cell without requiring an administrator to understand every implementation detail of the underlying server.
:::
