# Cell Features

Open **Admin → Cell Features** to choose which Combs users may switch or split into, configure default instance/split/subdomain limits, and enable firewall editing. Per-Cell overrides remain authoritative where configured.

## Subdomain zones

Add a domain belonging to your Cloudflare zone, its zone ID and a scoped token with Zone Read and DNS Edit access. Configure reserved labels and enable the zone.

Tokens stay encrypted in Panel; they are not sent to the browser or Worker. Keep the existing Panel encryption key during updates.

Users can then generate hostnames under **Cell → Subdomains**. Website names also require the Node proxy. Minecraft Java names use SRV records; other clients may still need the allocation port. See [Domains & subdomains](/cells/domains).
