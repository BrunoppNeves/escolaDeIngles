const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log(`rodando na porta ${3000}`);
});
