//view leads profile
//create crud system to modify form info
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ClientProfile.module.css';

const ClientProfile = ({ clientName, onClose }) => {
	const [clientData, setClientData] = useState([]);
	const [editing, setEditing] = useState(false);
	const [editedData, setEditedData] = useState({});

	useEffect(() => {
		const fetchClientData = async () => {
			try {
				const response = await axios.get(
					`http://localhost:5000/api/forms/${clientName}`
				);
				setClientData(response.data);
				setEditedData(response.data[0]);
			} catch (error) {
				console.error('Error fetching client data:', error);
			}
		};

		fetchClientData();
	}, [clientName]);

	const handleEditChange = (event) => {
		setEditedData({
			...editedData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSave = async () => {
		try {
			await axios.put(
				`http://localhost:5000/api/forms/${editedData._id}`,
				editedData
			);
			setClientData([editedData]);
			setEditing(false);
		} catch (error) {
			console.error('Error updating client data:', error);
		}
	};

	const handleDelete = async () => {
		try {
			await axios.delete(`http://localhost:5000/api/forms/${clientName}`);
			setClientData([]);
		} catch (error) {
			console.error('Error deleting client data:', error);
		}
	};

	return (
		<div className={styles.wrapper}>
			<h2>Client Profile: {clientName}</h2>
			<button className={styles.closeButton} onClick={onClose}>
				X
			</button>
			{editing ? (
				<div>
					{Object.keys(editedData).map((key) => (
						<div key={key}>
							<label>{key}:</label>
							<input
								type="text"
								name={key}
								value={editedData[key]}
								onChange={handleEditChange}
							/>
						</div>
					))}
					<div className={styles.editContainer}>
						<button className={styles.deleteButton} onClick={handleSave}>
							Save
						</button>
						<button
							className={styles.editButton}
							onClick={() => setEditing(false)}
						>
							Cancel
						</button>
					</div>
				</div>
			) : (
				<>
					<div>
						<ul>
							{clientData.map((data, index) => (
								<li key={index}>
									{Object.entries(data).map(([key, value]) => (
										<p key={key}>
											<strong>{key}:</strong> {value}
										</p>
									))}
								</li>
							))}
						</ul>
					</div>
					<div className={styles.buttonContainer}>
						<button
							className={styles.editButton}
							onClick={() => setEditing(true)}
						>
							Edit
						</button>
						<button className={styles.deleteButton} onClick={handleDelete}>
							Delete
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default ClientProfile;
