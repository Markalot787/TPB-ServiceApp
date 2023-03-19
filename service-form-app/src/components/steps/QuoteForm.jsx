import React from 'react';
import { FormWrapper } from '../FormWrapper';

const QuoteForm = ({
	offer2hr,
	offer3hr,
	offer4hr,
	offer5hr,
	extraDigitalAlbum,
	extraMonitor,
	extraBoomerangs,
	extraUsb,
	extraScrapBook,
	extraPremiumTemplate,
	extraHashtag,
	extraGreenScreen,
	extraDebranding,
	extraPrivacy,
	extraSecondBooth,
	extraMetroArea,
	extraOutsideMetroArea,
	extraEastSouthArea,
	extraCenterWestArea,
	updateFields,
}) => {
	const handleCheckboxChange = (e) => {
		const { name, checked } = e.target;
		updateFields(name, checked);
	};

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
				type="checkbox"
				name="offer2hr"
				checked={offer2hr}
				onChange={handleCheckboxChange}
			/>
			<label>
				3 Horas $525.00
				<p>
					Fotos impresas rapido de 4x6 en alta calidad Copias Accesorios
					Asistente Modelos Basicos (cambiamos color y texto)
				</p>
			</label>
			<input
				type="checkbox"
				name="offer3hr"
				checked={offer3hr}
				onChange={handleCheckboxChange}
			/>
			<label>
				4 Horas $875.00
				<p>
					Fotos impresas rapido de 4x6 en alta calidad Copias Accesorios
					Asistente Modelos Basicos (cambiamos color y texto)
				</p>
			</label>
			<input
				type="checkbox"
				name="offer4hr"
				checked={offer4hr}
				onChange={handleCheckboxChange}
			/>
			<label>
				5 Horas $1075.00
				<p>
					Fotos impresas rapido de 4x6 en alta calidad Copias Accesorios
					sistente Modelos Basicos (cambiamos color y texto)
				</p>
			</label>
			<input
				type="checkbox"
				name="offer5hr"
				checked={offer5hr}
				onChange={handleCheckboxChange}
			/>

			<label>
				Gratis! Album digital (super recomendado)
				<p>
					El Album completo de su evento disponible al instante en nuestra
					pagina de facebook.com/TuPhotoBooth para que todos sus invitados
					puedan ver o imprimir las fotos de ellos y los demas gratis.
				</p>
			</label>
			<input
				type="checkbox"
				name="extraDigitalAlbum"
				checked={extraDigitalAlbum}
				onChange={handleCheckboxChange}
			/>
			<label>
				Pantalla TV con fotos o promo en vivo (super recomendado)
				<p>
					A los invitados le encantan la pantalla, la ven mintras estan en fila
					y tambien luego esperando ver su foto en pantalla grande. Altamente
					recomendado, los invitados se disfrutan verse en el monitor.
				</p>
			</label>
			<input
				type="checkbox"
				name="extraMonitor"
				checked={extraMonitor}
				onChange={handleCheckboxChange}
			/>
			<label>
				Boomerangs y Video en Vivo!!! (super recomendado)
				<p>
					Boomerang GIFS and Video postiados en Facebook. Altamente recomendado,
					los invitados se lo gozan.
				</p>
			</label>
			<input
				type="checkbox"
				name="extraBoomerangs"
				checked={extraBoomerangs}
				onChange={handleCheckboxChange}
			/>
			<label>
				Usb $10.00 (super recomendado)
				<p>USB con tu Álbum para copia de todas las fotos en HD</p>
			</label>
			<input
				type="checkbox"
				name="extraUsb"
				checked={extraUsb}
				onChange={handleCheckboxChange}
			/>
			<label>
				ScrapBook para recuerdo $75.00
				<p>=Album hecho de 12x12 10 paginas negras con Sharpie platiado.</p>
			</label>
			<input
				type="checkbox"
				name="extraScrapBook"
				checked={extraScrapBook}
				onChange={handleCheckboxChange}
			/>
			<label>
				Diseño de modelo Premium $29.00
				<p>
					Diseño Premium, sobre 10,000 para escoger, nosotros modificamos el
					color y texto. Busca uno https://www.photoboothtemplates.com/shop/
				</p>
			</label>
			<input
				type="checkbox"
				name="extraPremiumTemplate"
				checked={extraPremiumTemplate}
				onChange={handleCheckboxChange}
			/>
			<label>
				Hashtag Printing $75.00
				<p>
					Impresion de fotos de tu evento de redes sociales. Todas las fotos que
					tomen con el hashtag de tu evento salen impresa en el booth y tambien
					guardamos un set.
				</p>
			</label>
			<input
				type="checkbox"
				name="extraHashtag"
				checked={extraHashtag}
				onChange={handleCheckboxChange}
			/>
			<label>
				GreenScreen $75.00
				<p>Para Fondo digitales.</p>
			</label>
			<input
				type="checkbox"
				name="extraGreenScreen"
				checked={extraGreenScreen}
				onChange={handleCheckboxChange}
			/>
			<label>
				Debranding $25.00
				<p>Ningun logo o promo de TuPhotoBooth.</p>
			</label>
			<input
				type="checkbox"
				name="extraDebranding"
				checked={extraDebranding}
				onChange={handleCheckboxChange}
			/>
			<label>
				Privacidad $25.00
				<p>
					Nada de redes sociales. Recomiendo USB para obtener copias de fotos.
				</p>
			</label>
			<input
				type="checkbox"
				name="extraPrivacy"
				checked={extraPrivacy}
				onChange={handleCheckboxChange}
			/>
			<label>
				2nd booth $275.00
				<p>Añade otro photobooth y opten el double de impresiones!</p>
			</label>
			<input
				type="checkbox"
				name="extraSecondBooth"
				checked={extraSecondBooth}
				onChange={handleCheckboxChange}
			/>
			<label>
				Transportación Metro $0.00
				<p>
					Pueblos: San Juan, Carolina, Bayamon, Dorado, Toa baja, Guaynabo,
					Trujillo alto, Loiza, Catano
				</p>
			</label>
			<input
				type="checkbox"
				name="extraMetroArea"
				checked={extraMetroArea}
				onChange={handleCheckboxChange}
			/>
			<label>
				Transportación Fuera del área Metro $10.00
				<p>
					Pueblos: Caguas, Vega Baja, Vega Alta, Rio Grande, Loiza, Gurabo,
					Juncos, Aguas Buenas, Toa alta.
				</p>
			</label>
			<input
				type="checkbox"
				name="extraOutsideMetroArea"
				checked={extraOutsideMetroArea}
				onChange={handleCheckboxChange}
			/>
			<label>
				Transportación Este y Sur $15.00
				<p>
					Pueblos: Luguillo, Fajardo, San lorenzo, Cidra, Cayey, Guayama,
					Salinas, Santa Isabela, Coamo, Aibonito, Juana Diaz, Ponce, Naranjito,
					Comerio, Corozal, Morovis, Manati, Ciales, Florida, Barceloneta,
					Arecibo, Hatillo, Penuelas, Guayanilla, Yauco, Guanica
				</p>
			</label>
			<input
				type="checkbox"
				name="extraEastSouthArea"
				checked={extraEastSouthArea}
				onChange={handleCheckboxChange}
			/>
			<label>
				Transportación Centro y Oeste $25.00
				<p>
					Pueblos: Mayaguez, Cabo Rojo, Rincon, Aguadilla, Camuy, Isabela, Moca,
					San Sebastian, Lares, Utuado, Jayuya, Adjuntas, Sabana Grande, San
					German, Hormigueros, Anasco, Aguada, Yabocoa, Maunabo,
				</p>
			</label>
			<input
				type="checkbox"
				name="extraCenterWestArea"
				checked={extraCenterWestArea}
				onChange={handleCheckboxChange}
			/>
		</FormWrapper>
	);
};

export { QuoteForm };
