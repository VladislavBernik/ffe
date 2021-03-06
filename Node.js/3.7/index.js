const express = require("express");
const path = require("path");
const server = express();
const mainRoute = require("./routes/main.js");

server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");

server.use(express.static(__dirname + "public"));

server.use("/", mainRoute);

server.listen(3000);
