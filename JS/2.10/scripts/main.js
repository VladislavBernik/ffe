let dishes = [
  {
    name: "Пицца",
    ingredients: ["Тесто", "Салями", "Соус", "Сыр"],
  },
  {
    name: "Паста с сыром",
    ingredients: ["Паста", "Сыр", "Масло", "Прованские травы"],
  },
  {
    name: "Пасха",
    ingredients: ["Тесто", "Начинка", "Посыпка", "Крем"],
  },
  {
    name: "Борщ",
    ingredients: ["Бульйон", "Свекла", "Капуста", "Картошка"],
  },
  {
    name: "Котлеты",
    ingredients: ["Мясо", "Хлеб", "Лук", "Соль"],
  },
];

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const ing = document.querySelector(".ing");

btn.addEventListener("click", (ev) => {
  ev.preventDefault();

  let ingV = ing.value;

  const dish2 = dishes.map((val) => {
    let val2 = val.ingredients;
    if (val2.includes(ingV)) {
      const html = ` 
      <div>
        <div>Название блюда: ${val["name"]}</div>
        <br>
      </div>
      `;

      container.insertAdjacentHTML("beforeEnd", html);
    }
  });
});
