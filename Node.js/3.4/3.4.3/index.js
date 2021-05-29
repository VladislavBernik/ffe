const axios = require("axios");
const fs = require("fs-extra");

const url =
  "https://api.openweathermap.org/data/2.5/forecast?q=Odesa&units=metric&appid=999418815d68730b39a0858a86523528&cnt=12";

setInterval(() => {
axios.get(url).then((response) => {
  const weather = response.data.list;

  console.log(weather.slice(4));
  fs.appendFile("weather.txt", weather + "\r\n");
});
}, 900000);
