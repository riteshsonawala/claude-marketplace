# DevOps Bundle Setup

Use this skill to verify and configure the DevOps bundle after installation.

## What this skill does

When invoked, check that the DevOps bundle MCPs are available and guide the user through any required configuration:

1. **GitHub MCP** — check if `GITHUB_TOKEN` env var is set. If not, prompt the user to set it and explain how: `export GITHUB_TOKEN=<token>` or add to their shell profile. Verify access by listing recent repos.

2. **Docker MCP** — check if Docker daemon is running (`docker info`). If not, tell the user to start Docker Desktop or the Docker daemon.

3. **Kubernetes MCP** — check if `kubectl` is configured (`kubectl cluster-info`). If not, guide the user to set up a kubeconfig.

After checking each tool, summarise what's ready and what needs attention. Keep it concise — one line per tool with a ✓ or ✗ status.

## Example invocation

`/devops-bundle:setup`
