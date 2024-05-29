require('dotenv').config()
const express = require('express')
const todoRoutes = require('./Routes/todoRoutes')
const bodyparser = require('body-parser')
const app = express()
const connectDB = require('./Database/database')

app.use(express.json())

connectDB()



app.use(bodyparser.json())

app.use('/api/todo', todoRoutes)

const PORT = process.env.PORT || 6500
app.listen(PORT, () => {
    console.log(`Server listening to ${PORT}`)
})