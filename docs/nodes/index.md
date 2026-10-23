# Nodes

A Node is a Linux host running Worker and Docker. Manage it under **Admin → Nodes**.

| Setting | Purpose |
| --- | --- |
| Connection address | How Panel reaches the Worker API. |
| Public address | A client-facing address where the configuration uses one. |
| Allocations | The IP/port pairs Cells may use. |
| Resources | Capacity available for placing Cells. |
| Database hosts | Hosts offered for Cell databases on this Node. |
| Web Proxy | The Node's managed Nginx proxy for domains and service routes. |

Start with [Worker installation](/installation/worker), then check [networking](/nodes/networking). Configure the [web proxy](/nodes/web-proxy) before offering website domains.

Before retiring a Node, move or back up its Cells and verify the destination. Remove its credentials and service only after no required workloads remain.
