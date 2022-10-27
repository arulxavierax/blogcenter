const { Schema, model, default: mongoose } = require("mongoose");

const commentSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  blogId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "blog",
    required: true,
  },
  comment: { type: String },
  date: { type: String },
});

const Comment = model("comment", commentSchema);

module.exports = Comment;
