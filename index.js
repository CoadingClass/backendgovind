const express = require("express");
require("dotenv").config();
const app = express();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Kusum is Back ");
});
app.get("/kusum", (req, res) => {
  res.send("<h1> Hey Kusum Your Govind Is Back </h1>");
});

app.listen(port, () => {
  console.log(`⚙︎ Server is running => http://localhost:${port}`);
});
