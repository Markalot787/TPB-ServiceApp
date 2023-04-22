import React, { useState } from 'react';
import { ClientForm } from './steps/ClientForm';
import { ContactForm } from './steps/ContactForm';
import { EventForm } from './steps/EventForm';
import QuoteForm from './steps/QuoteForm';
import MultiStepForm from './MultiStepForm';
import SuccessScreen from './SuccessScreen';
import axios from 'axios';

const FormComponent = () => {
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

		try {
			await axios.post('http://localhost:5000/api/forms', combinedData);
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
		<>
			{showSuccessScreen ? (
				<SuccessScreen formData={combinedData} />
			) : (
				<MultiStepForm steps={steps} handleSubmit={handleSubmit} />
			)}
		</>
	);
};

export default FormComponent;
