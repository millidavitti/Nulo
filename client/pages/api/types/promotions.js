const express = require("express");
const connectdb = require("../../../server/db/connect");
const promotionsDB = require("../../../server/models/promotions.mongo");
const parseQuery = require("../../../server/utils/parseQuery");

const api = express();

export default api.get("/api/types/promotions", async (req, res) => {
  await connectdb();
  const { filters, pag } = parseQuery(req.query);
  const promotions = await promotionsDB
    .find(filters, { __v: 0 })
    .skip(+pag.from || 0)
    .limit(+pag.limit || 10);
  res.json(promotions);
});
