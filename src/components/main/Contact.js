import React from 'react';

export default class Contact extends React.Component{
	render(){
		return (
			<div className="formulario" id="contact">
				<h1>Fale conosco</h1>
				<form name="form1" id="form1" method="post" action="/controllers/controllerForm.php">
					<input type="text" name="nome" id="nome" placeholder="Nome:"/>
					<input type="tel" name="telefone" id="telefone" placeholder="Telefone:"/>
					<input type="email" name="email" id="email" placeholder="Email:"/>
					<textarea name="mensagem" id="mensagem" placeholder="Mensagem"></textarea>
					<input type="submit" value="enviar"/>
				</form>
			</div>
		);
	}
}