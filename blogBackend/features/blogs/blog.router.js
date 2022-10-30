const express = require("express");
const jwt = require("jsonwebtoken");
const Blog = require("./blog.model");
const User = require("../users/users.model");

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
// app.use(authMiddileware);

app.get("/", async (req, res) => {
  let blogs = await Blog.find();
  res.send(blogs);
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findById(id);
  const author = await User.findById(blog.userId);
  res.send({ blog, author });
});

app.delete("/:id", authMiddileware, async (req, res) => {
  let { id } = req.params;
  const token = req.headers.authorization;
  const blog = await Blog.findById(id);
  try {
    let data = jwt.verify(token, "SECRETKEY!@#$%");
    if (data.id == blog.userId) {
      blog.delete();
      return res.send("Blog deleted succesfully");
    } else {
      return res.status(401).send("Cannot perform this operations");
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.patch("/:id", authMiddileware, async (req, res) => {
  let { id } = req.params;
  let content = req.body;
  const token = req.headers.authorization;
  const blog = await Blog.findById(id);
  try {
    let data = jwt.verify(token, "SECRETKEY!@#$%");
    if (data.id == blog.userId) {
      const updatedBlog = await Blog.findByIdAndUpdate(
        { _id: id },
        { $set: content }
      );
      return res.send("Blog updated");
    } else {
      return res.status(401).send("Cannot perform this operations");
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.post("/add", authMiddileware, async (req, res) => {
  const { imageUrl, heading, summary, desc } = req.body;
  let date = new Date();
  let dateMDY = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  try {
    const newBlog = await Blog.create({
      userId: req.userId,
      imageUrl,
      heading,
      summary,
      desc,
      date: dateMDY,
    });
    res.send("Blog Created");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = app;
