const express = require("express");
const cors = require("cors");
const userRouter = require("./features/users/users.routes");
const blogRouter = require("./features/blogs/blog.router");
const commentRouter = require("./features/comments/comment.router");
const oauthRouter = require("./features/OAuth/oauth");
const resetpasswordRouter = require("./features/reset-password/reset-password.router");
const {dbConnect} = require("./config/db");

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/users", userRouter);
app.use("/blogs", blogRouter);
app.use("/comments", commentRouter);
app.use("/auth", oauthRouter);
app.use("/reset-password", resetpasswordRouter);

app.get("/", (req, res) => res.send("hello"));

app.listen(8080, async () => {
  await dbConnect();
  console.log("server started on port 8080");
});
