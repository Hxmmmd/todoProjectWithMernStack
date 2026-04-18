const express = require("express");

// importing express router is for creating route in another dir and use it in app.js/index.js
const todoList = express.Router();

// importing mongoose schema for mongo db data base
const todos = require('../model/todos')

// importing Todo list Controller
const { getTodosController,
        postTodoController,
        deleteTodoController,
        patchTodoController } = require('../controller/todoListController')



// REST API endpoint for fetching data of todos
todoList.get('/todos', getTodosController )

// REST API endpoint for Creating todo
todoList.post('/todos', postTodoController)

// REST API endpoint for delete todo
todoList.delete('/todos/:id', deleteTodoController)


// REST API endpoint for pactch update todo
todoList.patch('/todos/:id', patchTodoController)

module.exports = todoList
