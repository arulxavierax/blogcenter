const express = require("express");
const userRouter = require("./features/users/users.routes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/users", userRouter);

app.get("/", (req, res) => res.send("hello"));

app.listen(8080, () => {
  console.log("server started on port 8080");
});
