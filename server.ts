import { serve } from "https://deno.land/std@v0.5/http/server.ts";

async function main() {
  const body = new TextEncoder().encode("Hello World\n");
  for await (const req of serve(":8888")) {
    req.respond({ body });
  }
  console.log('started');
}

main();
