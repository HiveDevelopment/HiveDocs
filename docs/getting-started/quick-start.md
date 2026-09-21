# Quick Start

This guide gives you the shortest route from a new HivePanel installation to a running Cell.

## Before you begin

You need a working Panel installation and at least one Node with Worker connected. If you have not installed HivePanel yet, start with the [installation overview](/installation/).

## 1. Add a Node

Register the machine that will provide compute capacity to HivePanel. A Node represents the machine itself; Worker is the service running on it that receives instructions from Panel.

## 2. Connect Worker

Install and configure Worker on the Node, then verify that Panel reports the Node as connected.

## 3. Add a Comb

A Comb describes how a particular type of game server should be installed and started. Choose an existing Comb or create one for the workload you want to run.

## 4. Create a Cell

Create a Cell from the Comb, choose the destination Node, assign its resources and complete the variables requested by the Comb.

## 5. Wait for installation

Worker creates the Cell environment and performs its installation steps. Once complete, the Cell can be started and managed from Panel.

## Next steps

Read [How HivePanel Works](/guide/how-it-works) for the architecture, or continue to [Creating a Cell](/cells/creating-a-cell) for a more detailed walkthrough.
