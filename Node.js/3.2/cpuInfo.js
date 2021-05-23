const os = require("os");

const cpus = os.cpus();

const cpuM = cpus.map((val) => {
let val2 = val.model;
console.log(val2);
});

const cpuS = cpus.map((val) => {
  let val2 = val.speed;
  console.log(val2);
  });


module.exports = {
  cpuModel: cpuM,
  cpuSpeed: cpuS
}
