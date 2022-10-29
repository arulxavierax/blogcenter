const express = require("express");
const passport = require("./google.oaut");
const jwt = require("jsonwebtoken");

const app = express.Router();

app.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/users/signin",
    session: false,
  }),
  function (req, res) {
    let user = req.user;
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
    res.redirect("http://localhost:3000");
    res.send({
      message: "Signin successfull",
      token,
      refreshToken,
    });
  }
);
module.exports = app;
