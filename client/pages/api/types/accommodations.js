const express = require("express");
const connectdb = require("../../../serverless/db/connect");
const accommodationsDB = require("../../../serverless/models/accommodations.mongo");
const parseQuery = require("../../../serverless/utils/parseQuery");

const api = express();

export default api.get("/api/types/accommodations", async (req, res) => {
	connectdb();
	const { filters, pag } = parseQuery(req.query);
	const accommodations = await accommodationsDB
		.find(filters, { __v: 0 })
		.skip(+pag.from || 0)
		.limit(+pag.limit || 10);
	res.json(accommodations);
});
