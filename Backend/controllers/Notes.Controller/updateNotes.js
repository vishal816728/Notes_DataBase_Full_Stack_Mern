const notesModel=require("../../models/NotesModel")

async function updateNotes(req,res){
    const {title,content,category}=req.body
    const id=req.params.id
    const note=await notesModel.findById({_id:id})
    if(note){
        if (note.user.toString() !== req.user._id.toString()) {
            res.status(401);
            throw new Error("You can't perform this action");
          }
        note.title=title,
        note.content=content
        note.category=category

        const updatedNote=await note.save()
        res.send(updatedNote)
}else{
    res.status(404).json({"message":"id you are passing does not exist"})
}
}

module.exports=updateNotes