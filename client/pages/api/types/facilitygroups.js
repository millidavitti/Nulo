const express = require("express");
const connectdb = require("../../../server/db/connect");
const facilitygroupsDB = require("../../../server/models/facilitygroups.mongo");
const parseQuery = require("../../../server/utils/parseQuery");

const api = express();

export default api.get("/api/types/facilitygroups", async (req, res) => {
  connectdb();
  const { filters, pag } = parseQuery(req.query);
  const facilitygroups = await facilitygroupsDB
    .find(filters, { __v: 0 })
    .skip(+pag.from || 0)
    .limit(+pag.limit || 10);
  res.json(facilitygroups);
});
