import React from 'react';

export default class Address extends React.Component{
	render(){
		return (
			<div className="address">
				<img src="/img/telefone.png"/><strong>(xx) xxxx-xxxx</strong> <br/>
				Endereço
			</div>
		);
	}
}