import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './style.css'
import { Grid, withWidth } from '@material-ui/core';
class AddPrincipal extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	addPrincipal() {
		return <>
			<Grid container spacing={2} justifyContent="center" style={{ width: '100%', padding: '0%', margin: 'auto' }}>
				<Grid item xs={12} style={{textAlign: 'left'}}>
					<TextField
						required
						id="outlined-required"
						label="Enter National ID"
						variant="outlined"
						size="small"
						disabled
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						required
						id="outlined-required"
						label="First name"
						variant="outlined"
						size="small"
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						required
						id="outlined-required"
						label="Middle name"
						variant="outlined"
						size="small"
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						required
						id="outlined-required"
						label="Last name"
						variant="outlined"
						size="small"
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						required
						id="outlined-required"
						label="Date of birth"
						variant="outlined"
						size="small"
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						required
						id="outlined-required"
						label="Gender"
						variant="outlined"
						size="small"
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						required
						id="outlined-required"
						label="phone number"
						variant="outlined"
						size="small"
					/>
				</Grid>



			</Grid>


		</>
	}
	render() {
		const registrationStatus = "open";
		const groupName = "Nairobi SME";
		return (
			<div className="create-group">
				<div className="header">
					<p className="reg-status">Registraion is <span className="reg-status-value">{registrationStatus}</span></p>
					<h1>Britam Group Last Expense</h1>
					<h2>Individual member details</h2>
					<p>Group Name: {groupName}</p>
				</div>

				{this.addPrincipal()}

				<div className="bordered-box-form">
					<p>Please enter principal member national ID to start adding member details</p>
					<TextField
						required
						id="outlined-required"
						label="Enter National ID"
						variant="outlined"
						size="small"
					/>
					<div className="agent-name">
					</div>
					<div className="error-message" style={{ s: 'none' }}>
						<p>The national Id or passport number you entered has already been used. Any new information enteered will override existing data provided</p>
						<p>Enter a different national ID or passport number or select next to proceed</p>
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

export default AddPrincipal;
