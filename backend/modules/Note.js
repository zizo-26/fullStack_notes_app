const mongoose = require("mongoose");

// 1) creat a schema for the notes collection in the database

const Noteschema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }


},{timestamps:true})

// 2) create a model for the notes collection in the database

const Note=mongoose.model('Note', Noteschema);

module.exports={Note}