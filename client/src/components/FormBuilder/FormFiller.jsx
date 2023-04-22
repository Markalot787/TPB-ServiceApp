// components/FormBuilder/FormFiller.jsx
import React, { useState } from 'react';

const FormFiller = ({ form, onSubmit, onCancel }) => {
	const [formValues, setFormValues] = useState(
		form.fields.reduce((acc, field) => {
			acc[field.name] = '';
			return acc;
		}, {})
	);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit(formValues);
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>{form.name}</h2>
			{form.fields.map((field, index) => (
				<div key={index}>
					<label htmlFor={field.name}>{field.label}:</label>
					<input
						type={field.type}
						name={field.name}
						id={field.name}
						value={formValues[field.name]}
						onChange={handleChange}
					/>
				</div>
			))}
			<button type="submit">Submit</button>
			<button type="button" onClick={onCancel}>
				Cancel
			</button>
		</form>
	);
};

export default FormFiller;
