// models/FormResponseModel.js
const mongoose = require('mongoose');

const FormResponseSchema = new mongoose.Schema(
	{
		formId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'FormBuilder',
			required: true,
		},
		data: {
			type: Object,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{
		timestamps: true,
	}
);

const FormResponse = mongoose.model('FormResponse', FormResponseSchema);
module.exports = FormResponse;
