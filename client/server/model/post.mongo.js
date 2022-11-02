const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  gender: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.models.Nulo || mongoose.model("Nulo", postSchema);
