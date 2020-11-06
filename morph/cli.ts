import { join, parse } from './deps.ts';
import { serve } from './server.ts';

(async () => {
  const app = await import(join(Deno.cwd(), 'morph.config.ts'));

  const [command] = Deno.args;

  enum Command {
    Dev = 'dev',
    Build = 'build',
    Export = 'export',
    Start = 'start',
  }

  switch (command) {
    case Command.Dev: {
      serve(app);
      break;
    }
    case Command.Start: {
      serve(app);
      break;
    }
    default:
      console.warn(`${command} is not supported yet`);
      break;
  }
})();
