import os from 'os'

export function filename() {
  let filepath = /(?<path>[^\(\s]+):[0-9]+:[0-9]+/.exec(
    new Error().stack!.split("\n").slice(2, 3)[0]!
  )!.groups!.path!;

  if (filepath.indexOf("file") >= 0) {
    filepath = new URL(filepath).pathname;
  }
  let filename = filepath;
  try {
    if (filename[0] === "/" && os.platform() === "win32") {
      filename = filename.slice(1);
    }
  } catch (_) {}
  return filename;
}
