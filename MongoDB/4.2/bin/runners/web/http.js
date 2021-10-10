const server = require("../../../servers/http");
const debug = require("debug")("34---node-express-mongodb:server");
const http = require("http");

const { httpPort } = require("../../../config").server;

const run = () => {
  const port = normalizePort(httpPort);
  server.set("port", port);

  const httpServer = http.createServer(server);

  httpServer.listen(port);
  httpServer.on("error", onError);
  httpServer.on("listening", onListening);

  function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
      return val;
    }

    if (port >= 0) {
      return port;
    }

    return false;
  }

  function onError(error) {
    if (error.syscall !== "listen") {
      throw error;
    }

    const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

    switch (error.code) {
      case "EACCES":
        console.error(bind + " requires elevated privileges");
        process.exit(1);
        break;
      case "EADDRINUSE":
        console.error(bind + " is already in use");
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  function onListening() {
    const addr = httpServer.address();
    const bind =
      typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    debug("Listening on " + bind);
  }

  return httpServer;
};

module.exports = run;
