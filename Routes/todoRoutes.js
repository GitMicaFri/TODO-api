const express = require('express')
const todoController = require('../Controllers/todoController')

const router = express.Router() //express egna route-funktion

router.post('/', todoController.createTodo)

module.exports = router