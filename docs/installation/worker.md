# Install Worker

Worker runs on every Node and carries out the machine-level instructions sent by Panel. It interfaces with Docker to install and operate Cells on that Node.

::: warning Version compatibility
Use a Worker release compatible with the Panel version you are running. Exact installation paths, service names and configuration fields should follow the matching HivePanel release.
:::

## 1. Create the Node in Panel

Open the HivePanel administration area and create a Node for the machine you are preparing.

Record or generate the Worker connection information required by that Node.

## 2. Prepare Docker

Install and start the container runtime required by the current HivePanel release. Confirm Docker is healthy before adding Worker; this makes container-runtime problems easier to separate from Worker configuration problems.

## 3. Install Worker

Download the Worker binary or package for the current HivePanel release and install it in the location documented by that release.

Use a dedicated configuration directory and keep credentials readable only by the account that needs them.

## 4. Configure the Node

Add the Node configuration expected by Panel. Verify the configured Panel/Worker URLs, credentials, storage paths and networking values before starting the service.

## 5. Create the service

Install Worker as a system service so it starts automatically with the Node and is restarted according to the project's recommended service policy.

## 6. Start Worker

Start the Worker service and inspect its logs. Resolve configuration or Docker errors before attempting to deploy a Cell.

## 7. Verify the connection

Return to Panel and open the Node. It should report Worker as connected.

If it remains disconnected, follow [Worker Connectivity](/troubleshooting/worker-connectivity).

## 8. Deploy a test Cell

Create a small Cell from a known Comb. Confirm installation completes, the Cell starts and console output appears in Panel.
