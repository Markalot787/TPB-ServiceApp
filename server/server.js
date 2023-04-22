// server.js Server-side code
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const TPBForm = require('./models/TPBFormModel');
const FormBuilder = require('./models/FormBuilderModel');
const ToDo = require('./models/todo');
const todosRoute = require('./routes/todos');
const formBuilderRoutes = require('./routes/FormBuilder');
const FormResponse = require('./models/FormResponseModel');

require('dotenv').config();

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use('/api/todos', todosRoute);
// app.use('/api/FormBuilder', FormBuilderRoutes);
app.use('/api/formBuilder', formBuilderRoutes);

const mongoUri = process.env.MONGO_URI;

const connectToMongo = async () => {
	try {
		await mongoose.connect(mongoUri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Connected to MongoDB Atlas');
	} catch (error) {
		console.error('Error connecting to MongoDB Atlas:', error.message);
	}
};

connectToMongo();

mongoose.connection.once('open', () => {
	console.log('Connected to MongoDB Atlas');
});

async function saveFormResponse(formId, formData) {
	const formResponse = new FormResponse({
		formId: formId,
		data: formData,
	});

	try {
		const savedFormResponse = await formResponse.save();
		return savedFormResponse;
	} catch (error) {
		console.error('Error saving form response:', error);
		throw error;
	}
}

// Form API endpoints

// Get all created forms from formbuilder
app.get('/api/formBuilder', async (req, res) => {
	try {
		const formBuilder = await FormBuilder.find();
		res.status(200).json(formBuilder);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

app.post('/api/formBuilder', async (req, res) => {
	const newFormBuilder = new FormBuilder(req.body); // Use the request body directly

	try {
		const savedFormBuilder = await newFormBuilder.save();
		res.status(201).json(savedFormBuilder);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

app.post('/api/formBuilder/:formId/responses', async (req, res) => {
	try {
		const formId = req.params.formId;
		const formData = req.body;

		// Save the form response to the database
		// You need to implement this function based on your database schema
		const savedResponse = await saveFormResponse(formId, formData);

		res.status(201).json(savedResponse);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Get all TPBforms
// app.get('/api/TPBforms', async (req, res) => {
// 	try {
// 		const TPBforms = await TPBForm.find();
// 		res.status(200).json(TPBforms);
// 	} catch (error) {
// 		res.status(500).json({ error: error.message });
// 	}
// });

// Get all unique clients
app.get('/api/clients', async (req, res) => {
	try {
		const clients = await Form.distinct('clientName');
		res.status(200).json(clients);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Get client data by name
app.get('/api/forms/:clientName', async (req, res) => {
	try {
		const clientData = await Form.find({ clientName: req.params.clientName });
		res.status(200).json(clientData);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Update client data by ID
app.put('/api/forms/:id', async (req, res) => {
	try {
		const updatedClientData = await Form.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		res.status(200).json(updatedClientData);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

// Delete client data by name
app.delete('/api/forms/:clientName', async (req, res) => {
	try {
		await Form.deleteMany({ clientName: req.params.clientName });
		res.status(200).json({ message: 'Client data deleted successfully' });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

app.listen(5000, () => {
	console.log('Server is running on port 5000');
});
