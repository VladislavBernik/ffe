const btnPow = document.querySelector(".power");
const btnSqrt = document.querySelector(".sqrts");
const resStep = document.querySelector(".resStep");
const resSqrt = document.querySelector(".resSqrt");
const firstNum = document.querySelector(".firstNum");
const stepen = document.querySelector(".stepen");
const koren = document.querySelector(".koren");
const znak = document.querySelector(".znak");

btnPow.addEventListener("click", (ev) => {
  const powFunc = () => {
    return Math.pow(firstNum.value, stepen.value);
  };

  resStep.innerHTML = powFunc();
});

btnSqrt.addEventListener("click", (ev) => {
  const sqrtFunc = () => {
    return Math.pow(firstNum.value, 1 / koren.value);
  };

  resSqrt.innerHTML = sqrtFunc().toFixed(znak.value);
});
