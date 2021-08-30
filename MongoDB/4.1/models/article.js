const mongoose = require("mongoose");
const { Schema } = mongoose;

const generalSchema = new Schema({
  autor: {
    type: Schema.Types.String,
  },
  name: {
    type: Schema.Types.String,
    maxLength: 255,
  },
  topic: {
    type: Schema.Types.String,
    maxLength: 255,
  },
  date: {
    type: Schema.Types.Date,
    default: Date.now,
  },
  text: {
    type: Schema.Types.String,
    default: "",
  },
});

const model = mongoose.model("article", generalSchema);
module.exports = model;
