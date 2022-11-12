const express = require("express");
const connectdb = require("../../../server/db/connect");
const ratecommentsDB = require("../../../server/models/ratecomments.mongo");
const parseQuery = require("../../../server/utils/parseQuery");

const api = express();

export default api.get("/api/types/ratecommentdetails", async (req, res) => {
  await connectdb();
  const { filters, pag } = parseQuery(req.query);
  const ratecomments = await ratecommentsDB
    .find(filters, { __v: 0 })
    .skip(+pag.from || 0)
    .limit(+pag.limit || 10);
  res.json(ratecomments);
});
