const express = require("express");
const { RoomModel } = require("../models/room.model");
const app = express();
app.use(express.json());
require("dotenv").config()

roomRouter = express.Router()

roomRouter.get("/",async (req,res)=>{

    try {

        const rooms = await RoomModel.find()
        res.send(rooms)
        

    } catch (error) {
        
        res.send({msg:error.message})
    }
})


roomRouter.get("/:name",async (req,res)=>{

    try {
        const roomName = req.params.name;

        const room = await RoomModel.findOne({roomName});

        if(!room){
            return res.send({msg:"room does not exist....."})
        }
        
        res.send(room)

    } catch (error) {

        res.send({msg:error.message})
    }

})

roomRouter.post("/create",async (req,res)=>{

    try {
        const {roomName,createrName,createrID,roomType,data} = req.body;

        const isRoomExist = await RoomModel.findOne({roomName});
        
        if(isRoomExist){
            return res.send({msg:"Room already exist..."})
        }

        
        const room = new RoomModel({roomName,createrName,createrID,roomType,data})
        await room.save()

      res.send({msg:"Room has been creater successfully",room})
        
    } catch (error) {
        res.send({msg:error.msg})
    }

})

roomRouter.patch("/:name",async (req,res)=>{

    try {
        const roomName = req.params.name;

        const isRoomExist = await RoomModel.findOne({roomName});
        
        if(!isRoomExist){
            return res.send({msg:"Room does not exist..."})
        }
        
        const room = await RoomModel.findByIdAndUpdate({_id:isRoomExist._id},{data:req.body.data})

        return res.send(room)

    } catch (error) {

        res.send({msg:error.message})
    }


})


module.exports={
    roomRouter
}