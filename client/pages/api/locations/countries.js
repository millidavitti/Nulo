const express = require("express");
const connectdb = require("../../../server/db/connect");
const countriesDB = require("../../../server/models/countries.mongo");
const parseQuery = require("../../../server/utils/parseQuery");

const api = express();

export default api.get("/api/locations/countries", async (req, res) => {
  connectdb();
  const { filters, pag } = parseQuery(req.query);
  const countries = await countriesDB
    .find(filters, { __v: 0 })
    .skip(+pag.from || 0)
    .limit(+pag.limit || 10);
  res.json(countries);
});
