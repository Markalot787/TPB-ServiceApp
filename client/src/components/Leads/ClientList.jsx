// ClientList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ClientList.module.css';
import ClientProfile from '../Leads/ClientProfile';

const ClientList = () => {
	const [clients, setClients] = useState([]);
	const [selectedClient, setSelectedClient] = useState(null);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		const fetchClients = async () => {
			try {
				const response = await axios.get('http://localhost:5000/api/clients');
				setClients(response.data);
			} catch (error) {
				console.error('Error fetching client data:', error);
			}
		};

		fetchClients();
	}, []);

	const handleClientClick = (client) => {
		setSelectedClient(client);
		setShowModal(true);
	};

	const closeClientProfile = () => {
		setSelectedClient(null);
		setShowModal(false);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<h2>Client List</h2>
				<ul>
					{clients.map((client, index) => (
						<li key={index}>
							<button
								className={styles.clientButton}
								onClick={() => handleClientClick(client)}
							>
								{client}
							</button>
						</li>
					))}
				</ul>
			</div>
			{showModal && (
				<div className={styles.modal}>
					<div className={styles.modalContent}>
						<ClientProfile
							clientName={selectedClient}
							onClose={closeClientProfile}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default ClientList;
