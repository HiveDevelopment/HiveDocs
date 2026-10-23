# Updates and repair

Use **Admin → Updates** for managed Panel updates. Back up the database, `.env`/encryption key and persistent data first. Keep compatible Panel, Worker and Registry versions when a feature spans them.

## Panel health

```bash
cd /opt/hivepanel
docker compose ps
docker compose logs --tail=100 panel nginx queue
systemctl status hivepanel-update.path hivepanel-update.service --no-pager -l
```

The update service can be inactive between jobs; the path watcher waiting for requests is normal. Inspect recent logs if an update remains in progress. Do not delete update-request/status files while a job may still be running.

## Repair

Run the installer in check mode first:

```bash
curl -fsSL https://get.hivepanel.dev | sudo bash -s -- --check
```

For an existing installation that needs repair:

```bash
curl -fsSL https://get.hivepanel.dev | sudo bash -s -- --repair
```

Repair is separate from a destructive reinstall. Preserve your original encryption key and volumes. Check Node connectivity and one disposable Cell after updating.
