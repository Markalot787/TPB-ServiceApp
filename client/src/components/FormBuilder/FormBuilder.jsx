//client/src/components/FormBuilder/FormBuilder.jsx
import React, { useState } from 'react';
import Step from './Step';
import axios from '../helpers/axiosConfig';

const FormBuilder = () => {
	const [steps, setSteps] = useState([]);
	const [currentStep, setCurrentStep] = useState(0);
	const [formName, setFormName] = useState('');

	const addStep = () => {
		setSteps([...steps, { title: '', formParts: [] }]);
		setCurrentStep(steps.length);
	};

	const updateStepTitle = (stepNumber, title) => {
		const updatedSteps = [...steps];
		updatedSteps[stepNumber].title = title;
		setSteps(updatedSteps);
	};

	const addFormPart = (stepNumber, partType) => {
		const updatedSteps = [...steps];
		const partData = { type: partType };

		if (partType === 'SelectInput' || partType === 'RadioInput') {
			partData.options = [];
		}

		updatedSteps[stepNumber].formParts.push(partData);
		setSteps(updatedSteps);
	};

	const goToNextStep = () => {
		setCurrentStep(Math.min(currentStep + 1, steps.length - 1));
	};

	const goToPreviousStep = () => {
		setCurrentStep(Math.max(currentStep - 1, 0));
	};

	const updatePartData = (stepNumber, partIndex, updatedData) => {
		const updatedSteps = [...steps];
		updatedSteps[stepNumber].formParts[partIndex] = updatedData;
		setSteps(updatedSteps);
	};

	const saveForm = async () => {
		try {
			const response = await axios.post('/api/formBuilder', {
				name: formName,
				steps,
			});

			console.log('Form saved:', response.data);
			// You can also reset the form here or redirect the user to another page
		} catch (error) {
			console.error('Error saving the form:', error);
		}
	};

	return (
		<div>
			<h1>Form Generator</h1>
			{steps.length === 0 && !formName ? (
				<button onClick={addStep}>Add Step</button>
			) : currentStep === steps.length ? (
				<div>
					<input
						type="text"
						value={formName}
						onChange={(e) => setFormName(e.target.value)}
						placeholder="Form Name"
					/>
					<button onClick={saveForm}>Save Form</button>
				</div>
			) : (
				<div>
					<Step
						stepNumber={currentStep}
						stepData={steps[currentStep]}
						updateStepTitle={updateStepTitle}
						addFormPart={addFormPart}
						updatePartData={updatePartData}
					/>
					{/* Navigation buttons */}
					<button onClick={goToPreviousStep}>Previous Step</button>
					<button onClick={goToNextStep}>Next Step</button>
					<button onClick={addStep}>Add Step</button>
					<button onClick={() => setCurrentStep(steps.length)}>Done</button>
				</div>
			)}
		</div>
	);
};

export default FormBuilder;
