const express = require("express");
const path = require("path");
const server = express();

const mainRouter = require("./routes/main.js");
const testRouter = require("./routes/test.js");

server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");

server.use(express.static(path.join(__dirname, "public")));

server.use("/", mainRouter);
server.use("/test", testRouter);

server.listen(3000);
