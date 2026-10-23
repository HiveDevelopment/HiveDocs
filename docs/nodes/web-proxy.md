# Node web proxy

Open **Admin → Nodes → select a Node → Web Proxy**. Worker manages a separate Nginx container for that Node.

1. Set the bind address and public HTTP/HTTPS ports.
2. Set a DNS address visitors can reach and an ACME contact email.
3. Enable the proxy and confirm the configured ports are reachable.
4. Let users add routes under [Cell → Domains & Proxies](/cells/domains).

The proxy forwards to an existing allocation owned by the Cell. It does not grant another backend allocation. Keep public proxy ports free from other services on the same address. Standard public HTTPS needs working DNS and public HTTP/HTTPS reachability for certificate setup.

Raw TCP/UDP forwarding is an advanced option: offer dedicated public service ports and use the appropriate protocol. A Minecraft hostname is usually simpler through a Java SRV [subdomain](/cells/domains#generated-subdomains).

If an upstream proxy is used, configure only its trusted CIDRs for real client-IP handling. Otherwise access rules may see the proxy's IP instead of the visitor's.
