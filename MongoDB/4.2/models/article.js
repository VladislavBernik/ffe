const path = require("path");
const mongoose = require("mongoose");
const { Schema } = mongoose;

require("./user");
require("./genre");

const generalSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
    minlength: 1,
    maxlength: 255,
    unique: true,
  },
  genre: [
    {
      type: Schema.Types.ObjectId,
      ref: "genre",
    },
  ],
  author: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  createDate: {
    type: Schema.Types.Date,
    default: Date.now,
  },
});

const modelname = path.basename(__filename, ".js");

const model = mongoose.model(modelname, generalSchema);
module.exports = model;
