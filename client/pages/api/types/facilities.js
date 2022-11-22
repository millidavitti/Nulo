const express = require("express");
const connectdb = require("../../../serverless/db/connect");
const facilitiesDB = require("../../../serverless/models/facilities.mongo");
const parseQuery = require("../../../serverless/utils/parseQuery");

const api = express();

export default api.get("/api/types/facilities", async (req, res) => {
	connectdb();
	const { filters, pag } = parseQuery(req.query);
	const facilities = await facilitiesDB
		.find(filters, { __v: 0 })
		.skip(+pag.from || 0)
		.limit(+pag.limit || 10);
	res.json(facilities);
});
