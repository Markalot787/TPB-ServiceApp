import React from 'react';
import { FormWrapper } from '../FormWrapper';

const QuoteForm = ({ quoteData, updateFields }) => {
	return (
		<FormWrapper title="Quote Details">
			<label>
				2 Horas $475.00
				<p>
					Fotos impresas rapido de 4x6 en alta calidad Copias Accesorios
					Asistente Modelos Basicos (cambiamos color y texto)
				</p>
			</label>
			<input
				label="2 Horas $475.00"
				type="checkbox"
				name="offer"
				value="2 Horas $475.00"
				// checked={quoteData.offer === '2 Horas $475.00'}
				onChange={(e) => {
					console.log('Radio value:', e.target.value);
					updateFields({ offer: e.target.value });
				}}
			/>

			<label>
				3 Horas $525.00
				<p>
					Fotos impresas rapido de 4x6 en alta calidad Copias Accesorios
					Asistente Modelos Basicos (cambiamos color y texto)
				</p>
			</label>
			<input
				label="3 Horas $525.00"
				type="checkbox"
				name="offer"
				value="3 Horas $525.00"
				// checked={quoteData.offer === '3 Horas $525.00'}
				onChange={(e) => {
					console.log('Radio value:', e.target.value);
					updateFields({ offer: e.target.value });
				}}
			/>
		</FormWrapper>
	);
};

export default QuoteForm;
