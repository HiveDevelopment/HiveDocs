# How it works

Panel runs as a Docker Compose stack. Each Node runs Worker as a system service, and Worker runs Cells in Docker containers.

Panel sends lifecycle and file operations to Worker. Worker also sends heartbeats back to Panel. Both directions need working DNS and network access.

Combs describe what to install and how to run it. Shared Combs belong in **HiveRegistry**; import them into Panel before creating Cells. Images provide the runtime, while Cell files are kept in persistent Node storage.

HiveRegistry is optional for locally managed Combs. Minecraft catalogue installation and registry-backed preinstalls require it. Nectar adds extension pages and integrations to Panel.

A Panel and Worker can share one machine, provided their ports and storage do not conflict. See [networking](/nodes/networking).
