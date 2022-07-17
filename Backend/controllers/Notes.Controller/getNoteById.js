const notesModel=require("../../models/NotesModel")
async function getNoteById(req,res){
      const id=req.params.id
      const note=await notesModel.findById({_id:id})
      if(note){
          res.status(200).json(note)
      }else{
          res.status(404).json({"message":"note with the provided id does not exist"})
      }
}

module.exports=getNoteById