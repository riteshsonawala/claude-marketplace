# Frontend Bundle Setup

Use this skill to verify and configure the Frontend bundle after installation.

## What this skill does

When invoked, check that the Frontend bundle MCPs are available and guide the user through any required configuration:

1. **Playwright MCP** — verify Playwright browsers are installed by running `npx playwright install --dry-run`. If missing, tell the user to run `npx playwright install`.

2. **Figma MCP** — check if `FIGMA_TOKEN` env var is set. If not, prompt the user to generate a Figma personal access token at figma.com/settings and export it: `export FIGMA_TOKEN=<token>`.

After checking each tool, summarise what's ready and what needs attention. One line per tool with ✓ or ✗ status.

## Example invocation

`/frontend-bundle:setup`
