const mongoose = require('mongoose')


const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 100
  },
  content: {
    type: String,
    required: true,
    maxlength: 500
  },
  author: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Todo', todoSchema)
