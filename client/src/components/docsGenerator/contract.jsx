//create a function to show an contract that can be shown when you press a button
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
		
		Descripción del Diseño: escoge una Diseños gratis click aquí

El numero del diseño que ilegio? ${clientEmail}

Tus colores ${clientEmail}

Nombres o texto para el Arte de la Actividad: (Enviar logos al email) ${clientEmail}


¿Cómo escuchó de nosotros?${clientEmail}


El cliente ${Fullname}  garantiza:

(1)
Acceso Fácil (sin escaleras estrechas o mecánicas), (2) Una toma de corriente eléctrica a 10 pies de la localización deseada; (3) El cliente será responsable de cualquier daño malicioso hecho al Photo Booth y/o accesorios por parte de sus invitados. (4) Una superficie plana para el Photo Booth. Si el evento es al aire libre, una carpa debe proveerse para protegerlo en caso de lluvia y/o Sol
(esto es para poder garantizar la calidad de las fotos y buen mantenimiento del equipo).

Obligaciones de TuPhotoBooth.com:

1. Proporcionar una cabina de fotos que no requiera dinero para operar, proporcionar suficiente papel y suministros para el evento durante el tiempo de alquiler.
2. Proporcionar un técnico cualificado para mantener la unidad en perfectas condiciones de funcionamiento.
3. Instalar y retirar la cabina de fotos de una manera oportuna.

Otros:

1. El Cliente y "TuPhotoBooth.com" están de acuerdo que en caso de una falla mecánica o por cualquier otra razón ajena a nuestro control donde no podamos realizar las operaciones para las que nuestro Photo Booth esta diseñado, nuestra responsabilidad máxima será la devolución de cualquier pago recibido. Si los servicios ofrecidos son cumplidos de forma parcial los cargos se prorratearan entre el tiempo contratado y el tiempo de uso real, Ejemplo: si el evento es de cuatro horas y el Photo Booth no funciona por dos, la mitad del costo original se reembolsará al cliente. Aunque nos esforzamos al máximo en cuanto a uso de equipo, materiales y servicio; ninguna foto en particular es garantizada ya que dependemos de la tecnología actual, la cual dista mucho de ser perfecta. 2. Un depósito de $100 es requerido para retener la fecha y el saldo restante se debe cancelar el día del evento tan pronto se monte el equipo. Los depósitos no son reembolsables. TuPhotoBooth tiene el derecho de cancelar el evento si es que no puede cumplir, reembolsando todo el dinero. 3. El uso adecuado de nuestros Photo Booths con lleva mínimas posibilidades de accidente. Situaciones como niños desatendidos por sus padres o personas en estado de ebriedad podrían poner en riesgo la seguridad de este. Tales ocurrencias o uso indebido de TuPhotoBooth.com están exonerados de responsabilidad en caso de accidente ocurrido dentro del mismo.
4. TuPhotoBooth.com se reserva el derecho de uso de las fotos tomadas en el Photo Booth. Las mismas podrían utilizarse solo para fines publicitarios del mismo; como facebook, Google, Expos, anuncios en Web, medios impresos, etc.
5. TuPhotoBooth.com y el cliente quedaran de acuerdo en las horas de operación del Photo Booth previo al evento.
6. Si después de establecido el acuerdo el cliente necesita hacer algún cambio de hora o fecha, el mismo estará limitado a disponibilidad de fechas y/u horarios. 7. TuPhotoBooth.com será responsable de cumplir sólo con el horario establecido en el acuerdo escrito. Del cliente desear cambiar el horario ya cuando el personal esta presente en la actividad acordada, los servicios del mismo tendrá un cargo de $20.00 la hora o fracción de hora.


Al firmar este contrato, el cliente y Mark Valines representante legal de TuPhotoBooth.com aceptan todos los términos y condiciones.

		`; // Add the rest of the contract template text
	};

	const [contractText, setContractText] = useState(() => {
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
		<div className={styles.contract}>
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
