import { promises as fsp } from "fs";
import path from "path";
import { urlToPath } from "./utils/urlToPath";
import { createDirIfNotExists } from "./utils/createDirIfNotExists";

(async () => {
  const urlString = process.argv[2];
  const url = new URL(urlString);
  const urlAsPath = urlToPath(`${url.hostname}-${url.pathname}`);
  const dirPath = path.join("disassembled", urlAsPath);

  const members = await fsp.readdir(dirPath);
  members.sort((a, b) => {
    const aDigits = parseInt(a.match(/^\d+\./)![0]);
    const bDigits = parseInt(b.match(/^\d+\./)![0]);
    return aDigits > bDigits ? 1 : -1;
  });

  const code = await Promise.all(
    members.map((fileName) =>
      fsp.readFile(path.join(dirPath, fileName), { encoding: "utf8" })
    )
  );

  await createDirIfNotExists("assembled");

  await fsp.writeFile(`assembled/${urlAsPath}`, code.join(";\n"));
})();
