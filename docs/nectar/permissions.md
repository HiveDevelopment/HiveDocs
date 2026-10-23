# Permissions and network access

Declare the smallest required capability set. Network permissions require administrator approval; Cell calls still require the signed-in user to have access. Supplying an ID never grants authority.

## HTTPS gateway

Manifest additions:

```json
{
  "permissions": ["network.http"],
  "network": { "http": { "hosts": ["api.example.com"] } }
}
```

Merge these with your other permissions rather than replacing required capabilities.

```ts
const response = await nectar.network.http({ url: 'https://api.example.com/catalogue', method: 'GET' });
if (response.status < 200 || response.status >= 300) throw new Error(`Remote API returned ${response.status}`);
const data = JSON.parse(decodeBody(response));
```

Only GET/POST to explicitly approved public HTTPS hostnames on port 443 are supported. Redirects, private destinations and custom authentication headers are not supported. Maximum request body: 16 KiB; response body: 1 MiB. A completed gateway call can still contain a remote 4xx/5xx status: check it yourself. Network requests are rate-limited and audited without logging payloads.

## TCP gateway

Declare `network.tcp` plus `"network": { "tcp": { "scope": "cell-allocations" } }`. Select an assigned allocation returned by `cells.list()`:

```ts
const connection = await nectar.network.tcp({ cell_id: cell.id, allocation_id: allocation.id, action: 'open' });
try {
    const result = await nectar.network.tcp({
        cell_id: cell.id, allocation_id: allocation.id, action: 'exchange',
        session_id: connection.session_id, data_base64: btoa('hello\n'), read_line: true,
    });
    // result.data_base64 contains the response bytes. Use Uint8Array for binary protocols.
} finally {
    await nectar.network.tcp({ cell_id: cell.id, allocation_id: allocation.id, action: 'close', session_id: connection.session_id });
}
```

Sessions expire and are scoped to the extension/user/Cell. Arbitrary destinations, UDP and general-purpose sockets are not exposed. Use `read_json` only for a protocol that expects it; protocol-specific code belongs in your extension.