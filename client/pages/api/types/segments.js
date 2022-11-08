const express = require("express");
const connectdb = require("../../../server/db/connect");
const segmentsDB = require("../../../server/models/segments.mongo");
const parseQuery = require("../../../server/utils/parseQuery");

const api = express();

export default api.get("/api/types/segments", async (req, res) => {
  connectdb();
  const { filters, pag } = parseQuery(req.query);
  const segments = await segmentsDB
    .find(filters, { __v: 0 })
    .skip(+pag.from || 0)
    .limit(+pag.limit || 10);
  res.json(segments);
});
