# Creating a Comb

Create a custom Comb when HivePanel does not already have a suitable definition for the game server or runtime you need.

## Start from the runtime

Choose the Docker image and working directory first. Confirm that the image contains the runtime dependencies required by the server.

## Define variables

Expose only the values administrators genuinely need to choose. Give each variable a sensible default where possible.

## Define installation

Make installation deterministic. Prefer official release endpoints and validate that downloaded files land in the working directory expected by the startup command.

## Define startup

Use variables for values that differ between Cells, such as version or memory, while keeping the command predictable.

## Test repeatedly

A Comb should work for a fresh Cell, not only for a directory that already contains files from an earlier manual test.
