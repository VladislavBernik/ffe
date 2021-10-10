const express = require("express");
const multer = require("multer");
const upload = multer();
const router = express.Router();

const Ajv = require("ajv");

const createBook = require("../controllers/book.js");
const createAuthor = require("../controllers/author.js");
const createGenre = require("../controllers/genre.js");

router.get("/book", (req, res) => {
  res.render("acp/book");
});

router.post("/authorList", async (req, res) => {
  const getAuthor = await createAuthor.findAuthor();
  res.json(getAuthor);
});

router.post("/genreList", async (req, res) => {
  const getGenre = await createGenre.findGenre();
  res.json(getGenre);
});

router.post("/book", upload.none(), async (req, res) => {
  const { name } = req.body;
  const { selectAuthor } = req.body;
  const { selectGenre } = req.body;

  const searchAuthor = await createAuthor.getAuthor(selectAuthor);
  const author = searchAuthor.map((val) => val._id);

  const searchGenre = await createGenre.getGenre(selectGenre);
  const genre = searchGenre.map((val) => val._id);

  const result = await createBook.addBook(name, author, genre);

  if (result.status === "dublicate_name") {
    res.json({ status: "dublicate_name" });
    return;
  }

  res.json({ status: "ok", payload: { id: result.payload.id } });
});

router.post("/author", upload.none(), async (req, res) => {
  const { name } = req.body;

  const result = await createAuthor.addAuthor(name);

  if (result.status === "dublicate_name") {
    res.json({ status: "dublicate_name" });
    return;
  }
  res.json({ status: "ok", payload: { id: result.payload.id } });
});

router.post("/genre", upload.none(), async (req, res) => {
  const { name } = req.body;

  const result = await createGenre.saveGenre(name);

  if (result.status === "dublicate_name") {
    res.json({ status: "dublicate_name" });
    return;
  }
  res.json({ status: "ok", payload: { id: result.payload.id } });
});

module.exports = router;
