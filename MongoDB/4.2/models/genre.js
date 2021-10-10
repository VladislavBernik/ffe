const path = require("path");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const generalSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
    unique: true,
    minlength: 2,
    maxlength: 255,
  },
});

const modelname = path.basename(__filename, ".js");

const model = mongoose.model(modelname, generalSchema);
module.exports = model;
