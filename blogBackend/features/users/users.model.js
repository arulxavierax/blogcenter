const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  bio: { type: String },
  profilePic: { type: URL },
});

const User = model("user", userSchema);

module.exports = User;
