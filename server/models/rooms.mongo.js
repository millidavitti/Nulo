const mongoose = require("mongoose");

const schema = new mongoose.Schema({}, { strict: false });

module.exports = mongoose.models.Rooms || mongoose.model("Rooms", schema);
