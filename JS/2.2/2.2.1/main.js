let btnCalc = document.querySelector(".btn");
let elF = document.querySelector(".first-name");
let elS = document.querySelector(".second-name");
let elT = document.querySelector(".third-name");
let elRes1 = document.querySelector(".res-first-name");
let elRes2 = document.querySelector(".res-second-name");
let elRes3 = document.querySelector(".res-third-name");
let result = document.querySelector(".result");

btnCalc.addEventListener("click", (ev) => {
  result.classList.remove("result");
  let f = elF.value;
  let s = elS.value;
  let t = elT.value;

  elRes1.innerHTML = f;
  elRes2.innerHTML = s;
  elRes3.innerHTML = t;
});
