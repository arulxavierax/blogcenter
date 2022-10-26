const express = require("express");
const userRouter = require("./features/users/users.routes");
const blogRouter = require("./features/blogs/blog.router");
const dbConnect = require("./config/db");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/users", userRouter);
app.use("/blogs", blogRouter);

app.get("/", (req, res) => res.send("hello"));

app.listen(8080, async () => {
  await dbConnect();
  console.log("server started on port 8080");
});
