const express = require('express')
const connectDB = require('./config/connectDb')
const todolist = require('./routes/todolist')
const cors = require('cors')
let dotenv = require("dotenv")


const app = express()
const PORT = process.env.PORT
const MONGODB_URL = process.env.MONGODB_URL
dotenv.config()



// cors policy 
app.use(cors({
    origin: "http://localhost:5173"
}))

// these are some important middlewares so your express app can Read JSON 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(todolist)

connectDB(MONGODB_URL).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`app listening on port ${PORT}`)
    })
})

