const express = require("express");
const Blog = require("./blog.model");
const app = express.Router();

app.get("/", async (req, res) => {
  let blogs = await Blog.find();
  res.send(blogs);
});

app.post("/add", async (req, res) => {
  const { userId, heading, summary, desc } = req.body;
  try {
    const newBlog = Blog.create({ userId, heading, summary, desc });
    res.send("Blog Created");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = app;
