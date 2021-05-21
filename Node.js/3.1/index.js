const moment = require("moment");

let birthDate = moment("07/29/2000", "MM/DD/YYYY");
let birth = moment.duration(moment().diff(birthDate));

console.log(birth);


//const moment = require("moment");
//const momentRange = require("moment-precise-range-plugin");

//let birthDate = moment("07/29/2000", "MM/DD/YYYY");
//let birth = moment.preciseDiff(birthDate, moment());

//console.log(birth);
