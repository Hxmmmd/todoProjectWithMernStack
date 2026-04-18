const express = require("express");

// importing express router is for creating route in another dir and use it in app.js/index.js
const todolist = express.Router();

// importing mongoose schema for mongo db data base
const todos = require('../model/todos')

// importing Todo list Controller
const { getTodosController,
        postTodoController,
        deleteTodoController,
        patchTodoController } = require('../controller/todoListController')



// REST API endpoint for fetching data of todos
todolist.get('/todos', getTodosController )

// REST API endpoint for Creating todo
todolist.post('/todos', postTodoController)

// REST API endpoint for delete todo
todolist.delete('/todos/:id', deleteTodoController)


// REST API endpoint for pactch update todo
todolist.patch('/todos/:id', patchTodoController)

module.exports = todolist
