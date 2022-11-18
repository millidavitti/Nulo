const { serve } = require("inngest/next");
const batchProcess = require("../../inngest/batch.process");

module.exports = serve("Nulo Hotels", [batchProcess]);
