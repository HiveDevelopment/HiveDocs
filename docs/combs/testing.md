# Test a Comb

Use a disposable Cell and the same managed Docker runtime as production.

1. Validate and import the complete Registry manifest.
2. Install, then inspect the operation logs and resulting files.
3. Start it under the Cell UID/GID and assigned port.
4. Check console output, shutdown, configuration pages and client connectivity.
5. Change a variable/image and allocation, then stop/start again.
6. Review reinstall and file-replacement behaviour before offering it to users.

Check any game-specific pages and preinstall offers too. A successful image pull does not prove the workload can write its caches, bind its port or run without root.
