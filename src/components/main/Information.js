import React from 'react';
import InformationItem from './InformationItem';

export default class Information extends React.Component{
	render(){
		return (
			<div className="information" id="information">
				<ul>
					<li>>Info 1</li>
					<li>>Info 2</li>
					<li>>Info 3</li>
					<li>>Info 4</li>
				</ul>
			</div>
			<div className="informationText" id="information">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			</div>
			<div className="vantagens">
				<InformationItem image="1.png" text="Texto 1" title="titulo1"/>
				<InformationItem image="2.png" text="Texto 2" title="titulo2"/>
				<InformationItem image="3.png" text="Texto 3" title="titulo3"/>
			</div>
		);
	}
}