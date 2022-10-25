const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  imageUrl: { type: URL },
  heading: { type: String, required: true },
  summary: { type: String },
  desc: { type: String, required: true },
  date: { type: String },
});

const Blog = model("blog", blogSchema);

module.exports = Blog;
