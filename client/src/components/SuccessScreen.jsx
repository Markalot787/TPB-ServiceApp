// successscreen.js
import React from 'react';
import styles from './FormWrapper.module.css';

const SuccessScreen = ({ formData }) => {
	const [contractText, setContractText] = useState(() => {
		if (!formData) {
			return 'No form data available';
		}

		return generateContractText(formData);
	});

	const generateContractText = (formData) => {
		const {
			eventType,
			eventDate,
			eventLocation,
			clientAddress,
			clientOtherContact,
			clientName,
			clientPhoneNumber,
			clientEmail,
		} = formData;

		return `TUPHOTOBOOTH
	CONTRATO DE ALQUILER 2023
	
	Mark anthony
	787-220-6577
	TuPhotoBooth@gmail.com
	
	Informacion del Evento
	
	Tipo de Evento: ${eventType || 'Short text input (optional)'}
	
	Fecha del Evento: ${eventDate}
	
	Nombre del Local y Pueblo: ${eventLocation || 'Long text input (optional)'}
	
	Piso/Ascensor: (Cantidad) Short text input (optional)
	
	Otro detalle: Short text input (optional)
	
	Ambiente de la Actividad:
	Interior  Checkbox (optional)
	ExteriorCheckbox (optional)
	
	Horario del evento: (llegada de invitados) Short text input (optional)
	
	Horario de comienzo del Alquiler: Short text input (optional)
	
	Nombre del cliente: ${clientName || 'Short text input (optional)'}
	
	Teléfonos: ${clientPhoneNumber || 'Short text input (optional)'}
	
	Dirección física del cliente: ${clientAddress || 'Long text input (optional)'}
	
	Persona de contacto: (otro, no novios) ${
		clientOtherContact || 'Short text input (optional)'
	}
	
	Teléfono: Short text input (optional)
	
	Email: ${clientEmail}
	
	...
	`; // Add the rest of the contract template text
	};

	return (
		<div className={styles.successScreen}>
			<h2 className={styles.heading}>Form submitted successfully!</h2>
			<ul className={styles.list}>
				{Object.entries(formData).map(([key, value]) => (
					<li key={key} className={styles.listItem}>
						{key}: {value}
					</li>
				))}
			</ul>
			<h2 className={styles.heading}>Form submitted successfully!</h2>
			<pre>{contractText}</pre>
		</div>
	);
};

export default SuccessScreen;
