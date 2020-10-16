import { parse } from "@babel/parser";
import { promises as fsp } from "fs";
import generate from "@babel/generator";
import fetch from "node-fetch";
import { createDirIfNotExists } from "./utils/createDirIfNotExists";
import * as path from "path";
import { strHash } from "./utils/strHash";
import { urlToPath } from "./utils/urlToPath";

(async () => {
  const urlString = process.argv[2];
  const url = new URL(urlString);

  const resp = await fetch(urlString);
  const txt = await resp.text();

  const urlAsPath = urlToPath(`${url.hostname}-${url.pathname}`);

  const dirPath = path.join("disassembled", urlAsPath);
  await createDirIfNotExists(dirPath);

  const ast = parse(txt);
  const promises = ast.program.body.map((node, i) =>
    fsp.writeFile(path.join(dirPath, `${i}.js`), generate(node).code)
  );
  await Promise.all(promises);
})();
