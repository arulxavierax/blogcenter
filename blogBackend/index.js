const express = require("express");
const userRouter = require("./features/users/users.routes");
const blogRouter = require("./features/blogs/blog.router");
const commentRouter = require("./features/comments/comment.router");
const oauthRouter = require("./features/OAuth/oauth");
const dbConnect = require("./config/db");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/users", userRouter);
app.use("/blogs", blogRouter);
app.use("/comments", commentRouter);
app.use("/oauth", oauthRouter);

app.get("/", (req, res) => res.send("hello"));

app.listen(8080, async () => {
  await dbConnect();
  console.log("server started on port 8080");
});
