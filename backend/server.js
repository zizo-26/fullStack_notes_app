// this is the main file of the backend server , which is responsible for handling the requests and responses from the client side.
const express = require("express");
const notesRouter = require("./routes/routes");
const mongoose = require("mongoose");
const rateLimit = require("./middleware/ratelimit");
// concat the path of the database connection file and the config folder
const { connecteDB } = require("./config/db");
// dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
// . Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
const dotenv = require("dotenv");
// call the config method of the dotenv module to load the environment variables from the .env file into process.env
dotenv.config();
// calling the port variable from the .env file and storing it in a constant variable
const Port=process.env.Port



const app = express();



// ? this is the middleware for parsing the json data ,
app.use(express.json());

app.use(rateLimit);

app.use("/api/notes", notesRouter);

connecteDB().then(() => {
 
    // ! this is the server port , listening to the port 5000
    app.listen(Port, () => console.log("server is listing in port ",Port))
})

