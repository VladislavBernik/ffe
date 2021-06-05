const http = require("http");
const fs = require("fs-extra");

http
  .createServer(function (req, res) {
    const url = "http://vnokia.net/images/wallpaper/2019/wallpaper_1080x2160_03.jpg";

    let file = fs.createWriteStream("file.jpeg");
    let request = http.get(url, function (response) {
      response.pipe(file);
    });

    console.log(`Запрошенный адрес: ${req.url}`);

    const filePath = req.url.substr(1);
    
    fs.access(filePath, fs.constants.R_OK, (err) => {
      if (err) {
        res.statusCode = 404;
        res.end("Resourse not found!");
      } else {
        fs.createReadStream(filePath).pipe(res);
      }
    });
  })
  .listen(3000);
