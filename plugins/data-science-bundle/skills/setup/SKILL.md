# Data Science Bundle Setup

Use this skill to verify and configure the Data Science bundle after installation.

## What this skill does

When invoked, check that the Data Science bundle MCPs are available and guide the user through any required configuration:

1. **Jupyter MCP** — check if a Jupyter server is running. If `JUPYTER_TOKEN` is not set, guide the user to start Jupyter with `jupyter lab --no-browser` and export the token shown in the output: `export JUPYTER_TOKEN=<token>`.

2. **SQLite MCP** — check if `DB_PATH` env var is set. If not, prompt the user to point it at their database file: `export DB_PATH=/path/to/your.db`. If they don't have one yet, offer to create a blank database.

After checking each tool, summarise what's ready and what needs attention. One line per tool with ✓ or ✗ status.

## Example invocation

`/data-science-bundle:setup`
