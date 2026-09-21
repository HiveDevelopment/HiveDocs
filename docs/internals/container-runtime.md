# Container Runtime

This page covers an implementation detail beneath Worker. You do not need to understand the container runtime to understand HivePanel's public architecture.

## Where it fits

The public model is:

```text
Panel
  │
  ├── Node
  │     └── Worker
  │           └── Cells
  │
  └── Node
        └── Worker
              └── Cells
```

Internally, Worker interfaces with the Node's container runtime to create and operate the isolated environments used by Cells.

```text
Panel
  │
  ▼
Worker on Node
  │
  ▼
Container runtime
  │
  ▼
Cell workload
```

## Docker

HivePanel currently uses Docker as the container runtime used by Worker. Panel does not communicate with Docker directly.

## Docker images

A Docker image contains the runtime and base environment required by a Cell. For example, a Java image can provide the Java runtime required by a Minecraft server.

Combs reference the appropriate runtime image as part of their deployment definition.

## Containers

Worker uses containers to isolate Cell workloads and enforce resource boundaries on a Node.

A **Cell** is the HivePanel game server instance users manage. A **container** is the lower-level isolated runtime environment used by Worker to execute that workload. They are related, but they are not interchangeable terms.
