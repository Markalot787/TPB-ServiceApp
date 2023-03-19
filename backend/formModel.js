const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
	contactData: {
		clientName: String,
		clientPhoneNumber: String,
		clientEmail: String,
		eventType: String,
		eventDate: String,
		eventLocation: String,
	},
	clientData: {
		clientAddress: String,
		clientOtherContact: String,
		referal: String,
	},
	eventData: {
		eventTime: String,
		eventBoothLocation: String,
		eventBoothTime: String,
	},
	quoteData: {
		offer2hr: String,
		offer3hr: String,
		offer4hr: String,
		offer5hr: String,
		extraDigitalAlbum: String,
		extraMonitor: String,
		extraBoomerangs: String,
		extraUsb: String,
		extraScrapBook: String,
		extraPremiumTemplate: String,
		extraHashtag: String,
		extraGreenScreen: String,
		extraDebranding: String,
		extraPrivacy: String,
		extraSecondBooth: String,
		extraMetroArea: String,
		extraOutsideMetroArea: String,
		extraEastSouthArea: String,
		extraCenterWestArea: String,
	},
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
