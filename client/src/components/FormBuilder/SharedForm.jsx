// components/FormBuilder/SharedForm.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FormBuilder from 'react-formio';
import { getFormById, saveFormData } from './api';

const SharedForm = () => {
	const { id } = useParams();
	const [form, setForm] = useState(null);

	useEffect(() => {
		async function fetchForm() {
			const fetchedForm = await getFormById(id);
			setForm(fetchedForm);
		}

		fetchForm();
	}, [id]);

	const handleFormSubmit = async (submission) => {
		await saveFormData(id, submission);
		console.log('Form data saved:', submission);
	};

	return (
		<div>
			{form && (
				<>
					<h1>{form.name}</h1>
					<FormBuilder.ReactForm form={form} onSubmit={handleFormSubmit} />
				</>
			)}
		</div>
	);
};

export default SharedForm;
