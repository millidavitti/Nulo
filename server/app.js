require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.static("./build"));
app.get("/", (req, res) => {});

module.exports = app;
