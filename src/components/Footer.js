import React from 'react';

export default class Footer extends React.Component{
	render(){
		return (
			<div className="footer">
				<div>
					<img src="/img/logo-og.png"/>
				</div>
				<div>
					Endereço<br/>
					Telefone<br/>
					Email
				</div>
			</div>
		);
	}
}