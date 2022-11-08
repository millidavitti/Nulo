const express = require("express");
const connectdb = require("../../../server/db/connect");
const languagesDB = require("../../../server/models/languages.mongo");
const parseQuery = require("../../../server/utils/parseQuery");

const api = express();

export default api.get("/api/types/languages", async (req, res) => {
  connectdb();
  const { filters, pag } = parseQuery(req.query);
  const languages = await languagesDB
    .find(filters, { __v: 0 })
    .skip(+pag.from || 0)
    .limit(+pag.limit || 10);
  res.json(languages);
});
