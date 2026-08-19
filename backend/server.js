// this is the main file of the backend server , which is responsible for handling the requests and responses from the client side.
const express = require("express");
const notesRouter = require("./routes/routes");
const mongoose = require("mongoose");
// trying anthoer method exporting and importing
const { connecteDB } = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();

// console.log(process.env.MONGO_URI);


const app = express();

// ? this is the middleware for parsing the json data ,

app.use("/api/notes", notesRouter);
app.use(express.json());

connecteDB();

// ! this is the server port , listening to the port 5000
app.listen(5000, () => console.log("server is listing in port 5000"));


