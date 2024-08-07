const express=require('express')
const router=express.Router()
const {createTodo, getAllTodo, getTodo, delTodo, updTodo}=require('../controllers/todoController')

router.post('/createTodo',createTodo)
router.get('/getAllTodo',getAllTodo)
router.get('/getTodo/:id',getTodo)
router.delete('/delTodo/:id',delTodo)
router.patch('/updTodo/:id',updTodo)
module.exports=router
