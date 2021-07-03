import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class CreateGroup extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div className="create-group">
				<div className="header">
					<h1>Britam Group Last Expense</h1>
					<h2>Create Group</h2>
				</div>

				<div className="bordered-box-form">
					<p>Please enter financial advicor phone number to create group</p>
					<TextField
						required
						id="outlined-required"
						label="phone number"
						variant="outlined"
						size="small"
					/>
					<div className="agent-name">
					<TextField
						className="first-name"
						required
						id="outlined-required"
						label="First Name"
						variant="outlined"
						size="small"
					/>
					<TextField
						className="surname"
						required
						id="outlined-required"
						label="Surname"
						variant="outlined"
						size="small"
					/>
					</div>
					<div className="error-message">
						<p>The phone number you entered is not registered on our system</p>
						<p>please enter your name to continue</p>
					</div>
					<div className="terms-and-conditons">
						<p className="terms-and-conditions">Terms and Conditions</p>
						<p>By proceeding you are confirm that you are authorized to make use of this service</p>
					</div>
				</div>

				<div className="footer">
					<div>
						<FormControlLabel
							control={<Checkbox checked={true} onChange={() => { }} name="checkedA" />}
							label="Agree to terms and conditions"
						/>
					</div>

					<button className="next-button">Next</button>
				</div>
			</div>
		);
	}
}

export default CreateGroup;
