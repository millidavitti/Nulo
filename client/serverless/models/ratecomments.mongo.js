const mongoose = require("mongoose");

const schema = new mongoose.Schema({},{ strict: false });

module.exports = mongoose.models.Ratecomments || mongoose.model("Ratecomments", schema);
