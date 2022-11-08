const express = require("express");
const connectdb = require("../../../server/db/connect");
const imagetypesDB = require("../../../server/models/imagetypes.mongo");
const parseQuery = require("../../../server/utils/parseQuery");

const api = express();

export default api.get("/api/types/imagetypes", async (req, res) => {
  connectdb();
  const { filters, pag } = parseQuery(req.query);
  const imagetypes = await imagetypesDB
    .find(filters, { __v: 0 })
    .skip(+pag.from || 0)
    .limit(+pag.limit || 10);
  res.json(imagetypes);
});
