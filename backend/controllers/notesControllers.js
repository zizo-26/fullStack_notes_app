const express = require("express");

function getNotes(req, res) {
  res.status(200).send("you have 20 notes");
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
  getNotes,
  createNotes,
  updateNotes,
  deleteNotes,
};
