const Todo = require('../models/todoModels')

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
