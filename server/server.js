const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Form = require('./formModel'); // Import the Form model

const app = express();

// app.use(cors());
app.use(cors({ origin: 'http://localhost:3000' })); // Replace 'http://localhost:3000' with your client app's URL

app.use(express.json());

const mongoUri =
	'mongodb+srv://@cluster0.qd9ub.mongodb.net/myDatabase?retryWrites=true&w=majority';

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

app.post('/api/forms', async (req, res) => {
	// Remove this line: const { contactData, clientData, eventData, quoteData } = req.body;

	const newForm = new Form(req.body); // Use the request body directly

	try {
		const savedForm = await newForm.save();
		res.status(201).json(savedForm);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

app.listen(5000, () => {
	console.log('Server is running on port 5000');
});
