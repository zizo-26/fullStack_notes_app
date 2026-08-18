// this is the main file of the backend server , which is responsible for handling the requests and responses from the client side.
const express = require("express");
const notesRouter = require("./routes/routes");

const app = express();

// ? this is the middleware for parsing the json data ,

app.use("/api/notes", notesRouter);
app.use(express.json());



// ! this is the server port , listening to the port 3000
app.listen(3000, () => console.log("server is listing in port 3000"));
