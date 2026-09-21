# Panel

Panel is HivePanel's central control plane and web interface.

Administrators use Panel to manage users, Nodes, Combs and Cells. Panel stores the desired configuration and sends machine-level work to Worker on the appropriate Node.

## What Panel does

- manages HivePanel users and access
- registers Nodes and tracks Worker connectivity
- stores Cell definitions and placement
- manages Combs
- exposes Cell administration such as console, files, players, schedules and backups

Panel is not the component that directly operates Docker on every Node. That responsibility belongs to Worker.
