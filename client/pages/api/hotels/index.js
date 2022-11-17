const express = require("express");
const connectdb = require("../../../server/db/connect");
const hotelsDB = require("../../../server/models/hotels.mongo");
const parseQuery = require("../../../server/utils/parseQuery");

const api = express();

export default api.get("/api/hotels", async (req, res) => {
   connectdb();
  const { filters, pag } = parseQuery(req.query);
  const hotels = await hotelsDB
    .find(filters, { __v: 0 })
    .skip(+pag.from || 0)
    .limit(+pag.limit || 10);

  res.json(hotels);
});
