// server/routes/FormBuilder.js
const express = require('express');
const router = express.Router();
const FormBuilder = require('../models/FormBuilderModel');

router.post('/', async (req, res) => {
	try {
		const newForm = new FormBuilder(req.body);
		const savedForm = await newForm.save();
		res.status(201).json(savedForm);
	} catch (error) {
		res.status(400).json({ message: 'Error saving the form', error });
	}
});

module.exports = router;
