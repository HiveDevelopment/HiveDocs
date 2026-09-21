# Cell Resources

Cell resource settings define the limits and capacity available to a game server.

## Memory

Allocate enough memory for the workload without exhausting the Node. For runtimes such as Java, keep application-level memory settings consistent with the Cell limit.

## CPU

CPU limits prevent a single Cell from consuming unrestricted Node capacity. Choose values according to the workload and expected concurrency.

## Storage

Monitor actual storage use over time. Backups and temporary installation files can add significant space beyond the Cell's normal working set.

## Changing limits

Where possible, stop or restart the Cell after changing resource settings so the application starts with the new limits cleanly.
