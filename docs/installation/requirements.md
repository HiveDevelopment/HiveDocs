# Requirements

## Panel host

- A Linux host supported by the installer, with administrative shell access.
- A domain pointing to the host, or an existing reverse proxy that can reach it.
- Available web ports and outbound access to release and container registries.

The installer checks or installs Docker and Compose. The Panel stack supplies the application runtime and supporting services.

## Worker host

- Linux with Docker running, plus systemd for the installed Worker service.
- Enough memory, CPU and disk for the Cells you plan to host.
- Network access to Panel, required images and downloads.
- Available game/application allocations and the configured Worker/SFTP ports.

Use a VM or host where you can control Docker, storage and published ports. A Node behind home NAT needs forwarding, a suitable private network, or a tunnel that supports the required traffic. See [networking](/nodes/networking).
