// RadioInput.jsx
import React, { useState } from 'react';

const RadioInput = ({ partData, updatePartData }) => {
	const [newOption, setNewOption] = useState('');

	const handleLabelChange = (e) => {
		updatePartData({ ...partData, label: e.target.value });
	};

	const handleNewOptionChange = (e) => {
		setNewOption(e.target.value);
	};

	const addOption = () => {
		if (newOption.trim() !== '') {
			updatePartData({
				...partData,
				options: [...partData.options, newOption],
			});
			setNewOption('');
		}
	};

	return (
		<div>
			<label>
				Label:
				<input
					type="text"
					value={partData.label}
					onChange={handleLabelChange}
					placeholder="Enter Label"
				/>
			</label>
			<div>
				Options:
				<ul>
					{partData.options.map((option, index) => (
						<li key={index}>{option}</li>
					))}
				</ul>
				<input
					type="text"
					value={newOption}
					onChange={handleNewOptionChange}
					placeholder="New Option"
				/>
				<button onClick={addOption}>Add Option</button>
			</div>
		</div>
	);
};

export default RadioInput;
