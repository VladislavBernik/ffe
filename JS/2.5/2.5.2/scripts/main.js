let btn = document.querySelector(".btn");
const result = document.querySelector(".result");
let person = [
  {
    name: "Vladislav",
    surname: "Berdnikov",
    hw: "7",
  },
  {
    name: "Alex",
    surname: "Girko",
    hw: "2",
  },
  {
    name: "Artem",
    surname: "Shevchuk",
    hw: "8",
  },
  {
    name: "Denis",
    surname: "Rudik",
    hw: "3",
  },
  {
    name: "Alex",
    surname: "Getmansk",
    hw: "8",
  },
  {
    name: "Inna",
    surname: "Oleshenko",
    hw: "7",
  },
  {
    name: "Victor",
    surname: "Victor",
    hw: "3",
  },
  {
    name: "Andrey",
    surname: "Timoshenko",
    hw: "6",
  },
  {
    name: "Im",
    surname: "Table",
    hw: "6",
  },
  {
    name: "Natalia",
    surname: "Natalia",
    hw: "4",
  },
  {
    name: "Ivanna",
    surname: "Ivanna",
    hw: "0",
  },
  {
    name: "Vova",
    surname: "Vova",
    hw: "6",
  },
  {
    name: "R1d",
    surname: "R1d",
    hw: "4",
  },
  {
    name: "Nikolay",
    surname: "Zaichenko",
    hw: "4",
  },
  {
    name: "Andrew",
    surname: "Stehnii",
    hw: "1",
  },
  {
    name: "Yaroslav",
    surname: "Yaroslav",
    hw: "4",
  }
];

btn.addEventListener("click", (ev) => {
  for (const test of person) {
    console.log(test);

    const html =
      '<form> ${test} <input type="hidden" name="test" value="${test}" /></form>';

    result.insertAdjacentHTML("beforeend", html);
  }
});
