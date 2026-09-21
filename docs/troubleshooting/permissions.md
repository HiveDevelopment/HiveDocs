# File and Permission Problems

Permission problems can appear after manual file copies, migrations or changes performed directly on a Node.

## Symptoms

Typical signs include files that cannot be edited, startup processes unable to write configuration, failed backup creation or installation steps reporting access denied.

## Avoid arbitrary fixes

Do not recursively change permissions without understanding which user and group Worker expects for Cell data. Overly broad permissions can create security problems and hide the original cause.

## After a migration

Compare ownership and permissions with a healthy Cell created normally on the destination Node, then correct the migrated data to match the supported layout.
