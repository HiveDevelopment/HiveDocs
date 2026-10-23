# Troubleshooting

Start with the failing connection or operation, not a reinstall.

| Symptom | First checks |
| --- | --- |
| Panel unavailable | `docker compose ps`; logs for `panel` and `nginx`; public URL/proxy. |
| 419 or mixed-content login | HTTPS forwarding, trusted proxy addresses, current cookies and effective container environment. |
| Node offline or heartbeat timeout | Worker service/logs; DNS and HTTPS in both directions. |
| Installation pending | Queue health, operation logs, image/download access. |
| Cell exits immediately | Console output, selected image/shell, allocation port, writable paths. |
| Updated ports not applied | Stop/start; check pending configuration and assigned allocations. |
| Upload appears in root | Update compatible Panel/Worker files, then test a nested destination. |
| Missing Comb commands/variables | Updated Registry schema, full detail response, import/cache and saved Cell values. |
| Domain/certificate pending | Node proxy, public DNS/ports, ownership records and route status. |
| Instance/split operation locked | Operation state and logs; retry its supported recovery action. |

## Panel

```bash
cd /opt/hivepanel
docker compose ps
docker compose logs --tail=100 panel nginx queue
```

A value in the host `.env` is not proof that it reached the container:

```bash
docker compose exec panel printenv APP_URL
```

After an intended environment change, recreate the affected service and clear/rebuild the application's config cache through your deployment process. A restart alone does not apply changed Compose environment definitions.

## Worker

```bash
systemctl status hiveworker --no-pager -l
journalctl -u hiveworker -n 100 --no-pager
```

A DNS-resolution error differs from a timeout or HTTP 404. A registration 404 needs the registration URL/token checked; repeated restarts will not correct it. A recent heartbeat alone does not prove Panel can reach the Worker API.

For permission errors, check the managed Cell user's access and the image's writable directories. Do not solve them with `chmod -R 777`, privileged containers or disabling isolation.

## Ask for help

Include component versions, the action/time, relevant sanitized logs and whether it affects one Cell or the entire Node. Remove tokens, passwords and `.env` contents. Keep data and encryption keys intact while investigating.
