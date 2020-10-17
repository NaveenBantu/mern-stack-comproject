/* eslint linebreak-style: ["error", "windows"] */
const mongoose = require("mongoose");

const { Schema } = mongoose;

const analyzeModel = new Schema({
    OSName: { type: String },
    count: { type: Number },
});

module.exports = mongoose.model("Analyze", analyzeModel, "Projects");
