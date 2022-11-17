const express = require("express");
const connectdb = require("../../../server/db/connect");
const categoriesDB = require("../../../server/models/categories.mongo");
const parseQuery = require("../../../server/utils/parseQuery");

const api = express();

export default api.get("/api/types/categories", async (req, res) => {
  connectdb();
  const { filters, pag } = parseQuery(req.query);
  const categories = await categoriesDB
    .find(filters, { __v: 0 })
    .skip(+pag.from || 0)
    .limit(+pag.limit || 10);
  res.json(categories);
});
