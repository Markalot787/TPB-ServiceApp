// Step.jsx
import React from 'react';
import TextInput from './inputs/TextInput';
import SelectInput from './inputs/SelectInput';
import CheckboxInput from './inputs/CheckboxInput';
import RadioInput from './inputs/RadioInput';

const Step = ({
	stepNumber,
	stepData,
	updateStepTitle,
	addFormPart,
	updatePartData,
}) => {
	const handleTitleChange = (e) => {
		updateStepTitle(stepNumber, e.target.value);
	};

	const handleAddFormPart = (partType) => {
		addFormPart(stepNumber, partType);
	};

	const renderFormPart = (part, index) => {
		switch (part.type) {
			case 'TextInput':
				return (
					<TextInput
						key={index}
						partData={part}
						updatePartData={(updatedData) =>
							updatePartData(stepNumber, index, updatedData)
						}
					/>
				);

			case 'SelectInput':
				return (
					<SelectInput
						key={index}
						partData={part}
						updatePartData={(updatedData) =>
							updatePartData(stepNumber, index, updatedData)
						}
					/>
				);
			case 'CheckboxInput':
				return (
					<CheckboxInput
						key={index}
						partData={part}
						updatePartData={(updatedData) =>
							updatePartData(stepNumber, index, updatedData)
						}
					/>
				);
			case 'RadioInput':
				return (
					<RadioInput
						key={index}
						partData={part}
						updatePartData={(updatedData) =>
							updatePartData(stepNumber, index, updatedData)
						}
					/>
				);
			default:
				return <p key={index}>{part.type}</p>;
		}
	};

	return (
		<div>
			<h2>Step {stepNumber + 1}</h2>
			<input
				type="text"
				value={stepData.title}
				onChange={handleTitleChange}
				placeholder="Step Title"
			/>
			<button onClick={() => handleAddFormPart('TextInput')}>
				Add Text Input
			</button>
			<button onClick={() => handleAddFormPart('SelectInput')}>
				Add Select Input
			</button>
			<button onClick={() => handleAddFormPart('CheckboxInput')}>
				Add Checkbox Input
			</button>
			<button onClick={() => handleAddFormPart('RadioInput')}>
				Add Radio Input
			</button>
			<div>
				{stepData.formParts.map((part, index) => renderFormPart(part, index))}
			</div>
		</div>
	);
};

export default Step;
