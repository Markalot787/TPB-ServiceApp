import React from 'react';
import { FormWrapper } from '../FormWrapper';

export const ClientForm = ({ clientData, updateFields }) => {
	return (
		<FormWrapper title="Client Details">
			<label>Dirección</label>
			<input
				required
				min={1}
				type="text"
				value={clientData.clientAddress}
				onChange={(e) =>
					updateFields({ ...clientData, clientAddress: e.target.value })
				}
			/>
			<label>Otro Contacto</label>
			<input
				required
				min={1}
				type="text"
				value={clientData.clientOtherContact}
				onChange={(e) =>
					updateFields({ ...clientData, clientOtherContact: e.target.value })
				}
			/>
			<label>Referal</label>
			<input
				required
				min={1}
				type="text"
				value={clientData.referal}
				onChange={(e) =>
					updateFields({ ...clientData, referal: e.target.value })
				}
			/>
		</FormWrapper>
	);
};
