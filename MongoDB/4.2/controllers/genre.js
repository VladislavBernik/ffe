const genreModel = require("../models/genre.js");

const addGenre = async (name) => {
  try {
    const doc = await genreModel.create({ name });
    const { id } = doc;
    return { status: "ok", payload: { id } };
  } catch (err) {
    return { status: "dublicate_name" };
  }
};

const findGenre = async () => {
  const docs = await genreModel.find({});
  return docs;
};

const getGenre = async (name) => {
  const docs = await genreModel.find({ name });
  return docs;
};

module.exports = {
  addGenre,
  findGenre,
  getGenre,
};
