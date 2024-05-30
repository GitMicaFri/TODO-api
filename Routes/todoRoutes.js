const express = require('express')
const todoController = require('../Controllers/todoController')

const router = express.Router() //express egna route-funktion

router.post('/', todoController.createTodo)
router.get('/', todoController.getAllTodos)
router.get('/:id', todoController.getTodoById)
router.put('/:author', todoController.updateTodo)

module.exports = router