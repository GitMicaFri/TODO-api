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
    const author = req.params.author;  // Rätt sätt att hämta author från URL:en
    const content = req.body.content;  // Rätt sätt att hämta content från body

    console.log('Author:', author);  // Loggar värdet av author
    console.log('Content:', content);  // Loggar värdet av content

    if (!content) {
      return res.status(400).send("Content required for update.");
    }

    const updatedTodo = await Todo.findOneAndUpdate(
      { author: author }, // filter baserat på author från URL
      { content: content }, // uppdaterar content fältet
      { new: true } // options: returnerar det uppdaterade dokumentet
    );

    if (!updatedTodo) {
      return res.status(404).send("Todo not found for the given author.");
    }

    res.status(200).json({ message: 'Update by author completed', updatedTodo });
  } catch (err) {
    console.log('Error:', err); // Bättre felloggning
    res.status(400).send(err.message);
  }
}


// Delete
// Vad händer med Author om man deletar en todo?
exports.deleteTodo = async (req, res) => {
  try {

  } catch (err) {
    res.status(400).send(err)
  }
}