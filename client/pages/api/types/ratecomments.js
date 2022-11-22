const express = require("express");
const connectdb = require("../../../serverless/db/connect");
const ratecommentsDB = require("../../../serverless/models/ratecomments.mongo");
const parseQuery = require("../../../serverless/utils/parseQuery");

const api = express();

export default api.get("/api/types/ratecommentdetails", async (req, res) => {
	connectdb();
	const { filters, pag } = parseQuery(req.query);
	const ratecomments = await ratecommentsDB
		.find(filters, { __v: 0 })
		.skip(+pag.from || 0)
		.limit(+pag.limit || 10);
	res.json(ratecomments);
});
