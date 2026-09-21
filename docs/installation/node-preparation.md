# Preparing a Node

A Node is a physical machine or virtual machine that provides compute capacity to HivePanel.

## Host preparation

Use a supported Linux installation and ensure the host has enough CPU, memory and storage for the Cells you plan to run.

Worker interfaces with Docker to create and manage the containers used by Cells, so the Node must have a working container runtime as required by the current HivePanel release.

## Networking

The Node needs reliable connectivity to Panel. It must also expose the game ports assigned to Cells according to your firewall and routing design.

## Storage

Plan storage for:

- Cell files
- downloaded server files and images
- backups
- temporary installation data
- container layers

Avoid filling the host filesystem completely; both Worker and the workloads it manages need free space to operate safely.

## Time and DNS

Keep system time synchronised and ensure the Node can resolve the Panel hostname and any external endpoints needed by Comb installation steps.
