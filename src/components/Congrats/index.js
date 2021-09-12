import React, { Component } from 'react';
import Confetti from "react-confetti";


import './style.css'
class Congrats extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}



	submitFamily() {
		this.props.submitFamily();
	}

	addAnotherFamily() {
		this.props.addAnotherFamily();
	}


	render() {
		return (
			<div className="create-group" >
				<div className="header">
					<h1>Family added successfuly</h1>
					<p><span style={{fontWeight: 'bolder'}}>Congratulatoins</span>, you have successfuly added a family </p>
					{/* <p>Principal{this.props.principalName || ''}</p> */}
					<p>to make changes to the family details</p>
					<p>Please contact your Birtam Financial Advisor</p>
				</div>

				<div className="footer" >
					<br />
					<button className="next-buttons another" type='submit' onClick={this.addAnotherFamily.bind(this)}>Add another family</button>
				</div>
				<div style={{background: 'url(https://i.pinimg.com/736x/64/3e/5e/643e5e1bc0cc57a0e70bb23c77e1c77f.jpg) no-repeat center', 
				height: '400px', width: '100%', backgroundRepeat: 'no-repeat'}}></div>
				<Confetti 
					numberOfPieces={100}
				/>
			</div>
		);
	}
}

export default Congrats;
