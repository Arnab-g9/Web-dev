const express = require('express');
const noteModel = require('./models/note.model');
const app = express();

/**
 * POST  / notes ==> create a new note
 * GET   / notes ==> get all notes
 * GET   / notes/:id ==> get a single note by id
 * PATCH   / notes/:id ==> update a note by id
 * DELETE / notes/:id ==> delete a note by id
 */

app.use(express.json())

app.post('/notes', async (req, res)=>{
    const data = req.body;
    await noteModel.create({title: data.title, description: data.description});

    res.status(201).send({message: "note created successfully"});
})


app.get('/notes', async(req, res)=>{
    const notes = await noteModel.find(); // find wil always return an array of notes. if there are no notes, it will return an empty array. it will never return null or undefined. so we don't need to check for null or undefined here.

    // findOne will return a single note or null if there are no notes. so we need to check for null here.
    // const singleNote = await noteModel.findOne({
    //     title: "test_title"
    // })
    res.status(200).json({
        message: "notes fetched successfully",
        notes: notes
    })
})

app.delete('/notes/:id', async(req, res)=>{
    const id = req.params.id;
    const note = await noteModel.findOneAndDelete({
        _id: id
    });
    if(!note){
        return res.status(404).json({
            message: "note not found"
        })
    }
    res.status(200).json({
        message: "note deleted successfully",
        note: note
    })
})

app.patch('/notes/:id', async(req, res)=>{
    const id = req.params.id;
    const description = req.body.description;

    await noteModel.findOneAndUpdate({
        _id: id
    }, {
        description: description
    })
    res.status(200).json({
        message: "Note updated successfully"
    })
})

module.exports = app;