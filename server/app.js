const express = require("express");
const batchProcess = require("../client/server/utils/batch.process");
const app = express();

app.get("/", (req, res) => {
  batchProcess();
  res.json({ status: "Batching in progress" });
});

module.exports = app;