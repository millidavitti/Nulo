const express = require("express");
const connectdb = require("../../../serverless/db/connect");
const terminalsDB = require("../../../serverless/models/terminals.mongo");
const parseQuery = require("../../../serverless/utils/parseQuery");

const api = express();

export default api.get("/api/types/terminals", async (req, res) => {
	connectdb();
	const { filters, pag } = parseQuery(req.query);
	const terminals = await terminalsDB
		.find(filters, { __v: 0 })
		.skip(+pag.from || 0)
		.limit(+pag.limit || 10);
	res.json(terminals);
});
