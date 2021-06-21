const getList = async () => {
  const { data } = await axios.get("/menu/list");
  console.log(data);

  const menuList = data.result.list;
  let html = "";
  for (const item of menuList) {
    html = `${html}<button data-id="${item.id}" type="button">${item.title}</div>`;
  }

  const rootEL = document.querySelector(".root");
  rootEL.innerHTML = html;
};

getList();
