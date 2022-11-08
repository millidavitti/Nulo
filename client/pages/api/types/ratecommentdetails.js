const express = require("express");
const connectdb = require("../../../server/db/connect");
const ratecommentdetailsDB = require("../../../server/models/ratecommentdetails.mongo");
const parseQuery = require("../../../server/utils/parseQuery");

const api = express();

export default api.get("/api/types/ratecommentdetails", async (req, res) => {
  connectdb();
  const { filters, pag } = parseQuery(req.query);
  const ratecommentdetails = await ratecommentdetailsDB
    .find(filters, { __v: 0 })
    .skip(+pag.from || 0)
    .limit(+pag.limit || 10);
  res.json(ratecommentdetails);
});
