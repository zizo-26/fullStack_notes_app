const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);
const mongoose = require("mongoose");

const connecteDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connecting to mongodb successfully");
  } catch (error) {
    console.error("failed to connect mongodb", error);
    process.exit(1); // exit the process with failure
  }
};

module.exports = { connecteDB };
