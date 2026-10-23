# Publish the SDK

This guide is for maintainers of [`@hivedevelopment/nectar`](https://www.npmjs.com/package/@hivedevelopment/nectar). Extension authors normally distribute `.nectar` archives through Panel, not npm; see [testing and packaging](./testing).

The SDK repository is [HiveDevelopment/NectarSDK](https://github.com/HiveDevelopment/NectarSDK). Version **0.3.0 has been published** and cannot be published again.

## Prepare a release

From an up-to-date SDK checkout, with Node.js 24:

```bash
npm ci
npm test
```

Update the changelog and documentation, then increment the package version for the changes you intend to release. For a patch release:

```bash
npm version patch --no-git-tag-version
npm publish --dry-run --access public
```

Commit and push the release changes, including `package.json` and `package-lock.json`. Wait for the SDK checks on Windows/Linux and Node 22/24 before publishing. A dry run checks packaging but does not publish or validate a trusted publisher; it can still reject an already-used version.

Check the npm version and repository metadata before publishing. `package.json` must identify `@hivedevelopment/nectar` and use `git+https://github.com/HiveDevelopment/NectarSDK.git` as its repository URL.

## GitHub trusted publishing

In the npm package settings, configure this GitHub Actions trusted publisher:

| Setting | Value |
| --- | --- |
| Organization or user | `HiveDevelopment` |
| Repository | `NectarSDK` |
| Workflow filename | `publish.yml` |
| Allowed action for the supplied workflow | `npm publish` |

The workflow lives at `.github/workflows/publish.yml`. It requires `id-token: write`, uses Node 24 and publishes with provenance from `main`. No long-lived npm publish token is needed for this OIDC flow.

After pushing a new, unused version and passing checks, open **Actions → Publish npm package → Run workflow** and select `main`.

**Pending validation** means npm has not yet seen a successful publish using this configuration. Complete a successful workflow publication before the deadline shown in the npm settings; a local publish or a dry run does not validate the GitHub publisher.

For current requirements and setup, consult [npm's trusted publishing documentation](https://docs.npmjs.com/trusted-publishers/).

## Interactive publication

An npm account with publishing access to the `hivedevelopment` scope can also publish locally. Enable account 2FA through npm's website, then run:

```bash
npm login --auth-type=web
npm whoami
npm publish --dry-run --access public
npm publish --access public
```

Follow the browser authentication prompts. Browser login alone does not enable 2FA. A local publication does not validate the GitHub trusted publisher.

## Staged packages and placeholders

A package described as **Temporary package placeholder for staged publishing** is not evidence that the intended SDK version is live. Staging a new package creates a placeholder while the actual version awaits approval.

Use a compatible npm CLI to inspect staged versions:

```bash
npm stage list @hivedevelopment/nectar
npm stage view YOUR_STAGE_ID
```

Review the submission, then approve it using the npm website's **Staged Packages** tab or:

```bash
npm stage approve YOUR_STAGE_ID
```

Approval requires 2FA. Do not try to publish the same version again while it is staged. See [npm's staged publishing guide](https://docs.npmjs.com/staged-publishing/).

## Verify publication

Query the exact release you published; for example:

```bash
npm view @hivedevelopment/nectar@0.3.0 version
```

If it returns `0.3.0`, that release is live. If a version is already live, make changes in a new version instead of attempting to overwrite it.

Finally, run the [npm quick start](./quick-start) in a fresh directory with the released version. Confirm generation, dependency installation, build, validation and packaging, then test the generated archive on a development Panel.
