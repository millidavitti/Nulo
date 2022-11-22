const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  lastUpdate: {
    type: Number,
    required: true,
  },
});

module.exports =
  mongoose.models.LastUpdateTime || mongoose.model("LastUpdateTime", schema);
