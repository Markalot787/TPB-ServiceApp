import React from 'react';
import { FormWrapper } from '../FormWrapper';

const EventForm = ({
	eventTime,
	eventBoothLocation,
	eventBoothTime,
	updateFields,
}) => {
	return (
		<FormWrapper title="Event Details">
			<label>Event Start Time</label>
			<input
				required
				type="text"
				value={eventTime}
				onChange={(e) => updateFields({ eventTime: e.target.value })}
			/>
			<label>Event Description</label>
			<input
				required
				type="text"
				value={eventBoothLocation}
				onChange={(e) => updateFields({ eventBoothLocation: e.target.value })}
			/>
			<label>Photobooth Run Time</label>
			<input
				required
				type="text"
				value={eventBoothTime}
				onChange={(e) => updateFields({ eventBoothTime: e.target.value })}
			/>
		</FormWrapper>
	);
};

export { EventForm };
