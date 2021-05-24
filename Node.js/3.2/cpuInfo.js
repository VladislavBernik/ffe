const os = require("os");

const cpus = os.cpus();

const cpuModelFunc = () => {
  const cpuM = cpus.map((val) => {
    let val2 = val.model;
    console.log(val2);
  });
};

const cpuSpeedFunc = () => {
  const cpuS = cpus.map((val) => {
    let val2 = val.speed;
    console.log(val2);
  });
};

module.exports = {
  cpuModel: cpuModelFunc,
  cpuSpeed: cpuSpeedFunc,
};
