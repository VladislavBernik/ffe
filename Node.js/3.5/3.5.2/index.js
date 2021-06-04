const http = require("http");
const fs = require("fs-extra");

http
  .createServer(function (request, response) {
    console.log(`Запрошенный адрес: ${request.url}`);

    const filePath = request.url.substr(1);
    
    fs.access(filePath, fs.constants.R_OK, (err) => {
      if (err) {
        response.statusCode = 404;
        response.end("Resourse not found!");
      } else {
        fs.createReadStream(filePath).pipe(response);
      }
    });
  })
  .listen(3000);
