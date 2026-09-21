# Configure Panel

The Panel is a Laravel application. Review its actual `.env.example` and the matching release notes before changing environment variables.

## Application and encryption

Set `APP_ENV=production`, `APP_DEBUG=false` and `APP_URL` to the public HTTPS URL. Generate `APP_KEY` **once on a fresh install**, store an encrypted backup of it and preserve it across upgrades. Never expose `.env` through your web server.

## Application database versus Cell database hosts

`DB_*` settings connect the **Panel itself** to its application database. Customer Cell databases use separately configured database hosts in Admin. Assign those hosts to destination Nodes and configure primary/fallback priority and capacity there; do not enter destination administrator credentials independently for each migration.

## Queue, cache and scheduler

Choose the queue/cache drivers supported by your release. Keep `queue:work` supervised and run `schedule:run` once per minute. Confirm any custom queue names in the HivePanel source or release documentation.

## Mail and authentication

Configure the release's mail transport if you use invitations, password resets or verification. Use the documented first-administrator bootstrap flow; this documentation snapshot does not establish a specific CLI command.

## Web server and Worker

Serve only `public/` through HTTPS. Configure each Node's Worker using the matching release, then check Node connectivity in Admin. See [Install Panel](/installation/panel), [Install Worker](/installation/worker) and [Post-installation](/installation/post-installation).
