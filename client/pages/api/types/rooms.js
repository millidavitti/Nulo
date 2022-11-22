const express = require("express");
const connectdb = require("../../../serverless/db/connect");
const roomsDB = require("../../../serverless/models/rooms.mongo");
const parseQuery = require("../../../serverless/utils/parseQuery");

const api = express();

export default api.get("/api/types/rooms", async (req, res) => {
	connectdb();
	const { filters, pag } = parseQuery(req.query);
	const rooms = await roomsDB
		.find(filters, { __v: 0 })
		.skip(+pag.from || 0)
		.limit(+pag.limit || 10);
	res.json(rooms);
});
