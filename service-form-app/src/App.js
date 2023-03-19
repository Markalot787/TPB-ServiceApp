import React, { useState } from 'react';
import MultiStepForm from './components/MultiStepForm';
import { ClientForm } from './components/steps/ClientForm';
import { ContactForm } from './components/steps/ContactForm';
import { EventForm } from './components/steps/EventForm';
import { QuoteForm } from './components/steps/QuoteForm';
import SuccessScreen from './components/SuccessScreen';
import axios from 'axios';

function App() {
	const [clientData, setClientData] = useState({
		clientAddress: '',
		clientOtherContact: '',
		referal: '',
	});

	const [eventData, setEventData] = useState({
		eventTime: '',
		eventBoothLocation: '',
		eventBoothTime: '',
	});

	const [contactData, setContactData] = useState({
		clientName: '',
		clientPhoneNumber: '',
		clientEmail: '',
		eventType: '',
		eventDate: '',
		eventLocation: '',
	});

	const [quoteData, setQuoteData] = useState({
		offer2hr: '',
		offer3hr: '',
		offer4hr: '',
		offer5hr: '',
		extraDigitalAlbum: '',
		extraMonitor: '',
		extraBoomerangs: '',
		extraUsb: '',
		extraScrapBook: '',
		extraPremiumTemplate: '',
		extraHashtag: '',
		extraGreenScreen: '',
		extraDebranding: '',
		extraPrivacy: '',
		extraSecondBooth: '',
		extraMetroArea: '',
		extraOutsideMetroArea: '',
		extraEastSouthArea: '',
		extraCenterWestArea: '',
	});

	const [showSuccessScreen, setShowSuccessScreen] = useState(false);

	const [submittedFormData, setSubmittedFormData] = useState({});

	const updateClientFields = (updatedFields) => {
		setClientData({ ...clientData, ...updatedFields });
	};

	const updateEventFields = (updatedFields) => {
		setEventData({ ...eventData, ...updatedFields });
	};

	const updateContactFields = (updatedFields) => {
		setContactData({ ...contactData, ...updatedFields });
	};

	const updateQuoteFields = (updatedFields) => {
		setQuoteData({ ...quoteData, ...updatedFields });
	};

	const steps = [
		<ContactForm
			key="contact-form"
			contactData={contactData}
			updateFields={updateContactFields}
		/>,
		<ClientForm
			key="client-form"
			clientData={clientData}
			updateFields={updateClientFields}
		/>,
		<EventForm
			key="event-form"
			eventData={eventData}
			updateFields={updateEventFields}
		/>,
		<QuoteForm
			key="quote-form"
			quoteData={quoteData}
			updateFields={updateQuoteFields}
		/>,
	];

	const resetForm = () => {
		setContactData({
			clientName: '',
			clientPhoneNumber: '',
			clientEmail: '',
		});
		setClientData({
			clientName: '',
			clientEmail: '',
			clientPhone: '',
			clientAddress: '',
			clientOtherContact: '',
			referal: '',
		});
		setEventData({
			eventType: '',
			eventDate: '',
			eventLocation: '',
			eventTime: '',
			eventBoothLocation: '',
			eventBoothTime: '',
		});
		setQuoteData({
			offer2hr: '',
			offer3hr: '',
			offer4hr: '',
			offer5hr: '',
			extraDigitalAlbum: '',
			extraMonitor: '',
			extraBoomerangs: '',
			extraUsb: '',
			extraScrapBook: '',
			extraPremiumTemplate: '',
			extraHashtag: '',
			extraGreenScreen: '',
			extraDebranding: '',
			extraPrivacy: '',
			extraSecondBooth: '',
			extraMetroArea: '',
			extraOutsideMetroArea: '',
			extraEastSouthArea: '',
			extraCenterWestArea: '',
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = {
			...contactData,
			...clientData,
			...eventData,
			...quoteData,
		};
		await axios.post('http://localhost:5000/api/forms', formData);
		resetForm();

		// Set submitted form data
		setSubmittedFormData(formData);

		// Show the success screen
		setShowSuccessScreen(true);
	};

	const combinedData = {
		...contactData,
		...clientData,
		...eventData,
		...quoteData,
	};

	return (
		<div className="App">
			<h1>Multi-Step Form</h1>
			{showSuccessScreen ? (
				<SuccessScreen data={combinedData} />
			) : (
				<MultiStepForm steps={steps} handleSubmit={handleSubmit} />
			)}
		</div>
	);
}

export default App;
