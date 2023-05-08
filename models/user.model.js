const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    plan:{
        type:String,
        default:"free",
        enum:["free","pro","business"]
    }
})


const UserModel = mongoose.model("user",userSchema)


module.exports={
    UserModel
}