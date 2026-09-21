# Cell Startup Problems

Use this guide when installation succeeds but the Cell immediately stops or fails to become reachable.

## Read the console

The game server process usually reports why it exited. Common causes include missing files, invalid arguments, unsupported runtime versions and configuration errors.

## Verify startup command

Check that the command references the correct server file and that all variables resolve to valid values.

## Verify runtime image

The selected image must contain a compatible runtime for the server version being started.

## Verify resources

A Cell can fail during startup if it does not have enough memory or storage for the workload.
