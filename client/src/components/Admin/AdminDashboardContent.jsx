//Admin/AdminDashboard.jsx
import React, { useState } from 'react';
import ClientList from '../Leads/ClientList';
import ToDo from '../ToDo/ToDo';
import EventCalendar from '../Calendar/EventCalendar';
import styles from './AdminDashboard.module.css';
import ClientProfile from '../Leads/ClientProfile';
import FormBuilder from '../FormBuilder/FormBuilder';
import Modal from '../helpers/Modal';
import FormsList from '../FormBuilder/FormsList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SharedForm from '../FormBuilder/SharedForm';

const AdminDashboard = () => {
	const [showLeads, setShowLeads] = useState(false);
	const [selectedClient, setSelectedClient] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [showFormGenerator, setShowFormGenerator] = useState(false);
	const [showFormList, setShowFormList] = useState(false);

	const handleViewLeadsClick = () => {
		setShowLeads(!showLeads); // Toggle showLeads state
	};

	const handleSelectClient = (client) => {
		setSelectedClient(client);
	};

	const handleCloseProfile = () => {
		setSelectedClient(null);
	};

	<button onClick={() => setShowFormGenerator(true)}>
		Enter DocsGenerator Component
	</button>;

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.row}>
					<div className={styles.col}>
						<ToDo />
					</div>

					<div className={styles.col}>
						<EventCalendar />
						{selectedClient && (
							<ClientProfile
								clientName={selectedClient}
								onClose={handleCloseProfile}
							/>
						)}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.col}>
						<div>
							<h1>Leads</h1>
							<button onClick={handleViewLeadsClick}>View All Leads</button>
							{showLeads && (
								<ClientList
									onSelectClient={handleSelectClient}
									showModal={showModal}
									setShowModal={setShowModal}
								/>
							)}
						</div>

						{showModal && (
							<div className={styles.modal}>
								<div className={styles.modalContent}>
									<ClientProfile
										clientName={selectedClient}
										onClose={handleCloseProfile}
									/>
								</div>
							</div>
						)}
						<button onClick={() => setShowFormGenerator(true)}>
							Enter DocsGenerator Component
						</button>
						<Modal
							showModal={showFormGenerator}
							closeModal={() => setShowFormGenerator(false)}
						>
							<FormBuilder />
						</Modal>
					</div>

					<div className={styles.row}>
						<div className={styles.col}>
							<button onClick={() => setShowFormList(true)}>FormsList</button>
							<Modal
								showModal={showFormList}
								closeModal={() => setShowFormList(false)}
							>
								<FormsList />
							</Modal>
						</div>
					</div>

					<div className={styles.col}>
						<button>View Admin Profile</button>
						<button>Bookkeeping</button>
						<button>Marketplace for Plug Ins</button>
						<button>Timetracking</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminDashboard;
