const mongoose=require("mongoose")

const todoSchema=new mongoose.Schema({
    title:{
        required:true,
        type:String
    },
    description:{
        required:false,
        type:String
    }
})
module.exports=mongoose.model("ToDo",todoSchema)