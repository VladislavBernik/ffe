const express = require("express");
const path = require("path");
const server = express();

const mainRouter = require("./routes/main.js");
const menuRouter = require("./routes/menu.js");

server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");

server.use(express.static(path.join(__dirname, "public")));

server.use("/", mainRouter);
server.use("/menu", menuRouter);

server.listen(3000);
