// src/components/MultiStepForm.js
import React, { useState } from 'react';

const MultiStepForm = ({ steps, handleSubmit }) => {
	const [currentStep, setCurrentStep] = useState(0);

	const next = () => {
		setCurrentStep(currentStep + 1);
	};

	const prev = () => {
		setCurrentStep(currentStep - 1);
	};

	return (
		<form onSubmit={handleSubmit}>
			{steps[currentStep]}

			<div style={{ marginTop: '1rem' }}>
				{currentStep > 0 && (
					<button type="button" onClick={prev}>
						Previous
					</button>
				)}
				{currentStep < steps.length - 1 ? (
					<button type="button" onClick={next}>
						Next
					</button>
				) : (
					<button type="submit">Submit</button>
				)}
			</div>
		</form>
	);
};

export default MultiStepForm;
