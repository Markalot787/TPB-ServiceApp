//server/models/todo.js
const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
	task: {
		type: String,
		required: true,
	},
	completed: {
		type: Boolean,
		default: false,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
	},
});

const ToDo = mongoose.model('ToDo', ToDoSchema);

module.exports = ToDo;
