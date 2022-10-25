const { Schema, model, default: mongoose } = require("mongoose");

const commentSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "blog",
    required: true,
  },
  comment: { type: String },
  date: { type: String },
});

const Comment = model("comment", commentSchema);

module.exports = Comment;
