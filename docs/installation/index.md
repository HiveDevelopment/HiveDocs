# Installation

HivePanel uses a central **Panel** (Laravel) and one or more **Nodes**, each running the Go **Worker**. The Panel and Worker can run on separate machines.

## Recommended order

1. Check [release-specific requirements](/installation/requirements).
2. Create the [Panel application database](/installation/mysql).
3. Follow the [full Panel installation guide](/installation/panel).
4. Review [Panel configuration](/installation/panel-configuration).
5. [Prepare a Node](/installation/node-preparation) and [install Worker](/installation/worker).
6. Connect Worker, configure allocations and assign any Cell database hosts to the Node.
7. Complete the [post-installation checks](/installation/post-installation).

::: warning Fresh install versus upgrade
Do not generate a new `APP_KEY`, run destructive migrations or rerun first-install bootstrap steps on an existing Panel. Use the [upgrade guide](/maintenance/upgrading).
:::
