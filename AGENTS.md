# Project Guidelines

## Project Shape

- This repository is a TypeScript Playwright end-to-end test portfolio; test files live in `tests/`.
- The configured browser projects are Chromium, Firefox, and WebKit. Keep tests portable across all three unless a test explicitly targets one project.
- There is no local application server or `baseURL`; current tests navigate directly to public sites.

## Build and Test

- Install dependencies with `npm install` (use `npm ci` in CI), then install browsers with `npx playwright install`.
- Run the full suite with `npx playwright test`.
- Run a focused test with `npx playwright test tests/<file>.spec.ts` or a project with `--project=chromium`.
- Inspect the HTML report with `npx playwright show-report` after a run.
- `package.json` has no npm scripts; use the Playwright CLI directly.

## Test Conventions

- Prefer accessible, role-based locators such as `getByRole` and Playwright web-first assertions such as `toHaveTitle`, `toBeVisible`, and `toHaveValue`.
- Tests depend on live external sites, so network availability, redirects, consent pages, throttling, and upstream UI changes can affect results.
- Preserve the existing Playwright configuration unless the task requires a deliberate change to browser projects, retries, reporters, or web-server behavior.

## Repository Boundaries

- Treat `playwright-report/` and `test-results/` as generated output; do not edit or commit them.
- Read [README.md](README.md) for the project overview and basic setup. Read [playwright.config.ts](playwright.config.ts) for the authoritative test configuration.
- CI runs `npm ci`, `npx playwright install --with-deps`, and `npx playwright test` on pushes and pull requests targeting `main` or `master`.