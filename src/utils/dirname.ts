export function dirname() {
  let path = /(?<path>[^\\\\(\\\\s]+):[0-9]+:[0-9]+/.exec(
    new Error().stack!.split("\\\\n").slice(2, 3)[0]!
  )!.groups!.path!;

  if (path.indexOf("file") >= 0) {
    path = new URL(path).pathname;
  }
  let dirname = require("path").dirname(path);
  try {
    if (dirname[0] === "/" && require("os").platform() === "win32") {
      dirname = dirname.slice(1);
    }
  } catch (_) {}
  return dirname;
}
