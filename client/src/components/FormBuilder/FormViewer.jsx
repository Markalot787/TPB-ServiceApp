//client/src/components/FormBuilder/FormViewer.jsx
import React, { useState } from 'react';
import styles from './FormBuilder.module.css';
import { saveFormData } from './api';

const FormViewer = ({ form, closeModal }) => {
	const [formData, setFormData] = useState(form);
	const [currentStep, setCurrentStep] = useState(0);
	const [isEditing, setIsEditing] = useState(false);

	const handleChange = (event, partIndex) => {
		const { value } = event.target;
		const updatedFormData = { ...formData };
		updatedFormData.steps[currentStep].formParts[partIndex].value = value;
		setFormData(updatedFormData);
	};

	const handleNext = () => {
		if (currentStep < formData.steps.length - 1) {
			setCurrentStep(currentStep + 1);
		}
	};

	const handlePrevious = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1);
		}
	};

	const handleSubmit = async () => {
		try {
			await saveFormData(form._id, formData);
			alert('Form submitted successfully!');
		} catch (error) {
			console.error('Error submitting form:', error);
		}
	};

	// const handleSave = async () => {
	// 	try {
	// 		await updateForm(form._id, formData); // Assume updateForm() saves the updated form data
	// 		alert('Form updated successfully!');
	// 	} catch (error) {
	// 		console.error('Error updating form:', error);
	// 	}
	// };

	const step = formData.steps[currentStep];

	return (
		<div className={styles.wrapper}>
			<h1>{formData.name}</h1>
			<h2>{step.title}</h2>
			{step.formParts.map((part, partIndex) => (
				<div key={partIndex} className={styles.formPart}>
					<label>{part.label}</label>
					{isEditing ? (
						<input
							type="text"
							value={part.value || ''}
							onChange={(event) => handleChange(event, partIndex)}
						/>
					) : (
						<span>{part.value}</span>
					)}
				</div>
			))}

			<div className={styles.navigation}>
				<button onClick={handlePrevious} disabled={currentStep === 0}>
					Previous
				</button>
				<button
					onClick={handleNext}
					disabled={currentStep === formData.steps.length - 1}
				>
					Next
				</button>
			</div>
			<div className={styles.buttons}>
				<button onClick={handleSubmit}>Save</button>
				<button onClick={() => setIsEditing(!isEditing)}>
					{isEditing ? 'Cancel Editing' : 'Edit Form'}
				</button>
				{/* <button onClick={closeModal} className={styles.cancelButton}>
					Close
				</button> */}
			</div>
		</div>
	);
};

export default FormViewer;
