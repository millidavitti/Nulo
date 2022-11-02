const express = require("express");
const nulo = require("../../../server/model/post.mongo");
const api = express();

export default api.get("/api/users/:userID", async (req, res) => {
  const { userID } = req.params;
  console.log(req.params);
  const user = await nulo.findOne({ name: userID }, { __v: 0 });
  res.status(200).json(user);
});
