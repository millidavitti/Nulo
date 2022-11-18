
const { serve } = require("inngest/next");
const batchProcess = require("../../../inngest/batch.process");

export default serve("Nulo Hotels", [batchProcess]);
