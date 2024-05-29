require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const todoRoutes = require('./Routes/todoRoutes')
const bodyparser = require('body-parser')
const app = express()
const connectDB = require('./Database/database')

app.use(express.json())

connectDB()

const PORT = process.env.PORT || 6500  // säkerställa portens funktion

app.use(bodyparser.json())
app.use('/api/todo', todoRoutes)

app.listen(PORT, () => {
    console.log(`Server listening to ${PORT}`)
})
