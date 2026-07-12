const mongoose = require("mongoose");

// creating schema for note. the schema is like a blueprint for the data that we want to store in the database. it defines the structure of the data and the types of data that can be stored in each field.
const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
})

// creating a model for note. the model is a class that we can use to create, read, update, and delete documents in the database. it is based on the schema that we defined earlier.
const noteModel = mongoose.model("note", noteSchema);

module.exports = noteModel;