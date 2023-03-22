import React, { useState } from 'react';
import { ClientForm } from './components/steps/ClientForm';
import { ContactForm } from './components/steps/ContactForm';
import { EventForm } from './components/steps/EventForm';
import QuoteForm from './components/steps/QuoteForm';
import MultiStepForm from './components/MultiStepForm';
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
		offer: '',
	});

	const [showSuccessScreen, setShowSuccessScreen] = useState(false);

	const updateClientFields = (updatedFields) => {
		console.log('Updating quote fields:', updatedFields);
		setClientData({ ...clientData, ...updatedFields });
	};

	const updateEventFields = (updatedFields) => {
		setEventData({ ...eventData, ...updatedFields });
		console.log('Updating quote fields:', updatedFields);
	};

	const updateContactFields = (updatedFields) => {
		console.log('Updating contact fields:', updatedFields);
		setContactData({ ...contactData, ...updatedFields });
	};

	const updateQuoteFields = (updatedFields) => {
		console.log('Updating quote fields:', updatedFields);
		setQuoteData({ ...quoteData, ...updatedFields });
	};

	const canProceed = () => {
		return quoteData.offer !== '';
	};

	const steps = [
		<ContactForm
			key="contact-form"
			contactData={contactData}
			updateFields={updateContactFields}
			canProceed={() => true}
		/>,
		<ClientForm
			key="client-form"
			clientData={clientData}
			updateFields={updateClientFields}
			canProceed={() => true}
		/>,
		<EventForm
			key="event-form"
			eventData={eventData}
			updateFields={updateEventFields}
			canProceed={() => true}
		/>,
		<QuoteForm
			key="quote-form"
			quoteData={quoteData}
			updateFields={updateQuoteFields}
			canProceed={canProceed}
		/>,
	];

	const handleSubmit = async (e) => {
		e.preventDefault();

		const combinedData = {
			...contactData,
			...clientData,
			...eventData,
			...quoteData,
		};
		console.log('Combined data:', combinedData);
		try {
			await axios.post('http://localhost:5000/api/forms', combinedData);
			console.log('Form data submitted successfully');
		} catch (error) {
			console.error('Error submitting form data:', error);
		}

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
				<SuccessScreen formData={combinedData} />
			) : (
				<MultiStepForm steps={steps} handleSubmit={handleSubmit} />
			)}
		</div>
	);
}

export default App;
