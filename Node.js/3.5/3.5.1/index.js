const http = require("http");

http.createServer((req, res) => {
  res.end("Hello, server is run!");
}).listen(3000);
