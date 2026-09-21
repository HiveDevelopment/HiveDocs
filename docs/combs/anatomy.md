# Comb Anatomy

A Comb collects the information Worker needs to create and operate a particular kind of Cell.

## Identity

Use a stable identifier, display name, game name and useful tags so administrators can recognise the server type.

## Runtime image

The image defines the base runtime used by the Cell, such as a Java image for a Minecraft server.

## Working directory

The working directory is where the server process expects its files inside the container.

## Environment and mounts

Environment variables configure runtime behaviour. Mounts map persistent Cell data into the container.

## Startup

The startup field defines the command used to launch the game server and can reference Comb variables.

## Variable schema

Variables define administrator-supplied values such as version or memory.

## Install steps

Install steps obtain or prepare the application before its first start.
