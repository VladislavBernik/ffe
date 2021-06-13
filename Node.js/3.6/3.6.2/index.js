const express = require("express");
const server = express();

const jsonParser = express.json();

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.post("/user", jsonParser, (req, res) => {
  console.log(req.body);

  if (!req.body) {
    return res.sendStatus(400);
  }

  res.json(req.body);
});

server.listen(3000);
