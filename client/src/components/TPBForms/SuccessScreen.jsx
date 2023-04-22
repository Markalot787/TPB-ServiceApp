//succescreen to show the form data and test components
import React, { useState, useRef } from 'react';
import styles from './FormWrapper.module.css';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const SuccessScreen = ({ formData }) => {
	const pdfRef = useRef(null);

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

		// Convert eventDate object to a string in the format "yyyy-MM-dd"

		const formattedEventDate =
			eventDate instanceof Date ? eventDate.toISOString().slice(0, 10) : '';

		// const formattedEventDate =
		// 	eventDate instanceof Date ? eventDate.toISOString().slice(0, 10) : '';

		return `TUPHOTOBOOTH
		CONTRATO DE ALQUILER 2023
		
		Mark anthony
		787-220-6577
		TuPhotoBooth@gmail.com
		
		Informacion del Evento
		
		Tipo de Evento: ${eventType || 'Short text input (optional)'}
		
		Fecha del Evento: ${formattedEventDate}
		
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

	const [contractText] = useState(() => {
		if (!formData) {
			return 'No form data available';
		}

		return generateContractText(formData);
	});

	const downloadPdf = async () => {
		const canvas = await html2canvas(pdfRef.current);
		const imgData = canvas.toDataURL('image/png');
		const pdf = new jsPDF('p', 'mm', 'a4');
		const imgProps = pdf.getImageProperties(imgData);
		const pdfWidth = pdf.internal.pageSize.getWidth();
		const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
		pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
		pdf.save('form-data.pdf');
	};

	const printPdf = async () => {
		const canvas = await html2canvas(pdfRef.current);
		const imgData = canvas.toDataURL('image/png');
		const win = window.open('', '_blank');
		win.document.write(
			`<img src="${imgData}" onload="window.print();window.close()" />`
		);
		win.document.close();
	};

	if (!formData) {
		return <div className={styles.error}>No form data available</div>;
	}

	return (
		<div className={styles.successScreen}>
			<h2 className={styles.heading}>Form submitted successfully!</h2>
			<div ref={pdfRef}>
				<ul className={styles.list}>
					{Object.entries(formData).map(([key, value]) => (
						<li key={key} className={styles.listItem}>
							{key}: {value}
						</li>
					))}
				</ul>
				<pre>{contractText}</pre>
			</div>
			<button onClick={downloadPdf}>Download PDF</button>
			<button onClick={printPdf}>Print</button>
		</div>
	);
};

export default SuccessScreen;
