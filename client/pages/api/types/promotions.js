const express = require("express");
const connectdb = require("../../../serverless/db/connect");
const promotionsDB = require("../../../serverless/models/promotions.mongo");
const parseQuery = require("../../../serverless/utils/parseQuery");

const api = express();

export default api.get("/api/types/promotions", async (req, res) => {
	connectdb();
	const { filters, pag } = parseQuery(req.query);
	const promotions = await promotionsDB
		.find(filters, { __v: 0 })
		.skip(+pag.from || 0)
		.limit(+pag.limit || 10);
	res.json(promotions);
});
