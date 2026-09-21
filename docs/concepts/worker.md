# Worker

Worker is the HivePanel service that runs on each Node.

It receives instructions from Panel and performs the machine-level operations required to install, start, stop and manage the Cells hosted by that Node.

Worker is part of the Node in HivePanel's public architecture. It is not a separate compute layer between Panel and the Node.

A Node without a healthy Worker connection cannot perform normal Cell lifecycle operations through Panel.

Worker interfaces with the underlying container runtime as an implementation detail. See [Container Runtime](/internals/container-runtime) for lower-level information.

See [Worker Connection](/nodes/worker-connection) for operational guidance.
