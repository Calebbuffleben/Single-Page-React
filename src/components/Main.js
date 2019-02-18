import React from 'react';
import Contact from './main/Contact';
import Information from './main/Information';
import Maps from './main/Maps';
import Slide from './main/Slide';

export default class Main extends React.Component{
	render(){
		return (
			<div className="main">
				<Contact/>
				<Information/>
				<Maps/>
				<Slide/>
			</div>
		);
	}
}