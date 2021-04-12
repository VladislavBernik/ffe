const form = document.forms.formPrice;
const result = document.querySelector(".result");

const calcPrice = (carType, price, year) => {
  return (price * carType * (year / 100)).toFixed(3);
};

form.addEventListener("submit", (ev) => {
  result.classList.remove("result");
  ev.preventDefault();

  const data = new FormData(ev.target);
  const carType = data.get("field");
  const price = data.get("price");
  const year = data.get("year");
  const res = document.querySelector(".res");

  res.innerHTML = calcPrice(carType, price, year);
});
