# Themes and languages

## Themes

Administrators define and offer themes under **Admin → Themes**, using design tokens for colours, surfaces, borders and radii. Users choose from the themes made available to them in their appearance settings.

Preview more than the main background: check forms, dropdowns, modals, charts and the console for readable contrast. Extension-owned styles may need their own theme integration.

## Languages

Users can select an available language. Missing translations fall back to English; German is currently partial.

For contributors, frontend catalogues live in `resources/lang/` and Laravel message catalogues in `lang/`. Add language choices through the language configuration and keep identifiers, commands and environment-variable names untranslated. Crowdin project synchronization is not configured by these changes.
