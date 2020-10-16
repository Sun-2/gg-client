import express from "express";
import * as fs from "fs";
import * as path from "path";
import { urlToPath } from "./utils/urlToPath";

const app = express();

app.get("/*.js", (req, res) => {
  const originalUrl = new URL(req.query.originalLink as string);
  const searchParams = new URLSearchParams(originalUrl.search);
  searchParams.append("redirect", "false");

  originalUrl.search = searchParams.toString();

  const urlAsPath = urlToPath(
    `${originalUrl.hostname}-${originalUrl.pathname}`
  );
  const filePath = path.join("assembled", urlAsPath);

  fs.access(filePath, (err) => {
    if (err) {
      res.redirect(originalUrl.toString());
      res.end();
    } else {
      fs.readFile(filePath, { encoding: "utf8" }, (err, data) => {
        res.send(data);
        res.end();
      });
    }
  });
});

app.listen(6969);
