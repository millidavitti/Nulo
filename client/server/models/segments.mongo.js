const mongoose = require("mongoose");

const schema = new mongoose.Schema({},{ strict: false });

module.exports = mongoose.models.Segments || mongoose.model("Segments", schema);
