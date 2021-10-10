const mongoose = require("mongoose");
const db = require("../../storages/db");

const { url, options } = require("../../config").db;

const init = () =>
  new Promise((resolve, reject) => {
    mongoose.connect(url, options);
    db.on("error", (err) => {
      console.log("DB err:", err);
    });

    db.once("open", () => {
      console.log("Coinnected to DB");
      resolve();
    });

    db.once("close", () => {
      console.log("Close connected to DB");
    });
  });

module.exports = init;
