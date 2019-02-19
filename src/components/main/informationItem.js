import React from 'react';

export default class InformationItem  extends React.Component{
	render(
		return(
			<div className="vantagensItem">
				<div className="vantagensItemImg">
					<img src={"/img/" + this.props.image}/>
				</div>
				<div className="vantagensItemTxt">
					{this.props.text}
				</div>
			</div>
		);
	);
}