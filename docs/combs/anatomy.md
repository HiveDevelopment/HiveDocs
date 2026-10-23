# Author a Comb

Shared manifests live under `src/data/combs/` in HiveRegistry. Use the matching workload category/group so Panel shows the right pages.

```json
{
  "id": "example-node-app",
  "name": "Node.js application",
  "category": "web",
  "group": "nodejs",
  "tags": ["web", "nodejs"],
  "capabilities": ["files", "console", "domains"],
  "image": "node:22-alpine",
  "working_dir": "/home/container",
  "shell": "sh",
  "entrypoint": [],
  "environment": {"PORT": "{{allocation.port}}", "HOST": "0.0.0.0"},
  "mounts": [{"source": "instance", "target": "/home/container"}],
  "startup": "node index.js",
  "variables": {},
  "variables_schema": [],
  "console_commands": [],
  "stop": {"command": "", "timeout": 30, "signal": "SIGTERM"},
  "recommended_resources": {"memory_mb": 256, "disk_mb": 1024, "cpu_percent": 50},
  "install": [{"type": "write_file", "with": {"target": "index.js", "content": "require('node:http').createServer((req,res)=>res.end('Hello')).listen(Number(process.env.PORT),'0.0.0.0')"}}]
}
```

Use a unique ID and an allocation-based port. `console_commands` supplies suggestions; `stop` defines the normal command/signal and grace period. An empty stop command means signal-only shutdown.

Optional `docker_images` offers named image choices. `config_files` declares Cell-relative configuration paths; `sidebar` can link supported configuration/file pages. `recommended_resources` supplies starting values for Cell creation.

Validate against Registry's schema and [test with a disposable Cell](/combs/testing). Do not put credentials in a shared manifest.
