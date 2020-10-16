import { parse } from "@babel/parser";
import { promises as fsp } from "fs";
import generate from "@babel/generator";
import fetch from "node-fetch";

(async () => {
  const url = ""

  const resp = await fetch("https://s1.gg.pl/6.19.0/js/start.js");
  const txt = await resp.text();

  try{
    await fsp.access("disassembled");
  } catch (e) {
    await fsp.mkdir("disassembled");
  }

  const ast = parse(txt);
  const promises = ast.program.body.map((node, i) =>
    fsp.writeFile(`./disassembled/${i}.js`, generate(node).code)
  );
  await Promise.all(promises);
})();
