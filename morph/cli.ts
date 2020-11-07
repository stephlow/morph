import { join, parse } from './deps.ts';
import { serve } from './server.ts';

import { Application, Route } from './types.d.ts';

async function getApp(): Promise<Application> {
  const { default: app } = await import(join(Deno.cwd(), 'morph.config.ts'));
  return Promise.resolve(app);
}

async function development(): Promise<void> {
  const app = await getApp();

  serve(app);
}

async function routes(): Promise<void> {
  const app = await getApp();

  const reducer =
    (acc: string, { path, getServerSideProps }: Route) =>
      `${acc}\n[${!!getServerSideProps ? 'SSR' : 'SSG'}] ${path}`;

  const message = app.routes.reduce(reducer, `Application routes:`);

  console.log(message);
}

interface Command {
  [key: string]: {
    handler: any;
    description: string;
  };
}

const commands: Command = {
  'dev': {
    handler: development,
    description: 'Start the application in development mode',
  },
  'routes': {
    handler: routes,
    description: 'List all the application routes',
  },
};

const HELP_MESSAGE = `morph
Morph command line interface.

Usage:
  morph <command> [...options]

Commands:
  ${Object.entries(commands).map(([command, { description }]) => `${command}: ${description}`).join('\n  ')}
`;

if (import.meta.main) {
  const [command] = Deno.args;
  const match = commands[command];

  if (match) {
    match.handler();
  } else {
    console.log(HELP_MESSAGE);
  }
}
