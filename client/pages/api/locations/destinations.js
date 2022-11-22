const express = require("express");
const connectdb = require("../../../serverless/db/connect");
const destinationDB = require("../../../serverless/models/destinations.mongo");
const parseQuery = require("../../../serverless/utils/parseQuery");

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
