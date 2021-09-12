import React, { Component } from 'react';
import './style.css'


class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (<>
			<div className="header">
				<p className="reg-status">Registraion is <span className="reg-status-value">{this.props.registrationStatus}</span></p>
				<p>Group Name: {this.props.groupName}</p>
			</div>
		</>
		);
	}
}

export default Header;