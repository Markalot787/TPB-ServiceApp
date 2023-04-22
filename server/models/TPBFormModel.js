////server/models/TPBFormModel.js
const mongoose = require('mongoose');

const TPBformSchema = new mongoose.Schema({
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
	createdAt: { type: Date, default: Date.now },
});

const TPBForm = mongoose.model('TPBForm', TPBformSchema);

module.exports = TPBForm;
