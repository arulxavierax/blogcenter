const express = require("express");
// const User = require("./users.model");
const app = express.Router();

app.get("/", (req, res) => {
  res.send("<h1>Users</h1>");
});

module.exports = app
