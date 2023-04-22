//client/src/components/FormBuilder/FormList.jsx
import React, { useState, useEffect } from 'react';
import { getForms } from './api';
import FormViewer from './FormViewer';
import styles from './FormBuilder.module.css';

const FormsList = () => {
	const [forms, setForms] = useState([]);
	const [selectedForm, setSelectedForm] = useState(null);

	useEffect(() => {
		async function fetchForms() {
			const forms = await getForms(); // replace getCreatedForms with getForms
			setForms(forms);
			console.log(forms);
		}

		fetchForms();
	}, []);

	const handleFormClick = (form) => {
		setSelectedForm(form);
	};

	return (
		<div className={styles.container}>
			<div className={styles.formsList}>
				<h1>Forms List</h1>
				<ul className={styles.formList}>
					{Array.isArray(forms) &&
						forms.map((form, index) => (
							<li
								key={form._id}
								onClick={() => handleFormClick(form)}
								className={index % 2 === 0 ? styles.even : styles.odd}
							>
								<a href="#" onClick={(e) => e.preventDefault()}>
									{form.name}
								</a>
							</li>
						))}
				</ul>
			</div>
			<div className={styles.formViewer}>
				{selectedForm && (
					<FormViewer key={selectedForm._id} form={selectedForm} />
				)}
			</div>
		</div>
	);
};

// 	return (
// 		<div>
// 			<h1>Forms List</h1>
// 			<ul className={styles.formList}>
// 				{Array.isArray(forms) &&
// 					forms.map((form, index) => (
// 						<li
// 							key={form._id}
// 							onClick={() => handleFormClick(form)}
// 							className={index % 2 === 0 ? styles.even : styles.odd}
// 						>
// 							<a href="#" onClick={(e) => e.preventDefault()}>
// 								{form.name}
// 							</a>
// 						</li>
// 					))}
// 			</ul>
// 			{isModalOpen && (
// 				<Modal
// 					showModal={isModalOpen}
// 					closeModal={closeModal}
// 					title="Form Viewer"
// 				>
// 					<FormViewer form={selectedForm} />
// 				</Modal>
// 			)}
// 		</div>
// 	);
// };

export default FormsList;
