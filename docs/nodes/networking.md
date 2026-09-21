# Node Networking

Nodes need two kinds of connectivity: control traffic between Panel and Worker, and application traffic to the Cells they host.

## Panel and Worker

Allow the configured Worker endpoint through your firewall only as broadly as required by your deployment.

## Cell ports

Each game server needs the appropriate ports exposed and routed to its Cell. Keep a clear allocation strategy to prevent collisions between workloads.

## Public and private networks

Panel-to-Worker traffic can use private networking where your infrastructure supports it. Public game traffic can remain separately exposed through the addresses intended for players.

## DNS

Use stable hostnames for infrastructure endpoints and keep DNS records aligned with the certificates and addresses actually in use.
