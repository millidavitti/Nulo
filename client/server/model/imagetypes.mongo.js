const mongoose = require("mongoose");

const schema = new mongoose.Schema({},{ strict: false });

module.exports = mongoose.models.Imagetypes || mongoose.model("Imagetypes", schema);
