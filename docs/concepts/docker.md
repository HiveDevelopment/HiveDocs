# Docker and Containers

Docker and containers are implementation details beneath Worker rather than first-class components of HivePanel's public architecture.

The architecture users should normally think about is **Panel → Nodes/Workers → Cells**.

For lower-level information about how Worker uses Docker to operate Cell workloads, see [Container Runtime](/internals/container-runtime).
