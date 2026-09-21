# Post-installation checks

Use a disposable Cell for the first test; do not put customer workloads on an unverified installation.

- [ ] Panel loads over HTTPS, administrator authentication works and `APP_DEBUG` is disabled.
- [ ] Application database connects; queue worker and Laravel scheduler run under the intended service account.
- [ ] The matching Worker connects to its Node and reports a healthy Docker runtime.
- [ ] Node allocations are configured and a test Cell installs, starts, responds on its port, stops and restarts.
- [ ] Console, file manager and SFTP work with the intended permissions.
- [ ] A backup can be created **and restored**; a scheduled task runs successfully.
- [ ] If using databases, assign an enabled database host to the Node and test create/connect/password reset/delete within the Cell's database limit.
- [ ] If importing existing servers, test with a disposable server first; verify files, database registration, allocations and preservation of source data before finalising.
- [ ] Back up the Panel database and `.env`/`APP_KEY` securely, and document the recovery process.

Continue with [Creating a Cell](/cells/creating-a-cell) or [Worker connectivity troubleshooting](/troubleshooting/worker-connectivity).
