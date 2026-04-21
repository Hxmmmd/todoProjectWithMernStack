const express = require('express')
const connectDB = require('./config/connectDB')
const todolist = require('./routes/todoList')
const cors = require('cors')
let dotenv = require("dotenv")


const app = express()
dotenv.config()
const PORT = process.env.PORT || 3000
const MONGODB_URL = process.env.MONGODB_URL



// cors policy 
app.use(cors({
    origin: process.env.CLIENT_URL
}))

// these are some important middlewares so your express app can Read JSON 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(todolist)

connectDB(MONGODB_URL).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`app listening on port ${PORT}`)
    })
}).catch((error)=>{
    console.error("server startup failed", error.message)
})

