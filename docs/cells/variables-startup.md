# Variables and Startup

Combs can expose variables that are used during installation or when building the Cell startup command.

## Variables

Variables let one Comb support multiple versions or configurations without duplicating the entire server definition.

Examples include:

- server version
- memory value
- downloadable build
- runtime flags
- application-specific options

## Startup command

The startup command is the command Worker runs inside the Cell container to start the game server.

When changing it, preserve any variables or arguments required by the Comb and runtime image.
