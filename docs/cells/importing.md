# Importing an Existing Server

Use the Cell importer to bring an existing game server into HivePanel without rebuilding it manually from scratch.

## Before importing

Create a backup of the source server and identify the Comb that best matches its runtime and startup requirements.

## During import

Place the server on a Node with enough storage for both the incoming data and normal runtime overhead. Keep the source server stopped while performing the final copy to avoid divergent data.

## After importing

Review the startup command, variables, ports and permissions. Start the Cell and check its console before directing production traffic to it.
