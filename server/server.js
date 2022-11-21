const http = require("http");
const app = require("./app");
const connectdb = require("../client/server/db/connect");

const server = http.createServer(app);

function listen() {
    connectdb()
  server.listen(4000, () => console.log("Listening on port 4000"));
}

listen();
