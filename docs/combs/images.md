# Docker Images for Combs

The Docker image is the base runtime environment used by Cells created from a Comb.

## Include the runtime

Choose an image that contains the application runtime you need, such as the appropriate Java version for a Minecraft server.

## Keep images focused

Avoid adding unrelated software to an image. Smaller, purpose-built images are easier to update, audit and reproduce.

## Versioning

Pin or document image versions according to your release policy so an upstream image change does not unexpectedly alter existing installations.

## Custom images

If you publish HivePanel-specific runtime images, document their source and build process alongside the Comb that consumes them.
