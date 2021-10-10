require("../bin/runners/db");
const axios = require("axios");
const articleModel = require("../models/article.js");

const findAllBooks = async () => {
  const docs = await articleModel.find({}).populate("author").populate("genre");
  return docs;
};

const findBook = async (val) => {
  const docs = await articleModel
    .find({ name: val })
    .populate("author")
    .populate("genre");
  return docs;
};

module.exports = {
  findAllBooks,
  findBook,
};
