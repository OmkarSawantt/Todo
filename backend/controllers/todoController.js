const ToDo=require('../models/todoSchema')

exports.createTodo= async (req,res)=>{
    try {
        let todo=new ToDo(req.body)
        await todo.save()
        res.json({
            success:true
        })
    } catch (error) {
        res.json({
            success:false,
            error:error
        })
    }
}
exports.getAllTodo=async(req,res)=>{
    try {
        const todos=await ToDo.find()
        res.json({
            success:true,
            data:todos
        })
    } catch (error) {
        res.json({
            success:false,
            error:error
        })
    }
}

exports.getTodo=async(req,res)=>{
    try {
        const todo=await ToDo.findById(req.params.id)
        res.json({
            success:true,
            data:todo
        })
    } catch (error) {
        res.json({
            success:false,
            error:error
        })
    }
}

exports.delTodo=async(req,res)=>{
    try {
        const todo=await ToDo.findByIdAndDelete(req.params.id)
        res.json({
            success:true,
            data:todo
        })
    } catch (error) {
        res.json({
            success:false,
            error:error
        })
    }
}
exports.updTodo=async(req,res)=>{
    try {
        const updTodo=await ToDo.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({
            success:true,
            data:updTodo
        })
    } catch (error) {
        res.json({
            success:false,
            error:error
        })

    }
}
exports.toggleTodoCompleted=async(req,res)=>{
    try {
        const todoId = req.params.id;
        const todo = await ToDo.findById(todoId);
        if (!todo) {
            return res.statusjson({
                success:false,
                message: 'Todo not found'
            });
        }
        todo.completed = !todo.completed;

        const updatedTodo = await todo.save();

        res.json({
            success:true,
            data:updatedTodo
        })
    } catch (error) {
        res.json({
            success:false,
            error:error
        })
    }
}