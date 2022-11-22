const express = require("express");
const connectdb = require("../../../serverless/db/connect");
const currenciesDB = require("../../../serverless/models/currencies.mongo");
const parseQuery = require("../../../serverless/utils/parseQuery");

const api = express();

export default api.get("/api/types/currencies", async (req, res) => {
	connectdb();
	const { filters, pag } = parseQuery(req.query);
	const currencies = await currenciesDB
		.find(filters, { __v: 0 })
		.skip(+pag.from || 0)
		.limit(+pag.limit || 10);
	res.json(currencies);
});
