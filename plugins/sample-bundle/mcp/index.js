import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import { readdir } from 'fs/promises';
import { resolve } from 'path';

const server = new Server(
  { name: 'sample-utils', version: '1.0.0' },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: 'echo_message',
      description: 'Echoes back a message. Use this to confirm the MCP is connected.',
      inputSchema: {
        type: 'object',
        properties: {
          message: { type: 'string', description: 'The message to echo back' },
        },
        required: ['message'],
      },
    },
    {
      name: 'list_files',
      description: 'Lists files in a directory.',
      inputSchema: {
        type: 'object',
        properties: {
          path: {
            type: 'string',
            description: 'Directory path to list. Defaults to current working directory.',
          },
        },
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === 'echo_message') {
    return {
      content: [{ type: 'text', text: `Echo from sample-utils MCP: "${args.message}"` }],
    };
  }

  if (name === 'list_files') {
    const dir = resolve(args.path ?? '.');
    const files = await readdir(dir);
    return {
      content: [{ type: 'text', text: `Files in ${dir}:\n${files.join('\n')}` }],
    };
  }

  throw new Error(`Unknown tool: ${name}`);
});

const transport = new StdioServerTransport();
await server.connect(transport);
