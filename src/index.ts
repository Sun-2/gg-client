import express from 'express';
import * as fs from 'fs';
const app = express();

app.get('/script.js', (req, res) => {
  fs.readFile("./script.js", {encoding: "utf8"}, (err, data) => {
    res.send(data);
    res.end();
  });
});

app.listen(6969);