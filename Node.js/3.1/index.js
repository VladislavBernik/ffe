const moment = require("moment");
const momentRange = require("moment-precise-range-plugin");

let birthDate = moment("07/29/2000", "MM/DD/YYYY");
let birth = moment.preciseDiff(birthDate, moment());

console.log(birth);
