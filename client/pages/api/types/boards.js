const express = require("express");
const connectdb = require("../../../server/db/connect");
const boardsDB = require("../../../server/models/boards.mongo");
const parseQuery = require("../../../server/utils/parseQuery");

const api = express();

export default api.get("/api/types/boards", async (req, res) => {
  await connectdb();
  const { filters, pag } = parseQuery(req.query);
  const boards = await boardsDB
    .find(filters, { __v: 0 })
    .skip(+pag.from || 0)
    .limit(+pag.limit || 10);
  res.json(boards);
});
