import express from "express";
import * as fs from "fs";
import fetch from "node-fetch";
import * as path from "path";

const app = express();

app.get("/*.js", (req, res) => {
  const originalUrl = new URL(req.query.originalLink as string);
  const searchParams = new URLSearchParams(originalUrl.search);
  searchParams.append("redirect", "false");

  originalUrl.search = searchParams.toString();

  const filePath = originalUrl.pathname.replace("/", "");
  fs.access(path.join("assembled", filePath), (err) => {
    if (err) {
      res.redirect(originalUrl.toString());
      res.end();
    } else {
      fs.readFile(
        path.join("assembled", filePath),
        { encoding: "utf8" },
        (err, data) => {
          res.send(data);
          res.end();
        }
      );
    }
  });
});

app.listen(6969);
