const express = require("express");
const {Note}=require('../modules/Note');

async function  getAllNotes(req, res) {
  try {
     const notes=await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.log("error in get all notes controller ", error);
    res.status(500).json({message:'intenal server error '})
  }
}

function createNotes(req, res) {
  res.status(201).json({ message: "your notes creted happly" });
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
