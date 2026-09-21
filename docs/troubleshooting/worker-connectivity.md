# Worker Connectivity

Use this guide when Panel reports a Node as disconnected or Worker operations time out.

## Check Worker first

Confirm the Worker service is running and inspect its recent logs for configuration, TLS, authentication or Docker errors.

## Check the configured endpoint

Verify that Panel is attempting to reach the correct Node hostname, port and protocol.

## Check networking

From the relevant hosts, verify DNS resolution and firewall rules. If private addressing is used, make sure the route exists from Panel to the Node.

## Check TLS

Certificate hostname mismatches, expired certificates and incorrect HTTP/HTTPS configuration can all prevent a healthy Worker from being reachable.

## Check time

Large clock differences can break authentication schemes that depend on timestamps or short-lived credentials.

## Still failing?

Capture the Panel error, Worker logs and the exact connection configuration with secrets removed before reporting the issue.
