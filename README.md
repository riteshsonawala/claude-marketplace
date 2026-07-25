# Claude Marketplace

Curated plugin bundles for common development workflows. Install an entire profile in one command instead of discovering and configuring tools one by one.

## Add this marketplace

```bash
claude plugin marketplace add <github-owner>/claude-marketplace
```

## Available bundles

| Bundle | Category | What's included |
|--------|----------|-----------------|
| `devops-bundle` | devops, infrastructure | GitHub MCP, Docker MCP, Kubernetes MCP + `/devops-bundle:setup` |
| `frontend-bundle` | frontend, web | Playwright MCP, Figma MCP + `/frontend-bundle:setup` |
| `data-science-bundle` | data-science, ml | Jupyter MCP, SQLite MCP + `/data-science-bundle:setup` |

## Install a bundle

```bash
# Install a single bundle
claude plugin install devops-bundle@claude-marketplace

# Then run the setup skill to verify and configure it
/devops-bundle:setup
```

Restart Claude Code after installing — new MCP servers become active on the next session.

## Adding a new bundle

1. Create a folder under `plugins/<your-bundle-name>/`
2. Add `.claude-plugin/plugin.json` with name, description, version, categories
3. Add `.mcp.json` listing the MCP servers to include
4. Add `skills/setup/SKILL.md` with a setup/verification skill
5. Register it in `.claude-plugin/marketplace.json` under `plugins`

## Structure

```
claude-marketplace/
├── .claude-plugin/
│   └── marketplace.json        # plugin registry
└── plugins/
    ├── devops-bundle/
    │   ├── .claude-plugin/plugin.json
    │   ├── .mcp.json
    │   └── skills/setup/SKILL.md
    ├── frontend-bundle/
    └── data-science-bundle/
```
