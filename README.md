# Vanguard International Automotive website

Static Astro website for Vanguard International Automotive L.L.C.

## Requirements

- Node.js 22.12 or newer
- npm

## Development

Install dependencies:

```sh
npm ci
```

Start Astro in background mode:

```sh
npm run astro -- dev --background
```

Manage the background server with:

```sh
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

## Quality checks

Type-check Astro components:

```sh
npm run check
```

Create the production build:

```sh
npm run build
```

Run the Chromium smoke tests against a production build:

```sh
npx playwright install chromium
npm run test:e2e
```

The Playwright configuration builds the site automatically for local test runs. CI runs type checking, an explicit production build, and the same smoke tests on every push and pull request.

## Project structure

- `src/pages/` — Astro routes
- `src/layouts/` — shared document layout and metadata
- `src/components/` — page sections and UI
- `src/data/` — typed business and service content
- `src/styles/` — Tailwind entry point and global design system
- `tests/e2e/` — Playwright browser smoke tests
