# Cell Console

The console provides live output from the running Cell and lets authorised users send commands to the game server process.

## Reading output

Use console output when checking startup progress, diagnosing crashes or confirming that configuration changes were loaded.

## Sending commands

Commands entered through the console are sent to the running server process. They are not shell commands for the underlying Node.

::: warning Console access
Console access can be highly privileged for many game servers. Only grant it to users who should be able to administer that Cell.
:::
