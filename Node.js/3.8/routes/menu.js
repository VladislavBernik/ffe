const express = require("express");
const router = express.Router();

const menus = [
  {
    id: "first",
    title: "Блюдо 1",
    content: "Цена 1",
  },
  {
    id: "second",
    title: "Блюдо 2",
    content: "Цена 2",
  },
  {
    id: "third",
    title: "Блюдо 3",
    content: "Цена 3",
  },
];

router.get("/list", (req, res) => {
  const menuList = menus.map((val) => {
    return { id: val.id, title: val.title };
  });

  setTimeout(() => {
    res.json({
      status: "Ok",
      result: {
        list: menuList,
      },
    });
  }, 3000);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const menu = menus.find((val) => val.id === id);

  if (!menu) {
    res.json({
      status: "Not found",
    });
    return;
  }

  res.json({
    status: "Ok",
    result: { menu },
  });
});

module.exports = router;
