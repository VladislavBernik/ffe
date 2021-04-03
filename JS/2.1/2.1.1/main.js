let btnShow = document.querySelector(".show");
let btnHide = document.querySelector(".hide");
let block = document.querySelector(".main.square");

btnShow.addEventListener("click", (ev) => {
  block.classList.remove("main");
  block.classList.add("square");
});

btnHide.addEventListener("click", (ev) => {
  block.classList.remove("square");
  block.classList.add("main");
});
