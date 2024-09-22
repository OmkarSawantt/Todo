const mongoose=require("mongoose")

const todoSchema=new mongoose.Schema({
    title:{
        required:true,
        type:String
    },
    description:{
        required:false,
        type:String
    },
    completed:{
        type:Boolean,
        default: false
    }
})
module.exports=mongoose.model("ToDo",todoSchema)