const mongoose = require('mongoose')
let dotenv = require("dotenv")
dotenv.config()


const folderName = "todoList"
const DB_COLLECTION_NAME = process.env.DB_COLLECTION_NAME || folderName

const todoSchema = new mongoose.Schema(
    {
        todoText: {
            type: String,
            required : true,
        }, 
        isCompleted:{
            type: Boolean,
            required: false
        }

    }
)
const Todos = mongoose.model('Todo', todoSchema)

module.exports = Todos