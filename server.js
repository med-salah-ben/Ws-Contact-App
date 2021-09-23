const express = require('express')
const connectDB = require('./config/connectDB')
require("dotenv").config()

connectDB()

const app = express()

// middleware
app.use(express.json())
app.use("/api/contact", require("./Routes/Contact"))


const PORT = process.env.PORT || 7000;

app.listen(PORT,(err)=>{
    err? console.error(err) : console.log(`server is running in port ${PORT}`)
})