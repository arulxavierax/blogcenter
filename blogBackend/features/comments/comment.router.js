const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const jwt = require("jsonwebtoken");
const Blog = require("../blogs/blog.model");
const User = require("../users/users.model");
const Comment = require("./comments.model");

const authMiddileware = async (req, res, next) => {
  let token = req.headers.authorization;
  try {
    let data = jwt.verify(token, "SECRETKEY!@#$%");
    let user = await User.findById(data.id);
    req.userId = user.id;
    next();
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const app = express.Router();
app.use(authMiddileware);

const server = http.createServer(app);
const io = new Server(server);
let comments;
io.on("connection", (conn) => {
  const { id } = req.params;
  conn.on("new message", async (data) => {
    comments = await Comment.create({
      userId: req.userId,
      blogId: id,
      comment: data,
      date: Date.now(),
    });
    io.emit("new message", data);
  });
  conn.emit("history", comments);
});

module.exports = app;
