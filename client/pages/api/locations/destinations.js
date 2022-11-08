const express = require("express");
const connectdb = require("../../../server/db/connect");
const destinationDB = require("../../../server/models/destinations.mongo");
const parseQuery = require("../../../server/utils/parseQuery");

const api = express();

export default api.get("/api/locations/destinations", async (req, res) => {
  connectdb();
  const { filters, pag } = parseQuery(req.query);
  const destinations = await destinationDB
    .find(filters, { __v: 0 })
    .skip(+pag.from || 0)
    .limit(+pag.limit || 10);
  res.json(destinations);
});
