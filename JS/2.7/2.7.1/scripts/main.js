const table = document.querySelector(".table");
const createTab = document.querySelector(".createTab");
const form = document.forms.tab;

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
