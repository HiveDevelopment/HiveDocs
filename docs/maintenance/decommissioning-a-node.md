# Decommissioning a Node

Remove a Node carefully so no Cell data or required capacity is lost.

## Before removal

Identify every Cell on the Node and decide whether it will be migrated, archived or permanently removed.

## Migrate workloads

Move or recreate required Cells on healthy destination Nodes and verify them before deleting the originals.

## Remove Worker access

Once the Node no longer hosts required Cells, remove or revoke its Worker connection details and stop Worker.

## Remove infrastructure

Delete the Node from Panel only after confirming that no remaining operational process depends on it.
