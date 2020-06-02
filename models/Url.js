const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  code: String,
  url: String,
  createdAt: { type: String, default: new Date().toISOString() },
});

module.exports = mongoose.model("Url", urlSchema);
