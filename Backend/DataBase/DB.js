const mongoose=require('mongoose')

async function initDB(){
        try {
           await mongoose.connect(process.env.MONGO_URI)
           console.log("mongo is connected")
        } catch (err) {
            console.log(err)
        }
}

module.exports=initDB