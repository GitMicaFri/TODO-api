const Todo = require('../models/todoModels')

// Create
exports.createTodo = async (req, res) => {
  try {
    if (!req.body.title || !req.body.content || !req.body.author) {
      return res.status(400).send("please fill in all fields")
    }
    const newTodo = new Todo(req.body)
    await newTodo.save()
    res.status(200).send('Successfully created note')
  } catch (err) {
    res.status(400).send(err)
  }
}

// Read
exports.getAllTodos = async (req, res) => {
  try {
    const showAllTodos = await Todo.find()
    res.status(200).json({message:'Showing all todos', showAllTodos})
  } catch (err) {
    res.status(400).send(err)
  }
}

// Read
exports.getTodoById = async (req, res) => {
  try {
  const showTodoById = await Todo.findById(req.params.id)
  if(!showTodoById) {
    return res.status(404).send('id not found')
  }
  res.status(200).json({message: 'Showing todo requested by id', showTodoById})
  } catch (err) {
    res.status(400).send(err)
  }
}

// Update
exports.updateTodo = async (req, res) => {
  try {
    const {author} = req.params.author
    const {content} = req.body
    const changeByAutor = await Todo.findOneAndUpdate({author})

    res.status(200).send('Update by author completed')
  } catch (err) {
    res.status(400).send(err)
  }
}

// Delete
exports.deleteTodo = async (req, res) => {
  try {

  } catch (err) {
    res.status(400).send(err)
  }
}