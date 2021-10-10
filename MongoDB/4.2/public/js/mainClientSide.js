const sendResult = document.querySelector(".booksList");
const findForm = document.querySelector(".findArt");
const genresList = document.querySelector(".genreBook");
const findFormEl = document.querySelector(".findInform");

const card = (arr) => {
  const booksCard = arr.reduce((acc, item) => {
    const author = item.author.map((val) => val.name);
    const genre = item.genre.map((val) => val.name);

    acc += `<tr><td>${item.name}</td><td>${author}</td><td>${genre}</td></tr>`;
    return acc;
  }, "");
  return booksCard;
};

const getBooks = async () => {
  const { data } = await axios.post("/server");
  return data;
};

const renderBooks = async () => {
  const books = await getBooks();
  sendResult.insertAdjacentHTML("beforeend", card(books));
};
renderBooks();

const genreList = async () => {
  const { data } = await axios.post("/genreList");
  return data;
};

const renderGenres = async () => {
  const genres = await genreList();
  const ganreCard = genres.reduce((acc, item) => {
    acc += `<option>${item.name}</option>`;
    return acc;
  }, "");
  genresList.insertAdjacentHTML("beforeend", ganreCard);
};
renderGenres();

const findnameform = document.forms.findInfo;
findnameform.addEventListener("submit", async (ev) => {
  ev.preventDefault();

  const formData = new FormData(ev.target);
  const book = formData.get("articleTitle");
  const author = formData.get("authorBook");
  const genre = formData.get("genreBook");

  const { data } = await axios.post("/find", formData);

  const findBook = data.filter((doc) => {
    const authordb = doc.author.map((val) => val.name);
    const genredb = doc.genre.map((val) => val.name);
    return (
      doc.name.includes(book) ||
      authordb.includes(author) ||
      genredb.includes(genre)
    );
  });
  sendResult.innerHTML = "";
  sendResult.insertAdjacentHTML("beforeend", card(findBook));
});
