// Invoice.jsx
import React, { useState, useEffect, useRef } from 'react';
import styles from './FormWrapper.module.css';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const Invoice = ({ formData }) => {
	const pdfRef = useRef(null);

	const fetchInvoiceData = async () => {
		// Replace this with your actual data fetching method
		return new Promise((resolve) =>
			setTimeout(
				() =>
					resolve({
						invoiceNumber: 'INV123456',
						invoiceDate: '2023-03-26',
						dueDate: '2023-04-10',
					}),
				1000
			)
		);
	};

	const [invoiceData, setInvoiceData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchInvoiceData();
			setInvoiceData(data);
		};
		fetchData();
	}, []);

	const generateInvoiceText = (formData, invoiceData) => {
		if (!formData || !invoiceData) {
			return 'No data available';
		}

		const {
			clientName,
			clientPhoneNumber,
			clientEmail,
			eventType,
			eventDate,
			eventLocation,
			clientAddress,
			clientOtherContact,
			referal,
			eventTime,
			eventBoothLocation,
			eventBoothTime,
			offer,
		} = formData;

		const { invoiceNumber, invoiceDate, dueDate } = invoiceData;

		return `Invoice Number: ${invoiceNumber}
Invoice Date: ${invoiceDate}
Due Date: ${dueDate}

Client Information:
Name: ${clientName || 'Short text input (optional)'}
Phone Number: ${clientPhoneNumber}
Email: ${clientEmail}
Address: ${clientAddress}
Other Contact: ${clientOtherContact}
Referal: ${referal}

Event Information:
Event Type: ${eventType}
Event Date: ${eventDate}
Event Location: ${eventLocation}
Event Time: ${eventTime}
Event Booth Location: ${eventBoothLocation}
Event Booth Time: ${eventBoothTime}

Quote Information:
Offer: ${offer}
...
`; // Add the rest of the invoice template text
	};

	const [invoiceText, setInvoiceText] = useState(() => {
		if (!formData || !invoiceData) {
			return 'No data available';
		}

		return generateInvoiceText(formData, invoiceData);
	});

	useEffect(() => {
		setInvoiceText(generateInvoiceText(formData, invoiceData));
	}, [formData, invoiceData]);

	const downloadPdf = async () => {
		const canvas = await html2canvas(pdfRef.current);
		const imgData = canvas.toDataURL('image/png');
		const pdf = new jsPDF('p', 'mm', 'a4');
		const imgProps = pdf.getImageProperties(imgData);
		const pdfWidth = pdf.internal.pageSize.getWidth();
		const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
		pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
		pdf.save('invoice.pdf');
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

	if (!formData || !invoiceData) {
		return <div className={styles.error}>No data available</div>;
	}

	return (
		<div className={styles.invoiceScreen}>
			<h2 className={styles.heading}>Invoice</h2>
			<div ref={pdfRef}>
				<pre>{invoiceText}</pre>
			</div>
			<button onClick={downloadPdf}>Download PDF</button>
			<button onClick={printPdf}>Print</button>
		</div>
	);
};

export default Invoice;
