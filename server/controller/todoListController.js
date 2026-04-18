// importing mongoose schema for mongo db data base

const Todos = require('../model/todos')


const getTodosController = async(req, res) => {
    try {
        const Todo = await Todos.find()
        res.json(Todo)
    } catch (error) {
        console.log(error)
    }
    
};

const postTodoController = async(req, res) => {
    try {
        const Todo = await Todos.create({
            todoText: req.body.todoText,
            isCompleted: req.body.isCompleted
        }) 
        res.json(Todo)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

const deleteTodoController = async(req, res)=>{
    try {
        const id = String(req.params.id)
        let Todo = await Todos.findByIdAndDelete(id)
        res.json(Todo)
    } catch (error) {
        console.log(error)
    }
    
};

const patchTodoController = async(req, res) =>{
    try {
        const id = req.params.id
        const updateObjBody = req.body
        const updatedTodo =  await Todos.findByIdAndUpdate(id, updateObjBody, {
            returnDocument: 'after',    // return updated data
            runValidators: true         // run schema validator
        },)
        if(!updatedTodo){
            return res.status(404).json({ message: "Todo not Found" })
        }

        res.json(updatedTodo)

    } catch (error) {
        console.log(error)
    }
};

module.exports = {
    getTodosController,
    postTodoController,
    deleteTodoController,
    patchTodoController
}