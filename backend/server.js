// this is the main file of the backend server , which is responsible for handling the requests and responses from the client side.
const express = require("express");
const notesRouter = require("./routes/routes");
const mongoose = require("mongoose");
// concat the path of the database connection file and the config folder
const { connecteDB } = require("./config/db");
// dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
// . Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
const dotenv = require("dotenv");
// call the config method of the dotenv module to load the environment variables from the .env file into process.env
dotenv.config();


const app = express();

// ? this is the middleware for parsing the json data ,

app.use("/api/notes", notesRouter);
app.use(express.json());

connecteDB();

// ! this is the server port , listening to the port 5000
app.listen(5000, () => console.log("server is listing in port 5000"));

