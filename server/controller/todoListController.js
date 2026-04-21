// importing mongoose schema for mongo db data base
const Todos = require('../model/Todos')

const sendControllerError = (res, error, fallbackMessage) => {
    console.error(error)

    if (error.name === 'ValidationError') {
        return res.status(400).json({
            message: fallbackMessage,
            error: error.message
        })
    }

    if (error.name === 'CastError') {
        return res.status(400).json({
            message: 'Invalid todo id',
            error: error.message
        })
    }

    if (error.code === 11000) {
        return res.status(409).json({
            message: 'Duplicate todo data',
            error: error.message
        })
    }

    return res.status(500).json({
        message: fallbackMessage,
        error: error.message
    })
}


const getTodosController = async(req, res) => {
    try {
        const Todo = await Todos.find()
        res.json(Todo)
    } catch (error) {
        return sendControllerError(res, error, 'Failed to fetch todos')
    }
    
};

const postTodoController = async(req, res) => {
    try {
        const Todo = await Todos.create({
            todoText: req.body.todoText,
            isCompleted: req.body.isCompleted
        }) 
        res.status(201).json(Todo)
    } catch (error) {
        return sendControllerError(res, error, 'Failed to create todo')
    }
};

const deleteTodoController = async(req, res)=>{
    try {
        const id = String(req.params.id)
        let Todo = await Todos.findByIdAndDelete(id)
        if(!Todo){
            return res.status(404).json({ message: "Todo not Found" })
        }
        res.json(Todo)
    } catch (error) {
        return sendControllerError(res, error, 'Failed to delete todo')
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
        return sendControllerError(res, error, 'Failed to update todo')
    }
};

module.exports = {
    getTodosController,
    postTodoController,
    deleteTodoController,
    patchTodoController
}
