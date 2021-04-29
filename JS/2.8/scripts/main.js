let counter = 0;

const btnBrightUp = document.querySelector(".btnBrightUp");
const btnBrightDown = document.querySelector(".btnBrightDown");
const btnTempUp = document.querySelector(".btnTempUp");
const btnTempDown = document.querySelector(".btnTempDown");

btnBrightUp.addEventListener("click", (ev) => {
  if (counter <= 99) {
    counter++;
    brightRes.innerHTML = counter;
  }
});

btnBrightDown.addEventListener("click", (ev) => {
  if (counter >= 2) {
    counter--;
    brightRes.innerHTML = counter;
  }
});

btnTempUp.addEventListener("click", (ev) => {
  if (counter <= 99) {
    counter++;
    tempRes.innerHTML = counter;
  }
});

btnTempDown.addEventListener("click", (ev) => {
  if (counter >= 2) {
    counter--;
    tempRes.innerHTML = counter;
  }
});

const brightRes = document.querySelector(".brightRes");
const tempRes = document.querySelector(".tempRes");
