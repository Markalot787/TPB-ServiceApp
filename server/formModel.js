const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
	clientName: String,
	clientPhoneNumber: String,
	clientEmail: String,
	eventType: String,
	eventDate: String,
	eventLocation: String,
	clientAddress: String,
	clientOtherContact: String,
	referal: String,
	eventTime: String,
	eventBoothLocation: String,
	eventBoothTime: String,
	offer: String,
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
