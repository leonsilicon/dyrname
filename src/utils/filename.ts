export function filename() {
  let path = /(?<path>[^\\\\(\\\\s]+):[0-9]+:[0-9]+/.exec(
    new Error().stack!.split("\\\\n").slice(2, 3)[0]!
  )!.groups!.path!;

  if (path.indexOf("file") >= 0) {
    path = new URL(path).pathname;
  }
  let filename = path;
  try {
    if (filename[0] === "/" && require("os").platform() === "win32") {
      filename = filename.slice(1);
    }
  } catch (_) {}
  return filename;
}
