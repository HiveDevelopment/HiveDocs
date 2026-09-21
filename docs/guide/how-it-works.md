# How HivePanel Works

HivePanel has one central Panel and one or more Nodes that provide the compute capacity for your game servers.

## Panel

**Panel** is the central HivePanel application and control plane. It is where users manage infrastructure, Combs and Cells.

## Nodes

A **Node** is a physical machine or virtual machine that provides compute capacity. Add Nodes as your infrastructure grows or when you need capacity in another location.

## Worker

Each Node runs **Worker**. Worker connects that Node to Panel, receives instructions from Panel and performs the machine-level operations required for the Cells hosted there.

Worker should be thought of as part of the Node rather than as a separate layer between Panel and the Node.

## Cells

A **Cell** is a running game server instance created and managed by HivePanel. A Node can host multiple Cells according to its available resources.

## Combs

A **Comb** is a reusable game server definition. It describes the runtime, installation process, variables and startup configuration needed to create a Cell.

## From Comb to Cell

```text
Comb definition
     │
     ▼
Panel creates the Cell definition
and selects a Node
     │
     ▼
Panel sends the required work to
Worker on that Node
     │
     ▼
Worker prepares and starts the Cell
     │
     ▼
Cell is managed through Panel
```

The public architecture intentionally stops at Worker and Cells. Container-runtime details beneath Worker are covered separately in [Internals](/internals/container-runtime).
