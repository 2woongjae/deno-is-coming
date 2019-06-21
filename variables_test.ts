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

(async () => {
  console.log("Signal", Signal);
  console.log("args", args);
  console.log("build", build);
  console.log("execPath", execPath);
  console.log("isConsoleInstance", isConsoleInstance);
  console.log("noColor", noColor);
  console.log("pid", pid);
  console.log("platform", platform);
  console.log("stderr", stderr);
  console.log("stdin", stdin);
  console.log("stdout", stdout);
  console.log("version", version);
})();
