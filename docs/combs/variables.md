# Variables and images

Use `variables` for string defaults and `variables_schema` for labels, types, descriptions, required values and editability. A Cell's saved values override defaults; empty/zero/false values must not be replaced merely because they are falsy.

Startup variables use <code v-pre>{{name}}</code>. The Node application example passes the primary allocation through <code v-pre>PORT: "{{allocation.port}}"</code>; the application must listen on `0.0.0.0` and that port.

Offer runtime choices with a label-to-image map:

```json
{
  "docker_images": {
    "Java 21": "ghcr.io/hivedevelopment/hivepanel-java:21",
    "Java 25": "ghcr.io/hivedevelopment/hivepanel-java:25"
  }
}
```

Only offer tags your Nodes can obtain. Use `sh` for minimal images unless Bash is actually installed. The runtime must work under the managed Cell UID/GID, with persistent files under `/home/container` and temporary files in writable locations such as `/tmp`.
