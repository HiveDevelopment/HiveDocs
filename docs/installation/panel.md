# Install Panel

Run the official installer in an interactive terminal on the Panel host:

```bash
curl -fsSL https://get.hivepanel.dev | sudo bash
```

The installer configures the host, deploys the Docker Compose stack and creates your first administrator. Follow its prompts for the public Panel URL, administrator details and access method.

## Choose how users reach Panel

- **Direct access:** point your domain at the host and use the installer's web/TLS setup.
- **Existing reverse proxy:** select that option and forward to the HTTP port chosen during installation. Do not assume the port is always 8090.

The public Panel URL must match the URL users and Workers open. Keep HTTPS forwarding headers intact when TLS terminates at a proxy. See [networking](/nodes/networking).

## Check the stack

The default installation directory is `/opt/hivepanel`:

```bash
cd /opt/hivepanel
docker compose ps
docker compose logs --tail=80 panel nginx queue
```

Open your Panel URL and sign in. Then [add a Worker](/installation/worker).

Keep the generated `.env`, application encryption key and persistent volumes backed up. **Reinstall is destructive; use repair or update for an existing deployment.**
