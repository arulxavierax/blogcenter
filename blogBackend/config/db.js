const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://blogcenter:blogcenter@cluster0.akhve0k.mongodb.net/?retryWrites=true&w=majority"
  );
};

module.exports = connect;
