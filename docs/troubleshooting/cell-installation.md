# Cell Installation Failures

A failed Cell installation usually points to the Comb, an external download dependency, storage or the Node runtime.

## Review installation output

Start with the installation status and Worker logs. Look for the first real error rather than the later failures it caused.

## Check the Comb

Verify the requested version exists, the installation URL is valid and the expected output filename matches the startup command.

## Check Node resources

Confirm the Node has free disk space and can reach any external APIs or download hosts required by the Comb.

## Reproduce with a fresh Cell

If possible, test the same Comb and variables on a new Cell. This helps separate a definition problem from corrupted existing files.
