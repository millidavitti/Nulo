const mongoose = require("mongoose");

const schema = new mongoose.Schema({}, { strict: false });

module.exports =
  mongoose.models.Countries || mongoose.model("Countries", schema);
