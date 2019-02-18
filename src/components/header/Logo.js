import React from 'react';

export default class Logo extends React.Component{
	render(){
		return (
			<div className="logo">
				<picture>
					<source media="(max-width: 768px)" srcSet="/img/react-512-2.png"/>
					<source media="(min-width: 769px)" srcSet="/img/react-512.png"/>
					<img src="/img/react-512.png" />
				</picture>
			</div>
		);
	}
}