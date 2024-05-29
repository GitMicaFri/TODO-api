const mongoose = require('mongoose')

const postTodoSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
        maxlength: 25
    },
    content: {
        type: String,
        required: true,
        maxlength: 200
    },
    author: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date, 
        default: Date.now
    }
})

const Todo = mongoose.model('Todo', postTodoSchema)

module.exports = Todo