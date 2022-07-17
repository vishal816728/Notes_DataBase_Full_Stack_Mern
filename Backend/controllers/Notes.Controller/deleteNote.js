const notesModel=require("../../models/NotesModel")

async function deleteNote(req,res){
    const id=req.params.id
    const note=await notesModel.findById({_id:id})
    if(note){
        if (note.user.toString() !== req.user._id.toString()) {
            res.status(401);
            throw new Error("You can't perform this action");
          }
    const deletedNote=await notesModel.remove({_id:id})
    if(deletedNote){
          res.status(200).json(deletedNote)
    }else{
        res.status(400).json({"message":"can't delete note"})
    }
}else{
    res.status(404).json({"message":"id you are passing does not exist"})
}
}

module.exports=deleteNote