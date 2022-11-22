const express = require("express");
const cors = require("cors");
const batchProcess = require("./utils/batch.process");
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.get("/", (_, res) => {
  batchProcess();
  res.json({ status: "Batching in progress" });
});

module.exports = app;
