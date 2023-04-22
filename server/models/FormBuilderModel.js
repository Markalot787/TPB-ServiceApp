//server/models/FormBuilderModel.js
const mongoose = require('mongoose');

const FormBuilderSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	steps: {
		type: Array,
		required: true,
	},
	created_at: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('FormBuilder', FormBuilderSchema);
