/* eslint linebreak-style: ["error", "windows"] */
const mongoose = require("mongoose");

const { Schema } = mongoose;

const projModel = new Schema({
  sytemName: { type: String },
});

module.exports = mongoose.model("Project", projModel, "Projects");
