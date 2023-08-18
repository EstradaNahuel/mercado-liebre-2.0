const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

//rutas
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "views/home.html"));
});
app.get('/register', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/register.html'));
});
app.get('/home', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/home.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.listen(3010, () => {
  console.log("Success");
});