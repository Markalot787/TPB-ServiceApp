import React from 'react';
import { FormWrapper } from '../FormWrapper';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomInput = ({ value, onClick }) => (
	<div
		style={{
			backgroundColor: 'yellow',
			color: 'black',
			cursor: 'pointer',
			display: 'inline-block',
			padding: '5px 10px',
		}}
		onClick={onClick}
	>
		{value || 'Select date'}
	</div>
);

const ContactForm = ({
	clientName,
	clientPhoneNumber,
	clientEmail,
	eventType,
	eventDate,
	eventLocation,
	updateFields,
}) => {
	const [selectedDate, setSelectedDate] = React.useState(eventDate);

	const handleDateChange = (date) => {
		setSelectedDate(date);
		updateFields({ eventDate: date?.toISOString().split('T')[0] });
	};

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
			<DatePicker
				required
				selected={selectedDate ? new Date(selectedDate) : null}
				onChange={handleDateChange}
				dateFormat="yyyy-MM-dd"
				customInput={<CustomInput value={selectedDate} />}
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
