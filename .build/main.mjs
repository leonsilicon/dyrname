import path from 'pathe';
import os from 'os';

function dirname() {
  let filepath = /(?<path>[^\(\s]+):[0-9]+:[0-9]+/.exec(
    new Error().stack.split("\n").slice(2, 3)[0]
  ).groups.path;
  if (filepath.indexOf("file") >= 0) {
    filepath = new URL(filepath).pathname;
  }
  let dirname2 = path.dirname(filepath);
  try {
    if (dirname2[0] === "/" && os.platform() === "win32") {
      dirname2 = dirname2.slice(1);
    }
  } catch (_) {
  }
  return dirname2;
}

function filename() {
  let filepath = /(?<path>[^\(\s]+):[0-9]+:[0-9]+/.exec(
    new Error().stack.split("\n").slice(2, 3)[0]
  ).groups.path;
  if (filepath.indexOf("file") >= 0) {
    filepath = new URL(filepath).pathname;
  }
  let filename2 = filepath;
  try {
    if (filename2[0] === "/" && os.platform() === "win32") {
      filename2 = filename2.slice(1);
    }
  } catch (_) {
  }
  return filename2;
}

export { dirname, filename };
