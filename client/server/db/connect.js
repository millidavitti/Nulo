require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connection.once("open", () => {
  console.log("Connection to database successful");
});

mongoose.connection.on("error", (error) => {
  console.log(error);
});

function connectdb() {
  if (mongoose.connection.readyState) return;
  mongoose.connect(process.env.MONGO_URI);
}

module.exports = connectdb;
