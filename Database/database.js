const mongoose = require('mongoose')
require('dotenv').config() // Detta måste laddas först

const connectDB = async () => {
  try {
    console.log('MONGO_URI:', process.env.MONGO_URI) // Kontrollera att MONGO_URI laddas korrekt
    await mongoose.connect(process.env.MONGO_URI)
    console.log("DB connected")
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
};

module.exports = connectDB
