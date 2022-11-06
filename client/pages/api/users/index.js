const express = require("express");
const connectdb = require("../../../server/db/connect");
const nulo = require("../../../server/model/post.mongo");
const api = express.Router();

api.get("/api/users", async (_, res) => {
  connectdb();
  const users = await nulo.find({}, { __v: 0 });
  res.status(200).json(users);
});

api.post("/api/users", async (req, res) => {
  connectdb();
  const { name } = req.body;
  await nulo.findOneAndUpdate({ name }, req.body, {
    upsert: true,
  });
  const user = await nulo.findOne({ name }, { __v: 0 });
  res.status(201).json(user);
});
export default api;
