const authorModel = require("../models/user.js");

const addAuthor = async (name) => {
  try {
    const doc = await authorModel.create({ name });
    const { id } = doc;
    return { status: "ok", payload: { id } };
  } catch (err) {
    return { status: "dublicate_name" };
  }
};

const findAuthor = async () => {
  const docs = await authorModel.find({});
  return docs;
};

const getAuthor = async (name) => {
  const docs = await authorModel.find({ name });
  return docs;
};

module.exports = {
  addAuthor,
  findAuthor,
  getAuthor,
};
