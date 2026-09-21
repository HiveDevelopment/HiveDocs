# Installation requirements

HivePanel consists of a **Laravel Panel** and a separate **Go Worker** on each Node. Their version compatibility matters.

::: warning Version support must come from the release
This documentation archive does not contain the current Panel `composer.json`, `package.json`, Worker build metadata or a published compatibility matrix. PHP, Node.js, operating-system and database minimum versions are therefore **not verified here**. Check the matching release before installing packages.
:::

## Panel host

- Linux host with a supported PHP CLI and PHP-FPM version and the extensions required by the Panel's Composer dependencies.
- Composer 2; Node.js/npm if building frontend assets from source.
- A dedicated MySQL/MariaDB application database and account.
- The configured cache/queue backend (Redis if the release uses it), a persistent queue process and the Laravel scheduler.
- NGINX or another supported web server, DNS, HTTPS and persistent storage.

The Panel's application database is **different** from the database hosts administrators assign to Nodes for Cell databases.

## Node host

- Linux and a Docker/container runtime supported by the matching Worker release.
- The compatible Worker binary, sufficient CPU/RAM/disk, and connectivity to Panel.
- Correct firewall rules and allocations for Cell ports.
- Additional storage for backups, installation files and container images.

For in-place migration, the mapped Worker must run on the **same physical machine** as the source server, with access to its source volumes. Keep the source stopped during cutover and preserve its data for rollback.

## Before going live

Verify the release-specific requirements, restore a test backup, check queue/scheduler health, confirm Worker connectivity, and deploy a disposable Cell. Continue with [Install Panel](/installation/panel).
