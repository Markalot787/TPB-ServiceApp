// The App.js file is the main file that will be rendered in the browser. It is the parent component of all other components.
import React from 'react';
import AdminDashboard from './components/Admin/AdminDashboard';
// import FormComponent from './components/Forms/FormComponent';
import './App.css';

function App() {
	return (
		<div className="App">
			{/* <FormComponent /> */}
			<AdminDashboard />
		</div>
	);
}

export default App;
