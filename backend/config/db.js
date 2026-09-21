const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

// ! first we create a cluster in mongodb atlas and then we create a database token, then we install mongoose npm i mongoose and dotenv then we create a .env file and add the connection string to it.
// ? secondly we create a config folder with db.js file then we import mongoose 
// ? and then we create an async function to connect to the database and export it to be used in the server.js file.

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
