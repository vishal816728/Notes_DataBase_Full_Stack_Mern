const NotesModel = require('../../models/NotesModel')

async function createNotes(req,res){
    const {title,content,category}=req.body

    if(!title || !content || !category){
        res.status.json({"message":"please fill all the fields"})
    }else{
        const newNote=new NotesModel({title,content,category,user:req.user._id})
        const createdNote=await newNote.save()
        res.status(201).json(createdNote)
    }
}

module.exports=createNotes