# Node Storage

A Node stores the persistent data for the Cells running on it unless your deployment uses an external storage design.

## Plan for growth

Game worlds, logs, modpacks and backups can grow substantially over time. Monitor both used space and inode availability.

## Backups

Avoid treating a second directory on the same physical disk as your only backup. For important Cells, keep backup copies on separate storage or infrastructure.

## Moving data

When moving Cell data between Nodes, preserve ownership and permissions expected by Worker and the container runtime. Verify the Cell before deleting the original copy.
