const express = require("express");
const server = express();

const urlencodedParser = server.use(express.urlencoded({ extended: false }));

server.get("/file", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

server.post("/output", (req, res) => {
  if (!req.body) {
    return res.sendStatus(400);
  }
  console.log(req.body.user);
  res.send(`${req.body.user}`);
});

server.get("/", function(req, res){
  res.send("Главная страница");
});

server.listen(3000);
