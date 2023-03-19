import React from 'react';

const SuccessScreen = ({ data }) => {
	return (
		<div className="success-screen">
			<h2>Form submitted successfully!</h2>
			{/* You can display any additional information using the data prop */}
		</div>
	);
};

export default SuccessScreen;
