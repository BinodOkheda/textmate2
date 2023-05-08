const express = require('express')
const mongoose = require("mongoose")
const { userRouter } = require('./routes/user.route')
const { paymentRouter } = require('./routes/payment.route')
const cors=require('cors')
require("dotenv").config()

const { roomRouter } = require('./routes/room.route')

const app = express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
  res.send("Home Page.....")
})

app.use("/users",userRouter);
// app.use("/payment",paymentRouter)
app.use("/rooms",roomRouter)



app.listen(8080,async () => {

  try {

    await mongoose.connect(process.env.mongoURL)
    console.log("connected to database..")

  } catch (error) {

    console.log({msg:error.message})
  }
 
  console.log("server is running at 8080")
})