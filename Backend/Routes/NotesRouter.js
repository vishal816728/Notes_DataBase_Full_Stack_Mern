const express=require('express')
const createNotes = require('../controllers/Notes.Controller/createNotes')
const deleteNote = require('../controllers/Notes.Controller/deleteNote')
const getNoteById = require('../controllers/Notes.Controller/getNoteById')
const getNotes = require('../controllers/Notes.Controller/getNotes')
const updateNotes = require('../controllers/Notes.Controller/updateNotes')
const { protect } = require('../middleware/Auth')
const notesRouter=express.Router()

notesRouter.get("/api/notes",protect,getNotes)

notesRouter.get("/notes/note/:id",getNoteById)

notesRouter.post("/api/note",protect,createNotes)

notesRouter.put("/api/notes/update/:id",protect,updateNotes)

notesRouter.delete("/api/note/delete/:id",protect,deleteNote)

module.exports=notesRouter