const btnPow = document.querySelector(".power");
const btnSqrt = document.querySelector(".sqrts");
const resPow = document.querySelector(".resPow");
const resSqrt = document.querySelector(".resSqrt");
const firstNum = document.querySelector(".firstNum");
const stepen = document.querySelector(".stepen");
const koren = document.querySelector(".koren");

btnPow.addEventListener("click", (ev) => {
  const powFunc = () => {
    return Math.pow(firstNum.value, stepen.value);
  };

  resPow.innerHTML = powFunc();
});

btnSqrt.addEventListener("click", (ev) => {
  const sqrtFunc = () => {
    return Math.pow(firstNum.value, 1 / koren.value);
  };

  resSqrt.innerHTML = sqrtFunc().toFixed(3);
});
