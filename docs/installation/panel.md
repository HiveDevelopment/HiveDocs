# Install HivePanel Panel

HivePanel is a Laravel web application and control plane. Install the Panel once, then install a compatible **Worker** on each Node.

::: warning Check your release before copying commands
Confirm the supported PHP and Node.js versions, queue configuration, first-administrator setup and available download assets against the release you are deploying. Do not assume that an archive is available until it appears in the release assets.
:::

## 1. Prepare a Linux host

Use a supported Linux distribution, a DNS name, and administrative shell access. Install the versions required by the **matching HivePanel release** of PHP CLI/FPM and extensions, Composer 2, MySQL or MariaDB, Redis if configured, NGINX, and Node.js/npm **if building frontend assets from source**. Typical Laravel extensions include `mbstring`, `xml`, `curl`, `zip`, `bcmath`, `pdo_mysql` and `openssl`; verify the project's Composer requirements rather than treating this list as exhaustive.

```bash
php -v
php -m
composer --version
node --version
npm --version
nginx -v
```

Use your distribution's package manager to install missing packages. [Requirements](/installation/requirements) explains what must be confirmed for your release.

## 2. Obtain the Panel files

Obtain the Panel from the [official HivePanel releases page](https://github.com/HiveOSSoftware/hivepanel/releases/latest). Select the release you intend to deploy and download its Panel archive **if one is provided**. If the release provides source code only, follow that release’s build instructions and ensure that frontend assets and Composer dependencies are installed. Do not guess an asset filename or assume that a release has been published.

The examples below assume the Panel files are already present at `/var/www/hivepanel`:

```bash
cd /var/www/hivepanel
ls artisan composer.json package.json .env.example
```

Do not proceed if the expected files are absent. Avoid deploying a development branch to production without testing it.

## 3. Create the application database

Follow [Setting up MySQL](/installation/mysql) to create a dedicated `hivepanel` database and restricted account. This is the **Panel application database**, not the separate database hosts later assigned to Nodes for customer Cell databases.

## 4. Configure Laravel

```bash
cd /var/www/hivepanel
cp .env.example .env
composer install --no-dev --prefer-dist --optimize-autoloader
php artisan key:generate
```

Edit `.env` and set `APP_ENV=production`, `APP_DEBUG=false`, `APP_URL=https://panel.example.com`, database credentials, and the cache/session/queue/mail settings supported by your release. For example, if the project uses standard Laravel MySQL environment keys:

```dotenv
APP_NAME=HivePanel
APP_ENV=production
APP_DEBUG=false
APP_URL=https://panel.example.com
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=hivepanel
DB_USERNAME=hivepanel
DB_PASSWORD=replace-with-your-own-secret
```

Use the **actual `.env.example`** to confirm variable names and required HivePanel-specific secrets. Never publish `.env` or commit it to Git. **Back up `APP_KEY` securely**: losing it can make encrypted credentials, including Worker or database secrets, unreadable. Do not regenerate it during upgrades.

## 5. Install the schema and frontend assets

For a fresh installation, after verifying the release's required seeders:

```bash
php artisan migrate --force
npm ci
npm run build
php artisan optimize
```

Run `php artisan db:seed --force` **only if the release instructions require its seeders**; do not assume every seeder is safe to rerun. A packaged release may already include built frontend assets, in which case the Node/npm build step may not be necessary. Do not use `php artisan migrate:fresh` on an existing installation.

## 6. Create the first administrator

Use the first-administrator setup method documented by the **matching HivePanel release**. This documentation snapshot does not verify a bootstrap command or registration workflow; do not grant administrator access through an unreviewed SQL statement.

## 7. Set permissions

Run the web application and queue worker as the appropriate unprivileged service account (`www-data` on many Debian/Ubuntu installations; commonly `nginx` on some RHEL-family NGINX setups). Make only Laravel's writable directories writable by that account:

```bash
cd /var/www/hivepanel
sudo chown -R www-data:www-data storage bootstrap/cache
sudo chmod -R u+rwX,g+rwX storage bootstrap/cache
```

Adjust `www-data` to your actual service account. Protect `.env` from other users; do **not** make the entire source tree world-writable. On SELinux-enabled systems, configure the appropriate file contexts rather than disabling SELinux.

## 8. Configure NGINX and HTTPS

Point the web root at `/var/www/hivepanel/public`, **not** the repository root. The example below is an HTTP-only bootstrap configuration; configure a valid TLS certificate and redirect HTTP to HTTPS **before production use**.

```nginx
server {
    listen 80;
    server_name panel.example.com;
    root /var/www/hivepanel/public;
    index index.php;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        fastcgi_pass unix:/run/php/php-fpm.sock; # Replace with your PHP-FPM socket or TCP endpoint
    }

    location ~ /\. {
        deny all;
    }
}
```

The PHP-FPM socket shown is a **placeholder** and differs between distributions and PHP versions. Verify it before enabling the site. Test NGINX with `sudo nginx -t` and reload only after the test passes. Follow your certificate provider's instructions for HTTPS.

## 9. Run queues and the scheduler

HivePanel uses background work for operations that must not depend on an open browser session. Configure a persistent queue worker using the queue connection and **queue names defined by your release**. A baseline Laravel command is:

```bash
cd /var/www/hivepanel
php artisan queue:work --sleep=3 --tries=3
```

Run it under systemd or another process supervisor as the web service account, with automatic restart. If the release defines named queues, supply the correct `--queue=` option for HivePanel.

Configure the Laravel scheduler **once per minute** under the same account:

```cron
* * * * * cd /var/www/hivepanel && /usr/bin/php artisan schedule:run >> /dev/null 2>&1
```

Check the PHP executable with `command -v php`; replace `/usr/bin/php` if necessary. Run the cron entry as the application account, not as an additional duplicate root cron. See [Panel configuration](/installation/panel-configuration).

## 10. Verify and connect a Node

Open the Panel over HTTPS and verify administrator sign-in, queue processing and scheduled tasks. Create a Node in Admin, install the matching [Worker](/installation/worker) on that machine, and confirm it connects. Assign allocations and, if using Cell databases, explicitly assign a database host to the Node. Then create a disposable Cell and test its console, files and lifecycle. Follow the [post-installation checklist](/installation/post-installation).

::: tip Existing installation?
Back up the Panel database, `.env`/`APP_KEY` and Cell data, and follow [Upgrading HivePanel](/maintenance/upgrading) instead of repeating fresh-install steps.
:::
