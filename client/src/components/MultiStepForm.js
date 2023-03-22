import React, { useState } from 'react';
import styles from './FormWrapper.module.css';

const MultiStepForm = ({ steps, handleSubmit }) => {
	const [currentStep, setCurrentStep] = useState(0);

	const handleNext = () => {
		if (currentStep + 1 < steps.length) {
			setCurrentStep(currentStep + 1);
		}
	};

	const handlePrev = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1);
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (steps[currentStep].props.canProceed()) {
			if (currentStep === steps.length - 1) {
				handleSubmit(e);
			} else {
				handleNext();
			}
		} else {
			alert('Please select an offer before proceeding.');
		}
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<div className={styles.stepContainer}>
				{steps[currentStep]}
				<div className={styles.buttonContainer}>
					<button
						type="button"
						onClick={handlePrev}
						disabled={currentStep === 0}
					>
						Previous
					</button>
					<button type="submit">
						{currentStep === steps.length - 1 ? 'Submit' : 'Next'}
					</button>
				</div>
			</div>
		</form>
	);
};

export default MultiStepForm;
// 		<form onSubmit={handleFormSubmit}>
// 			{steps[currentStep]}

// 			<button type="button" onClick={handlePrev} disabled={currentStep === 0}>
// 				Previous
// 			</button>
// 			<button type="submit">
// 				{currentStep === steps.length - 1 ? 'Submit' : 'Next'}
// 			</button>
// 		</form>
// 	);
// };
