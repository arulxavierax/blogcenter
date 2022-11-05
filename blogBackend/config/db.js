const mongoose = require("mongoose");
const Redis = require("ioredis");

const dbConnect = () => {
  return mongoose.connect(
    "mongodb+srv://blogcenter:blogcenter@cluster0.akhve0k.mongodb.net/?retryWrites=true&w=majority"
  );
};

const redis = new Redis({
  host: "redis-14530.c264.ap-south-1-1.ec2.cloud.redislabs.com",
  port: 14530,
  password: "nGwADNBwh0Pswl7mg4ebeDzooaijwHSH",
});

module.exports = { redis, dbConnect };
