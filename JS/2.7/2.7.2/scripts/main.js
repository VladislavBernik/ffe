const table = document.querySelector(".table");
const createTab = document.querySelector(".createTab");
const form = document.forms.tab;
const btnUp = document.querySelector(".arrowUp.active");
const btnDown = document.querySelector(".arrowDown.active");
const btnRight = document.querySelector(".arrowRight.active");
const btnLeft = document.querySelector(".arrowLeft.active");

btnUp.classList.remove("active");
btnDown.classList.remove("active");
btnRight.classList.remove("active");
btnLeft.classList.remove("active");

createTab.addEventListener("click", () => {
  const data = new FormData(form);

  const rows = Number(data.get("rows").trim());
  const columns = Number(data.get("columns").trim());

  const createTable = (table, row, cols) => {
    for (let i = 0; i < row; i++) {
      let tr = document.createElement("tr");

      for (let i = 0; i < cols; i++) {
        let td = document.createElement("td");

        tr.appendChild(td);
      }

      table.appendChild(tr);
    }
  };

  createTable(table, rows, columns);
});

document.addEventListener("keydown", (ev) => {
  if (ev.code === "ArrowUp") {
    btnUp.classList.remove("arrowUp");
    btnUp.classList.add("active");
  }
});

document.addEventListener("keyup", (ev) => {
  if (ev.code === "ArrowUp") {
    btnUp.classList.remove("active");
    btnUp.classList.add("arrowUp");
  }
});

btnUp.addEventListener("mousedown", (ev) => {
  btnUp.classList.add("active");
  btnUp.classList.remove("arrowUp");
});

btnUp.addEventListener("mouseup", (ev) => {
  btnUp.classList.remove("active");
  btnUp.classList.add("arrowUp");
});

document.addEventListener("keydown", (ev) => {
  if (ev.code === "ArrowDown") {
    btnDown.classList.remove("arrowDown");
    btnDown.classList.add("active");
  }
});

document.addEventListener("keyup", (ev) => {
  if (ev.code === "ArrowDown") {
    btnDown.classList.remove("active");
    btnDown.classList.add("arrowDown");
  }
});

btnDown.addEventListener("mousedown", (ev) => {
  btnDown.classList.add("active");
  btnDown.classList.remove("arrowDown");
});

btnDown.addEventListener("mouseup", (ev) => {
  btnDown.classList.remove("active");
  btnDown.classList.add("arrowDown");
});

document.addEventListener("keydown", (ev) => {
  if (ev.code === "ArrowRight") {
    btnRight.classList.remove("arrowRight");
    btnRight.classList.add("active");
  }
});

document.addEventListener("keyup", (ev) => {
  if (ev.code === "ArrowRight") {
    btnRight.classList.remove("active");
    btnRight.classList.add("arrowRight");
  }
});

btnRight.addEventListener("mousedown", (ev) => {
  btnRight.classList.add("active");
  btnRight.classList.remove("arrowRight");
});

btnRight.addEventListener("mouseup", (ev) => {
  btnRight.classList.remove("active");
  btnRight.classList.add("arrowRight");
});

document.addEventListener("keydown", (ev) => {
  if (ev.code === "ArrowLeft") {
    btnLeft.classList.remove("arrowLeft");
    btnLeft.classList.add("active");
  }
});

document.addEventListener("keyup", (ev) => {
  if (ev.code === "ArrowLeft") {
    btnLeft.classList.remove("active");
    btnLeft.classList.add("arrowLeft");
  }
});

btnLeft.addEventListener("mousedown", (ev) => {
  btnLeft.classList.add("active");
  btnLeft.classList.remove("arrowLeft");
});

btnLeft.addEventListener("mouseup", (ev) => {
  btnLeft.classList.remove("active");
  btnLeft.classList.add("arrowLeft");
});
