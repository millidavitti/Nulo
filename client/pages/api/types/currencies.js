const express = require("express");
const connectdb = require("../../../server/db/connect");
const currenciesDB = require("../../../server/models/currencies.mongo");
const parseQuery = require("../../../server/utils/parseQuery");

const api = express();

export default api.get("/api/types/currencies", async (req, res) => {
  connectdb();
  const { filters, pag } = parseQuery(req.query);
  const currencies = await currenciesDB
    .find(filters, { __v: 0 })
    .skip(+pag.from || 0)
    .limit(+pag.limit || 10);
  res.json(currencies);
});
