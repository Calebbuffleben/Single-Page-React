import React from 'react';

export default class Maps extends React.Component{
	render(){
		return (
			<div className="mapsImovel" id="mapa">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.6261397735657!2d-53.93581048494358!3d-27.449759782899225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94fbe78cec77bdb5%3A0xb4ecee469fdcef73!2sR.+Vital+Brasil%2C+560+-+Centro%2C+Tr%C3%AAs+Passos+-+RS%2C+98600-000!5e0!3m2!1spt-BR!2sbr!4v1550510652048" allowfullscreen></iframe>
			</div>
		);
	}
}