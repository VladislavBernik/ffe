const fio = {
  firstName: "Vladislav",
  secondName: "Berdnikov",
  lastName: "Vitaliyevich",

  get fullName() {
    const fio1 =
      "Имя: " +
      this.firstName +
      " " +
      "Фамилия: " +
      this.secondName +
      " " +
      "Отчество: " +
      this.lastName;
    return fio1;
  },
};

console.log(fio.fullName);
