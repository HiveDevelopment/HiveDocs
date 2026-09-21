# Comb Startup Commands

The startup command launches the game server inside its Cell container.

## Keep it explicit

Commands should make the executable, primary server file and required arguments obvious.

## Use variables deliberately

Reference Comb variables for values administrators need to control, such as memory or server version dependent filenames.

## Runtime limits

Keep application runtime settings consistent with the Cell's actual container limits. For example, a Java heap should not be configured larger than the memory available to the Cell.
