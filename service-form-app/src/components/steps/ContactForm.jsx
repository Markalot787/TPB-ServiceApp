import React from 'react';
import { FormWrapper } from '../FormWrapper';

const ContactForm = ({
	clientName,
	clientPhoneNumber,
	clientEmail,
	eventType,
	eventDate,
	eventLocation,
	updateFields,
}) => {
	return (
		<FormWrapper title="Contact Details">
			<label>Nombre/Compañía</label>
			<input
				autoFocus
				required
				type="text"
				value={clientName}
				onChange={(e) => updateFields({ clientName: e.target.value })}
			/>
			<label>Telefono</label>
			<input
				required
				min={1}
				type="number"
				value={clientPhoneNumber}
				onChange={(e) => updateFields({ clientPhoneNumber: e.target.value })}
			/>
			<label>Email</label>
			<input
				min={1}
				type="email"
				value={clientEmail}
				onChange={(e) => updateFields({ clientEmail: e.target.value })}
			/>
			<label>Event Type</label>
			<input
				required
				type="text"
				value={eventType}
				onChange={(e) => updateFields({ eventType: e.target.value })}
			/>
			<label>Fecha del Evento</label>
			<input
				required
				type="text"
				value={eventDate}
				onChange={(e) => updateFields({ eventDate: e.target.value })}
			/>
			<label>Event Location</label>
			<input
				required
				type="text"
				value={eventLocation}
				onChange={(e) => updateFields({ eventLocation: e.target.value })}
			/>
		</FormWrapper>
	);
};

export { ContactForm };
