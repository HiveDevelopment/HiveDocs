# Worker Connection

Panel relies on Worker to perform actions on a Node.

## Connected state

A healthy Node should report Worker as connected. If Panel cannot communicate with Worker, Cell lifecycle operations on that Node will not complete normally.

## Things to verify

- Worker is running on the Node.
- Worker is using the connection details expected by Panel.
- DNS resolves correctly in both directions where required.
- Firewalls allow the configured Worker traffic.
- TLS configuration matches the hostname and connection method in use.
- The Node clock is synchronised.

For diagnosis steps, see [Worker connectivity troubleshooting](/troubleshooting/worker-connectivity).
