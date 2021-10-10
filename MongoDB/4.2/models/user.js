const path = require("path");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const generalSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
    minlength: 2,
    maxlength: 255,
    unique: true,
  },
});

const modelname = path.basename(__filename, ".js");
const model = mongoose.model(modelname, generalSchema);
module.exports = model;
