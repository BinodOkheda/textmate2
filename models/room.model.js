const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
    roomName:{
        type:String,
        required:true
    },
    createrName:{
        type:String,
        required:true
    },
    createrID:{
        type:String,
        required:true
    },
    roomType:{
        type:String,
        default:"free",
        enum:["free","pro","business"]
    },
    data:{
        type:String,
        default:""
    }

})

const RoomModel = mongoose.model("room",roomSchema)

module.exports = {
    RoomModel
}