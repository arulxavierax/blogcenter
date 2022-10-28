const { Schema, model } = require("mongoose");

const otpSchema = new Schema({
  email: String,
  otp: String,
});

const Otp = model("otp", otpSchema);

module.exports = Otp;
