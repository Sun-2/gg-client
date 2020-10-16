import { promises as fsp } from "fs";

console.log(process.argv);
process.exit();

(async () => {
  const members = await fsp.readdir("disassembled");

  const code = await Promise.all(
    members.map((fileName) =>
      fsp.readFile("disassembled/" + fileName, {encoding: "utf8"})
    )
  );

  try {
    await fsp.access("assembled");
  } catch (e) {
    await fsp.mkdir("assembled");
  }

  await fsp.writeFile("assembled/start.js", code.join(";\n"));
})();
