const express = require("express");
const connectdb = require("../../../serverless/db/connect");
const hotelsDB = require("../../../serverless/models/hotels.mongo");
const parseQuery = require("../../../serverless/utils/parseQuery");

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
