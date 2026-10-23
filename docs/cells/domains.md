# Domains and subdomains

## Your own domain

In **Cell → Domains & Proxies**:

1. Add the hostname and choose an existing Cell allocation.
2. Add the DNS records shown in Panel, including its ownership TXT record.
3. Use **Verify & activate** and wait for certificate status to complete.

For websites, enable HTTPS once DNS and the Node proxy are ready. The Node's [Web Proxy](/nodes/web-proxy) must be configured by an administrator first. The backend stays on its assigned allocation.

Advanced TCP/UDP routes need dedicated public proxy ports. An ordinary HTTP route does not carry Minecraft game traffic.

## Generated subdomains

In **Cell → Subdomains**, choose an administrator-offered domain, enter an available label and select the allocation/service type.

- **Minecraft Java:** address and SRV records let compatible clients omit the port.
- **Website:** managed DNS and a website proxy route.
- **Other service:** an address record; the client may still need its port.

Setup runs in the background. Check its status and retry if needed. Generated records are managed here, not by editing the associated route separately.

Admins configure zones under **Admin → Cell Features**. Cloudflare is the implemented managed DNS provider. A DNS hostname does not itself tunnel game traffic or conceal the Node address.
