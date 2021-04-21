const btnMult = document.querySelector(".multiply");
const btnSplit = document.querySelector(".split");
const container = document.querySelector(".container");
const resMult = document.querySelector(".resMult");
const resSplit = document.querySelector(".resSplit");
const firstNum = document.querySelector(".firstNum");
const secondNum = document.querySelector(".secondNum");

btnMult.addEventListener("click", (ev) => {
  ev.preventDefault();

  const multiplyFunc = () => {
    return firstNum.value * secondNum.value;
  };

  resMult.innerHTML = multiplyFunc().toFixed(3);
});

btnSplit.addEventListener("click", (ev) => {
  ev.preventDefault();

  const splitFunc = () => {
    return firstNum.value / secondNum.value;
  };

  resSplit.innerHTML = splitFunc().toFixed(3);
});
