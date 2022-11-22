const express = require("express");
const connectdb = require("../../../serverless/db/connect");
const facilitygroupsDB = require("../../../serverless/models/facilitygroups.mongo");
const parseQuery = require("../../../serverless/utils/parseQuery");

const api = express();

export default api.get("/api/types/facilitygroups", async (req, res) => {
	connectdb();
	const { filters, pag } = parseQuery(req.query);
	const facilitygroups = await facilitygroupsDB
		.find(filters, { __v: 0 })
		.skip(+pag.from || 0)
		.limit(+pag.limit || 10);
	res.json(facilitygroups);
});
