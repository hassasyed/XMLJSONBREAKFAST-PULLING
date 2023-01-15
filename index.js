const express= require('express')
const { appendFile } = require('fs')
const mongoose = require('mongoose')
const routes = require("./routes/api")


mongoose.connect("mongodb://127.0.0.1:27017/BreakfastNew")


const app=express()
app.use('/api',routes)

app.listen(5000,()=>{
    console.log("server is listening")
})