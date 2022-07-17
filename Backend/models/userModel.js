const mongoose=require('mongoose')
const bcrypt=require('bcrypt')

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    pic:{
        type:String,
        default:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIEAgQMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAABAUGAwIH/8QANRAAAgIBAQUFBQYHAAAAAAAAAAECAwQFERMhMXESIkFRYSM0UoGhQ3KRsbLRFDI1QmJzgv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4tthTBzskoxXizzlXwxqXZN8FyXmzN5WTZlWdux9I+CAscjWeax6/wDqf7ESWp5cvtNnSKIYAlx1LLj9rt6pEujWpLhkVpr4ocPoVIA1dF9d8O3VNSX5HQylF9mPYp1S2P6PqaPCyoZVKnHg1wlHyYEgAAAAAAAAAAADnfPdU2WfDFv8EBQ6tkO7JcE+5XwXXxIQfF7XzAAAAAAAJOnZDx8mMv7JcJdCMANeCPg2O3Eqm+bjx6kgAAAAAAAAAR9Q9xyP9cvyJB4thvK5QfKUWgMmA04ycZLY09jQAAAAAAAAA0Wj/wBPq2/5fqZNOOHXusaqtrio8ep2AAAAAAAAAAACh1nFdd2+iu5Pn6MrjWXVRurdc1tjLg0Z3NwbMWXxV+E/3AigAAAABN0rFeRkKUl7Ot7X6vwRyw8SzLnsgtkU+MnyRosaiGPUq61wXj4sDqAAAAAAAAAAAPFlka4Oc2oxS2tsoc7UrMhuFTcKvq+oF0sqh3bpWxdnkdmlJbJLanzTMiWGJqttOyNq3sFy2vivmQTsjSKLNrqbrfpxX4EOWjXp92ytr12osadTxbdi3nYflPgSY2wl/LOL6MopY6NkN96daXzZKo0emD23Sdj8uSLCVkIrvSiurI9uo4tXO1SflHiBJjGMIqMYpJckjxLIpjbupWxU/hbKfK1e2xONEd2vPmytb2tt7W3z2kGvBnsHUrMdqFrc6vLxXQvq7I2wU62pRfJlHsAAAAADBXazk7nH3UX37OHReIFdqeb/ABNnYg/ZRfD1fmQgAAAAAAAAAAAAE7S8141vYm/YyfH0fmQQBr1xBXaNk72jdSffr+qLEAAABmtSu3+ZZLb3Yvsx+RocizdUWWfDFsynXmAAAAAAAAAAAAAAAABJ027cZlcvCT7L6M0xkDVY1m9x67PGUUwOoAAjaj7hf9xmbAAAAAAAAAAAAAAAAAAGj033Gn7oAEoAAf/Z'
    }
},{
    timestamps:true
})

// UserSchema.pre("save",async function(next){
//     if(!this.isModified("password")){
//            next()
//     }
//     this.password=await bcrypt.hashSync(this.password,10)
// })

// UserSchema.methods.matchPassword=async function(enteredPassword){
//     return await bcrypt.compare(enteredPassword,this.password)
// }


module.exports=mongoose.model('User',UserSchema)