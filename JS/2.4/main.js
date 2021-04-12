let btnSig = document.querySelector(".btnSig.danger.success");
let btnDoor = document.querySelector(".btnDoor.open.close");
let result = document.querySelector(".result");

let isOnAlarm = false;
let isOpenDoor = false;
let isAlarm = false;

const detect = () => {
  if (isOnAlarm === false && isOpenDoor === false) {
    result.innerHTML = "Тревога";
  } else if (isOnAlarm === false && isOpenDoor === true) {
    result.innerHTML = "Все ок";
  } else if (
    isOnAlarm === true &&
    (isOpenDoor === false || isOpenDoor === true)
  ) {
    result.innerHTML = "Сигнализация выкл";
  }
};

btnSig.addEventListener("click", (ev) => {
  isOnAlarm = !isOnAlarm;

  if (isOnAlarm) {
    btnSig.classList.add("danger");
    btnSig.classList.remove("success");
    btnSig.innerHTML = "Выкл";
  } else {
    btnSig.classList.add("success");
    btnSig.classList.remove("danger");
    btnSig.innerHTML = "Вкл";
  }

  detect();
});

btnDoor.addEventListener("click", (ev) => {
  isOpenDoor = !isOpenDoor;

  if (isOpenDoor) {
    btnDoor.classList.add("close");
    btnDoor.classList.remove("open");
    btnDoor.innerHTML = "Закр";
  } else {
    btnDoor.classList.add("open");
    btnDoor.classList.remove("close");
    btnDoor.innerHTML = "Откр";
  }

  detect();
});
