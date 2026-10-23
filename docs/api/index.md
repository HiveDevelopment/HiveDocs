# API access

Panel, Worker and Registry are separate services. Do not send a Worker token to Registry or expose Node credentials in browser code.

## HiveRegistry

These public catalogue requests can be tested in Postman against your Registry base URL:

```http
GET /api/v1/combs
GET /api/v1/combs/lighttpd
GET /api/v1/jars
GET /api/v1/preinstalls
```

Comb detail responses include the full manifest, including console suggestions and shutdown settings. Minecraft content endpoints are under `/api/v1/minecraft`; use the matching Registry source/README for query parameters and provider configuration.

## Worker

`GET /health` checks the service. Protected routes such as `GET /version` and `GET /cells` require the Node's bearer token. Restrict API reachability to trusted clients.

Panel web routes and the Worker's control endpoints are not interchangeable public application APIs. Treat internal endpoints as version-specific; use the matching source when building integrations rather than relying on undocumented UI requests.

## Nectar extension API

Browser extensions should use the [Nectar SDK client](/nectar/api), which exposes only approved capabilities through the sandbox bridge. It does not expose Node tokens or make internal Worker endpoints public. See [permissions and networking](/nectar/permissions) for scopes and approval requirements.
