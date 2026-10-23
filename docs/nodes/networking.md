# Networking

Check each connection separately:

| Connection | What must work |
| --- | --- |
| Browser → Panel | Public Panel URL, HTTPS and forwarded headers. |
| Panel → Worker | The Node's configured API address, scheme and port. |
| Worker → Panel | The Panel URL used for registration and heartbeats. |
| Players/visitors → Cell | Assigned application ports, or configured proxy routes. |
| SFTP client → Node | The configured SFTP port. |

## Addresses and ports

A bind address such as `0.0.0.0` is not a hostname clients can connect to. Use a reachable Node IP or domain for DNS and external connections. Panel and Worker can use private addresses when they share a network; a Node's public DNS does not automatically resolve to its private IP.

Do not assume the Panel HTTP port, Worker API port or SFTP port. Use the values configured on your installation. Open only required ports, including UDP for games that need it.

## Reverse proxies and tunnels

An HTTPS Panel behind a proxy needs the original host and `X-Forwarded-Proto: https`. Trust the actual proxy addresses. In Compose, host `.env` values must also be passed into the application service; recreating the service applies changed container environment values.

HTTP tunnels do not automatically carry game TCP/UDP or SFTP traffic. For remote/home Nodes, use direct reachable HTTPS, a private VPN, or forwarding/tunnels suitable for each protocol. Cloudflare DNS-only records and proxied HTTP records serve different purposes.

For Cell websites and service forwarding, use the [managed Node proxy](/nodes/web-proxy).
