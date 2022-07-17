const notesModel=require("../../models/NotesModel")

const getNotes = async (req, res) => {
    const notes = await notesModel.find({user:req.user._id});
    res.json(notes);
  };

module.exports=getNotes