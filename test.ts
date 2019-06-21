const {
  Signal,
  args,
  build,
  execPath,
  isConsoleInstance,
  noColor,
  pid,
  platform,
  stderr,
  stdin,
  stdout,
  version
} = Deno;

test();

async function test() {
  console.log("Signal", Signal);
  console.log(args);
  console.log(build);
  console.log(execPath);
  console.log(isConsoleInstance);
  console.log(noColor);
  console.log(pid);
  console.log(platform);
  console.log(stderr);
  console.log(stdin);
  console.log(stdout);
  console.log(version);
}
