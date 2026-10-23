# Backups and recovery

Keep copies outside the machine they protect:

| Data | Why it matters |
| --- | --- |
| Panel database | Accounts, Cells, configuration and assignments. |
| Panel `.env` and original `APP_KEY` | Connection settings and encrypted secrets. |
| Persistent Compose volumes | Database and application state. |
| Worker configuration and data | Registration, definitions, allocations, proxy/firewall/instance state. |
| Cell files and inactive instances | Actual workload content. |
| External databases | Not automatically covered by a Cell file backup. |

Use database-aware backups and test restores. Stopping a Compose stack does not mean its volumes are backed up; `down --volumes` removes them.

Restore into an isolated environment first. Verify sign-in, Worker connectivity, files and external dependencies before switching clients. Do not generate a replacement encryption key for restored data.
