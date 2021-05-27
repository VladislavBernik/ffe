const moment = require("moment");
const momentRange = require("moment-precise-range-plugin");

let birthDate = null;
let currentDate = moment();

const age = () => {
  if (birthDate != null) {
    let birth = moment.preciseDiff(birthDate, currentDate);

    console.log(birth);
  }else{
    console.log("Дата рождения не установлена");
  }
};

const timer = () => {
  setInterval(() => {
    console.log("Прошло еще 10 минут...");
  }, 600000);
};

timer();
age();
