// client/src/components/FormBuilder/FormPreview.jsx
import React from 'react';

const FormPreview = ({ form, onEditClick, onFillOutClick }) => {
	return (
		<div>
			<h2>{form.name}</h2>
			{/* Display form fields */}
			{form.fields.map((field, index) => (
				<div key={index}>
					<label>{field.label}:</label>
					<input type={field.type} disabled value={field.value} />
				</div>
			))}
			<button onClick={onEditClick}>Edit Form</button>
			<button onClick={onFillOutClick}>Fill Out Form</button>
		</div>
	);
};

export default FormPreview;
