// TextInput.jsx
import React from 'react';

const TextInput = ({ partData, updatePartData }) => {
	const handleLabelChange = (e) => {
		updatePartData({ ...partData, label: e.target.value });
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
		</div>
	);
};

export default TextInput;
