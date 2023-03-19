import React from 'react';

const ServiceSelect = ({ services, selectedService, onServiceSelect }) => {
	return (
		<select
			value={selectedService}
			onChange={(e) => onServiceSelect(e.target.value)}
		>
			<option value="">Select a service</option>
			{services.map((service) => (
				<option key={service} value={service}>
					{service}
				</option>
			))}
		</select>
	);
};

export default ServiceSelect;
