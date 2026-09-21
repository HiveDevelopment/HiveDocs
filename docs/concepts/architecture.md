# Architecture

HivePanel separates its central control plane from the Nodes that provide the compute capacity for game servers.

## Public architecture

The main architecture to understand is **Panel → Nodes/Workers → Cells**.

```text
                         HIVEPANEL

               Your infrastructure at a glance

                         ┌─────────────┐
                         │    PANEL    │
                         │   Control   │
                         └──────┬──────┘
                                │
                ┌───────────────┴───────────────┐
                │                               │
         ┌──────────────┐                ┌──────────────┐
         │   NODE 01    │                │   NODE 02    │
         │              │                │              │
         │    Worker    │                │    Worker    │
         │              │                │              │
         │ ┌──────────┐ │                │ ┌──────────┐ │
         │ │   CELL   │ │                │ │   CELL   │ │
         │ └──────────┘ │                │ └──────────┘ │
         │              │                │              │
         │ ┌──────────┐ │                │ ┌──────────┐ │
         │ │   CELL   │ │                │ │   CELL   │ │
         │ └──────────┘ │                │ └──────────┘ │
         └──────────────┘                └──────────────┘
```

## Panel

**Panel** is the central HivePanel application and control plane. It provides the interface for managing users, Nodes, Combs and Cells.

Panel knows which Nodes are available and communicates with the Worker running on the appropriate Node when work needs to be carried out.

## Nodes and Worker

A **Node** is a physical machine or virtual machine that provides compute capacity to HivePanel.

Each Node runs an instance of **Worker**. Worker receives instructions from Panel and performs the machine-level operations required to install, start, stop and manage the Cells hosted by that Node.

Worker is part of the Node rather than a separate infrastructure tier.

## Cells

A **Cell** is a running game server instance created and managed by HivePanel. Cells live on Nodes and are operated by the Worker running on that Node.

## Combs

A **Comb** defines how a type of Cell should be deployed. It describes the runtime, installation process, variables and startup configuration required by the game server.

Combs are definitions used to create Cells; they are not another runtime layer in the infrastructure diagram.

## Implementation details

Worker uses a container runtime beneath the HivePanel architecture to isolate and operate Cell workloads. This is an implementation detail and is not required to understand the public **Panel → Node/Worker → Cell** model.

See [Container Runtime](/internals/container-runtime) if you are troubleshooting or developing the lower-level Worker integration.
