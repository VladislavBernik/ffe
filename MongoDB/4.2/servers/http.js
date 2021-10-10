const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const mainRouter = require("../routes/main.js");
const acpRouter = require("../routes/acp.js");

const server = express();

server.set("views", path.join(__dirname, "../views"));
server.set("view engine", "ejs");

server.use(logger("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, "../public")));

server.use("/", mainRouter);
server.use("/acp", acpRouter);

server.use(function (req, res, next) {
  next(createError(404));
});

server.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.server.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

module.exports = server;
