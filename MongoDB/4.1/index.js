require("./db");
const articleModel = require("./models/article");

const run = async () => {
  const article = new articleModel();
  article.autor = "Programmist";
  article.name = "Procode";
  article.topic = "Programma";
  article.date = "2020-11-05";
  article.text = "Ochen Slojno";
  // const doc = await article.save();
  // console.log(doc);
  const docs = await articleModel.find({ name: "Recepty" });
  console.log(docs);
};
run();

const updateText = async (articleName, update) => {
  const article = new articleModel();
  const docs = await articleModel.findOneAndUpdate(
    { name: articleName },
    { text: update }
  );
  const updatedoc = await article.save();
  console.log(updatedoc);
};
updateText("Recepty", "Pryam ochen vkysno");
