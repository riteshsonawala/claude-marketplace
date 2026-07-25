# Sample Bundle Demo

Use this skill to verify that the sample-bundle plugin is installed and working correctly.

## What to do when invoked

Run the following checks in order and report results:

1. **Echo test** — call the `echo_message` tool from the `sample-utils` MCP with the message `"Hello from Claude Marketplace!"`. Report the response.

2. **File listing** — call the `list_files` tool with no arguments (lists the current directory). Report the first 10 files returned.

3. **Summary** — print a two-line result:
   - `✓ MCP connected` if both tool calls succeeded, or `✗ MCP not reachable` with the error if they failed.
   - `✓ Skill loaded` unconditionally (if you can read this, the skill is working).

If the MCP tools are not available, tell the user:
> Run `npm install` inside `plugins/sample-bundle/mcp/` then restart Claude Code.

## Example invocation

`/sample-bundle:demo`
