const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("./users.model");
const app = express.Router();
const { redis } = require("../../config/db");

var blackList = [];

app.get("/", async (req, res) => {
  let users = await User.find();
  res.send(users);
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(401).send(`${email} already exist`);
  } else {
    const newUser = User.create({ name, password, email });
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      "SECRETKEY!@#$%",
      { expiresIn: "7 days" }
    );
    const refreshToken = jwt.sign(
      { id: newUser._id, email: newUser.email },
      "REFRESH^&*()",
      { expiresIn: "30 days" }
    );
    const tokens = redis.mset({ token: token, refreshtoken: refreshToken });
    res.send({
      message: "Signup successfull",
      token,
      refreshToken,
    });
  }
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.status(404).send("Invalid credentials");
  }
  const token = jwt.sign(
    { id: user._id, email: user.email },
    "SECRETKEY!@#$%",
    { expiresIn: "7 days" }
  );
  const refreshToken = jwt.sign(
    { id: user._id, email: user.email },
    "REFRESH^&*()",
    { expiresIn: "30 days" }
  );
  redis.mset({ token: token, refreshtoken: refreshToken });
  res.send({
    message: "Signin successfull",
    token,
    refreshToken,
  });
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  if (blackList.includes(token)) {
    return res.status(401).send("Token Expired");
  }
  if (!token) {
    return res.status(401).send("unauthorized");
  }
  try {
    jwt.verify(token, "SECRETKEY!@#$%");
    const user = await User.findById(id);
    return res.send(user);
  } catch (e) {
    if (e.message === "jwt expired") {
      blackList.push(token);
      redis.set("blacklist", token);
    }
    return res.status(500).send(e.message);
  }
});

app.post("/logout", (req, res) => {
  const token = req.headers.authorization;
  const refreshToken = req.headers["refreshtoken"];
  redis.mset("blacklist", token, refreshToken);
  blackList.push(token);
  blackList.push(refreshToken);
  res.send("Logged out");
});

app.post("/refresh", (req, res) => {
  const refreshToken = req.headers["refreshtoken"];
  if (blackList.includes(refreshToken)) {
    return res.status(401).send("Token Expired");
  }
  if (!refreshToken) {
    return res.status(401).send("unauthorized");
  }
  try {
    let data = jwt.verify(refreshToken, "REFRESH^&*()");
    console.log(data);
    const mainToken = jwt.sign(
      { id: data.id, email: data.email },
      "SECRETKEY!@#$%",
      { expiresIn: "7 days" }
    );
    const tokens = redis.set({ token: mainToken });
    return res.send({ token: mainToken });
  } catch (e) {
    if (e.message === "jwt expired") {
      blackList.push(refreshToken);
    }
    return res.status(500).send(e.message);
  }
});

module.exports = app;
