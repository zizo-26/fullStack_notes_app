const mongoose = require("mongoose");

// 1) creat a schema for the notes collection in the database

const Notesschcma=new mongoose.Schema({

    title:{
        typ:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }


},{timestamps:true})

// 2) create a model for the notes collection in the database

const Notes=mongoose.model('Notes', Notesschcma);

module.exports=Notes