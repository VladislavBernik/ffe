const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Express page" });
});

router.get("/second-page", (req, res) => {
  res.render("index", { title: "Second page" });
});

module.exports = router;
