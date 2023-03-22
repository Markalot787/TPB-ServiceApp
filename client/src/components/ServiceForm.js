import React, { useState } from 'react';
import axios from 'axios';
import ServiceSelect from './ServiceSelect';

const services = ['Service 1', 'Service 2', 'Service 3'];

const ServiceForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		service: '',
		message: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await axios.post('http://localhost:5000/api/forms', formData);
		setFormData({
			name: '',
			email: '',
			service: '',
			message: '',
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<ServiceSelect
				services={services}
				selectedService={formData.service}
				onServiceSelect={(service) => setFormData({ ...formData, service })}
			/>
			<input
				type="text"
				name="name"
				placeholder="Name"
				value={formData.name}
				onChange={handleChange}
				required
			/>
			<input
				type="email"
				name="email"
				placeholder="Email"
				value={formData.email}
				onChange={handleChange}
				required
			/>
			<textarea
				name="message"
				placeholder="Message"
				value={formData.message}
				onChange={handleChange}
				required
			></textarea>
			<button type="submit">Submit</button>
		</form>
	);
};

export default ServiceForm;
