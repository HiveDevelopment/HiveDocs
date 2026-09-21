# Upgrading HivePanel

Treat upgrades as infrastructure changes and review the release notes for the exact version you are installing.

## Before upgrading

1. Read the release notes and migration instructions.
2. Back up Panel data and important Cells.
3. Record the currently running Panel and Worker versions.
4. Plan a rollback path.
5. Schedule downtime if the release requires it.

## Version compatibility

Keep Panel and Worker within the compatibility range documented by the release. Do not assume arbitrary old Worker versions will remain compatible with a new Panel.

## After upgrading

Verify authentication, Node connectivity, Cell lifecycle actions, console access and a representative backup or scheduled operation.
