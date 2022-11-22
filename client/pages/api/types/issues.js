const express = require("express");
const connectdb = require("../../../serverless/db/connect");
const issuesDB = require("../../../serverless/models/issues.mongo");
const parseQuery = require("../../../serverless/utils/parseQuery");

const api = express();

export default api.get("/api/types/issues", async (req, res) => {
	connectdb();
	const { filters, pag } = parseQuery(req.query);
	const issues = await issuesDB
		.find(filters, { __v: 0 })
		.skip(+pag.from || 0)
		.limit(+pag.limit || 10);
	res.json(issues);
});
