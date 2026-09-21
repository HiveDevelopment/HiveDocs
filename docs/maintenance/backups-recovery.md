# Backups and Recovery

A complete HivePanel recovery plan covers both control-plane data and Cell data.

## Panel data

Back up the database and any application configuration or persistent files required to reconstruct Panel.

## Cell data

Back up important Cells according to their required recovery point. Store critical copies separately from the Node hosting the live server.

## Recovery documentation

Record how to rebuild Panel, reconnect Nodes and restore Cells. During an incident, written recovery steps are more reliable than depending on memory.

## Test restores

Run periodic restore tests and record the result.
