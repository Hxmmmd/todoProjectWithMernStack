const mongoose = require('mongoose')
const connectDB = async(mongoDb_url)=>{
    try {
        await mongoose.connect(mongoDb_url)
        console.log("MongoDB connected")
    } catch (error) {
        console.error("some error happend while connected MongoDB", error)
        throw error
    }
}

module.exports = connectDB
