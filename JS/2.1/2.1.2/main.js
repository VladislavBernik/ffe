let btnShow = document.querySelector(".show");
let block = document.querySelector(".main.square");

btnShow.addEventListener("click", (ev) => {
  if (block.classList.contains("main")) {
    block.classList.remove("main");
    block.classList.add("square");
  } else {
    block.classList.remove("square");
    block.classList.add("main");
  }
});
