let btnShow = document.querySelector(".show");
let btnHide = document.querySelector(".hide");
let blockShow = document.querySelector(".main");
let blockHide = document.querySelector(".square");

btnShow.addEventListener("click", (ev) => {
  blockHide.classList.remove("square");
  blockShow.classList.add("main");
});

btnHide.addEventListener("click", (ev) => {
  blockShow.classList.remove("main");
  blockHide.classList.add("square");
});
