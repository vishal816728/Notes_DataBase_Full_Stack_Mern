const express=require('express')
const app=express()
const data=require("./Data/data")
const cors=require('cors')
const initDB = require('./DataBase/DB')
const router = require('./Routes/user.Route')
const notesRouter=require("./Routes/NotesRouter")


const PORT=process.env.PORT || 5000
require('dotenv').config()
initDB()

app.use(express.json())
app.use(cors())

app.use("/",router)
app.use("/",notesRouter)

app.get("/",(req,res)=>{
    res.send("Hello")
})

// app.get("/api/notes",(req,res)=>{
//     res.status(200).json(data)
// })

app.get("/api/notes/:id",(req,res)=>{
    id=req.params.id
    if(data[id-1]){
        res.status(200).json(data[id-1])
    }else{
        res.status(404).json({"error":"Note does not exist"})
    }
})

app.listen(PORT,()=>{
      console.log(`app is listening on ${PORT}`)
})