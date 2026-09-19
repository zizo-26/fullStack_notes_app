const express = require("express");
const {Note}=require('../modules/Note');

// get all notes Controller frome the database and send it to the client side
async function  getAllNotes(req, res) {
  try {
     const notes=await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.log("error in get all notes controller ", error);
    res.status(500).json({message:'intenal server error '})
  }
}

// creating a new note in the database and send it to the client side

 async function createNotes(req, res) {

  try {

    const {title,content}= req.body
    console.log(req.body);
    const newNote= new Note({title,content})

    await newNote.save()
    res.status(201).json({"note created sccessfully":newNote });
  
  } catch (error) {
    
    console.log("erro in create note controller ", error);
    res.status(500).json({message:'internal server  error'})
  }
}

function updateNotes(req, res) {
  res.status(200).json({ message: "your notes updated happly" });
}

function deleteNotes(req, res) {
  res.status(200).json({ message: "your notes deleted happly" });
}

module.exports = {
  getAllNotes,
  createNotes,
  updateNotes,
  deleteNotes,
};
