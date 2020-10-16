import { promises as fsp } from "fs";
import { sep, join } from "path";

export const createDirIfNotExists = async (path: string) => {
  const segments = path.split(sep).filter((segment) => Boolean(segment));

  if (!segments.length) throw new Error("Path must not be empty.");

  let currPath = "";
  for (const segment of segments) {
    currPath = join(currPath, segment);
    try {
      await fsp.access(currPath);
    } catch (e) {
      await fsp.mkdir(currPath);
    }
  }
};
