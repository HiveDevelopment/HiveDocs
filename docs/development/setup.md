# Source development

Use each repository's dependency files for required versions. Run local services in an isolated development environment.

## Panel

```bash
composer install
npm ci
```

Create local configuration from `.env.example`, provide development database/Redis services, generate a development key and run migrations. Use the repository's development scripts; `npm run build` checks production assets. Never reuse production credentials or run fresh/reset migrations against production.

## Worker

```bash
go test ./...
go build -o hiveworker ./cmd/daemon
```

Use a development Node configuration and disposable Cell directories. Managed identity/Docker features need Linux; building the binary elsewhere does not supply a supported production Node.

## Registry and documentation

Registry: `npm ci`, `npm test`, then `npm run dev`.

Documentation: `npm ci`, `npm run docs:dev`; check changes with `npm run docs:build`. Do not commit `.env`, dependencies or generated build output.
