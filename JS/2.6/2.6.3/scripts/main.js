const btnPow = document.querySelector(".power");
const btnSqrt = document.querySelector(".sqrts");
const container = document.querySelector(".container");
const res = document.querySelector(".res");
const firstNum = document.querySelector(".firstNum");
const stepen = document.querySelector(".stepen");
const koren = document.querySelector(".koren");
const znak = document.querySelector(".znak");

btnPow.addEventListener("click", (ev) => {
  const powFunc = () => {
    return Math.pow(firstNum.value, stepen.value);
  };

  res.innerHTML = powFunc();
});

btnSqrt.addEventListener("click", (ev) => {
  const sqrtFunc = () => {
    return Math.pow(firstNum.value, 1 / koren.value);
  };

  res.innerHTML = sqrtFunc().toFixed(znak.value);
});
