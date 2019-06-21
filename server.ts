import { serve } from 'https://deno.land/std/http/server.ts';

async function main() {
  const body = new TextEncoder().encode('Hello World\n');
  const reqs = serve(':8000');
  for await (const req of reqs) {
    console.log('req', req.url);
    req.respond({ body });
  }
}

main();
