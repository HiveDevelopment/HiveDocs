# Node Maintenance

Plan Node maintenance so Cells are not unexpectedly interrupted.

## Before maintenance

1. Identify Cells running on the Node.
2. Communicate downtime where required.
3. Create or verify recent backups.
4. Stop Cells cleanly.
5. Stop Worker if the maintenance requires it.

## After maintenance

Start Worker, verify that Panel reports the Node as connected, then bring Cells online and check their consoles for errors.

For longer-term removal, use the [decommissioning](/maintenance/decommissioning-a-node) guide.
