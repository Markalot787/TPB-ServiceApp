//server/routes/todos.js
const express = require('express');
const router = express.Router();
const ToDo = require('../models/todo'); // Import the ToDo model, make sure to update the path based on your project structure

// Create a new ToDo item
router.post('/', async (req, res) => {
	try {
		const newToDo = new ToDo(req.body);
		const savedToDo = await newToDo.save();
		res.status(201).json(savedToDo);
	} catch (error) {
		res.status(400).json({ message: 'Error adding ToDo item' });
	}
});

// Get all ToDo items
router.get('/', async (req, res) => {
	try {
		const todos = await ToDo.find();
		res.json(todos);
	} catch (error) {
		res.status(500).json({ message: 'Error fetching ToDo items' });
	}
});

// Delete a ToDo item by ID
router.delete('/:id', async (req, res) => {
	try {
		const deletedToDo = await ToDo.findByIdAndDelete(req.params.id);
		res.json(deletedToDo);
	} catch (error) {
		res.status(500).json({ message: 'Error deleting ToDo item' });
	}
});

module.exports = router;
