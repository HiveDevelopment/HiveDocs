# Resource Planning

Resource planning determines how many Cells a Node can safely run.

## CPU

Consider both total CPU capacity and the performance characteristics of individual cores. Game servers can have very different CPU profiles.

## Memory

Do not allocate every byte of system memory to Cells. The operating system, Worker, Docker and filesystem cache all require memory of their own.

## Storage

Account for Cell data, container images, installation downloads and backups. Storage performance can matter as much as capacity for workloads with frequent saves or large worlds.

## Oversubscription

If you intentionally oversubscribe a Node, monitor real usage and leave enough headroom for workload spikes. Resource limits are not a substitute for capacity planning.
