const express = require("express");
const connectdb = require("../../../serverless/db/connect");
const countriesDB = require("../../../serverless/models/countries.mongo");
const parseQuery = require("../../../serverless/utils/parseQuery");

const api = express();

export default api.get("/api/locations/countries", async (req, res) => {
	connectdb();
	const { filters, pag } = parseQuery(req.query);
	const countries = await countriesDB
		.find(filters, { __v: 0 })
		.skip(+pag.from || 0)
		.limit(+pag.limit || 10);
	res.json(countries);
});
