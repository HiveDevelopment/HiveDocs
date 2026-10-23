# Combs

A Comb defines a Cell's runtime image, installation, startup, variables and workload-specific controls. It can describe Minecraft, another game, a website, a database or a bot.

Import shared templates from **HiveRegistry**. For a private/local template, use **Admin → Combs → Create** and paste its JSON. Review the console and shutdown fields before saving; editing those fields updates the manifest.

- [Author a Comb](/combs/anatomy)
- [Variables and images](/combs/variables)
- [Installation recipes](/combs/install-steps)
- [Test a Comb](/combs/testing)

An image supplies the software runtime. A Comb installs/configures the Cell files and controls how that image is used; a reusable template should not depend on host-installed Java, Node.js or writable system cache folders.
