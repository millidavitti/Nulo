const express = require("express");
const connectdb = require("../../../serverless/db/connect");
const chainsDB = require("../../../serverless/models/chains.mongo");
const parseQuery = require("../../../serverless/utils/parseQuery");

const api = express();

export default api.get("/api/types/chains", async (req, res) => {
	connectdb();
	const { filters, pag } = parseQuery(req.query);
	const chains = await chainsDB
		.find(filters, { __v: 0 })
		.skip(+pag.from || 0)
		.limit(+pag.limit || 10);
	res.json(chains);
});
