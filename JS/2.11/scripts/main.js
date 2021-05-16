const test = () => {
  const ingridients = [
    { id: "e88", name: "картошка", alergen: false, kkal: 100 },
    { id: "08a", name: "лук", alergen: true, kkal: 200 },
    { id: "a0b", name: "шкварки", alergen: false, kkal: 300 },
    { id: "0dd", name: "бульйон", alergen: false, kkal: 400 },
    { id: "d12", name: "морковка", alergen: true, kkal: 500 },
    { id: "8a1", name: "оливковая олия", alergen: false, kkal: 600 },
  ];

  const result = {
    status: "ok",
    ingridients, // ingridients: ingridients,
    payload: {
      error: "test_fail",
      message: "тест не пройден",
    },
  };

  return result;
};

const { status, ingridients } = test();
console.log("status: ", status);

function getSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i].kkal;
  }

  return sum;
}

const func = ingridients.filter((ing) => {

  if (ing.alergen === true) {
    console.log(getSum(ingridients));
  }
});


