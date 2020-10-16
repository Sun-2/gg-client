import { parse } from "@babel/parser";
import * as fs from "fs";
import generate from "@babel/generator";

const code = fs.readFileSync("script.js", { encoding: "utf8" });
const parsed = parse(code);


let a = 0;
for (const node of parsed.program.body) {
  fs.writeFile(`./members/${a++}.js`, generate(node).code, () => {
    console.log(a);
  });
}
