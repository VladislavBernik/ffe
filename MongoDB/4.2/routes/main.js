const express = require("express");
const multer = require("multer");
const upload = multer();
const router = express.Router();

const createGenre = require("../controllers/genre.js");
const sendBooks = require("../controllers/findBooks.js");

router.get("/", (req, res) => {
  res.render("main", { title: "books" });
});

router.post("/genreList", async (req, res) => {
  const getGenre = await createGenre.findGenre();
  res.json(getGenre);
});

router.post("/server", async (req, res) => {
  const getData = await sendBooks.findAllBooks();
  res.json(getData);
});

router.post("/find", upload.none(), async (req, res) => {
  const allBooks = await sendBooks.findAllBooks();
  res.json(allBooks);
});

module.exports = router;
