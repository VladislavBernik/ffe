let form = document.forms.formName;

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  let userName = form.userName.value;
  let user = JSON.stringify({ userName: userName });
  let request = new XMLHttpRequest();

  request.open("POST", "/user", true);
  request.setRequestHeader("Content-Type", "application/json");
  request.addEventListener("load", () => {
    let receivedUser = JSON.parse(request.response);
    console.log(receivedUser.userName);
  });
  request.send(user);
});
