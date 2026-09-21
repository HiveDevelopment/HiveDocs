# Cells

A Cell is a running game server instance created and managed by HivePanel.

Cells are created from Combs and assigned to Nodes. The Worker running on the selected Node performs the operations required to install, start, stop and manage the Cell.

The Cell interface brings together the common operations around a server, including console, files, players, schedules, backups, variables and resources.

Containerisation is an implementation detail beneath Worker rather than part of the public Cell model. See [Container Runtime](/internals/container-runtime) when you need those lower-level details.

See the full [Cell documentation](/cells/).
