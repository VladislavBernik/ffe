const axios = require("axios");


const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Odesa&units=metric&appid=999418815d68730b39a0858a86523528";

setInterval(() => {
  axios.get(url).then((response) => {
    console.log(response.data);
  });
}, 900000);
