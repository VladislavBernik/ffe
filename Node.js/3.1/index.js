const moment = require("moment");

let years = moment().diff("2000-07-29", "years");
let months = moment().diff("2020-07-29", "months");
let days = moment().diff("2021-04-29", "days");

console.log(years + " years " + months + " months " + days + " days");
