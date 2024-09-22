const express =require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const cors=require("cors")
const todoRouter=require('./routes/todoRoutes')
require('dotenv').config()

const app=express()

app.use(bodyParser.json())
app.use(cors())
mongoose.connect("mongodb://localhost:27017/todo").then(()=>{
    console.log("Connected");
}).catch(()=>{
    console.log("Error");

})
app.use('/api',todoRouter)
app.listen(process.env.PORT,()=>{
    console.log(`Server Running On ${process.env.PORT}`)
})
