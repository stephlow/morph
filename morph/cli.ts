import { join, parse } from './deps.ts';
import { serve } from './server.ts';

async function development(): Promise<void> {
  const { default: app } = await import(join(Deno.cwd(), 'morph.config.ts'));
  serve(app);
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
