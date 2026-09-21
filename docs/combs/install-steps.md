# Comb Installation Steps

Installation steps prepare a new Cell before its first normal start.

## Downloads

Use stable, trustworthy sources and ensure the resulting filename matches what the startup command expects.

## Repeatability

Design installation so failures are easy to diagnose and a fresh attempt produces the same result.

## External APIs

If an installation step resolves a server version or build through an external API, treat that endpoint as a dependency of Cell installation and handle unavailable responses clearly.

## Validation

After installation, verify that all files required by the startup command are present before considering the Cell ready.
