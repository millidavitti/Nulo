const express = require("express");
const connectdb = require("../../../serverless/db/connect");
const categoriesDB = require("../../../serverless/models/categories.mongo");
const parseQuery = require("../../../serverless/utils/parseQuery");

const api = express();

export default api.get("/api/types/categories", async (req, res) => {
	connectdb();
	const { filters, pag } = parseQuery(req.query);
	const categories = await categoriesDB
		.find(filters, { __v: 0 })
		.skip(+pag.from || 0)
		.limit(+pag.limit || 10);
	res.json(categories);
});
