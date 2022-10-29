const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();
const User = require("../users/users.model");
const Otp = require("./reset-password.model");

const app = express.Router();

const transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  secure: true,
  auth: {
    user: "blogcenterc@gmail.com",
    pass: process.env.GMAIL_PASS,
  },
});

app.post("/getotp", async (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(Math.random() * 100000);
  const otps = await Otp.create({ email, otp });
  transport
    .sendMail({
      to: email,
      from: "passwordmanager@blogcenter.com",
      subject: "OTP for reset password",
      text: `Your otp for ${email} is ${otp}`,
    })
    .then(() => {
      console.log("Otp sent");
      res.send("otp sent");
    });
});

app.post("/verify", async (req, res) => {
  const { email, newPassword, otp } = req.body;
  const verify = await Otp.findOne({ email, otp });
  if (verify) {
    let user = await User.findOneAndUpdate(
      { email: email },
      { $set: { password: newPassword } }
    );
    let otps = await Otp.findOne({ email: email, otp: otp });
    otps.delete();
    return res.send("Password updated succesfully");
  } else {
    return res.status(401).send("Invalid otp");
  }
});

module.exports = app;
