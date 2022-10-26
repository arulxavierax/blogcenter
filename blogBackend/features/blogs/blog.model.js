const { Schema, model, default: mongoose } = require("mongoose");

const blogSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  imageUrl: { type: String },
  heading: { type: String, required: true },
  summary: { type: String },
  desc: { type: String, required: true },
  date: { type: String },
});

const Blog = model("blog", blogSchema);

module.exports = Blog;
