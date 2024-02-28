import path from "pathe";
import os from "os";

export function dirname() {
  let filepath = /(?<path>[^\(\s]+):[0-9]+:[0-9]+/.exec(
    new Error().stack!.split("\n").slice(2, 3)[0]!
  )!.groups!.path!;

  if (filepath.indexOf("file") >= 0) {
    filepath = new URL(filepath).pathname;
  }
  let dirname = path.dirname(filepath);
  try {
    if (dirname[0] === "/" && os.platform() === "win32") {
      dirname = dirname.slice(1);
    }
  } catch (_) {}

  return dirname;
}
