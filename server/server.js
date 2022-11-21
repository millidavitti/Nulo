require("dotenv").config();
const http = require("http");
const app = require("./app");
const connectdb = require("./db/connect")

const server = http.createServer(app);

function listen() {
connectdb()
  server.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));
}

listen();
