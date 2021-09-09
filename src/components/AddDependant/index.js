import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import './style.css'
import { Grid, withWidth } from '@material-ui/core';
import { MEMBER_TYPES } from '../../lib/constants';
class AddDependant extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentMembertype: MEMBER_TYPES.SPOUSE
		}
	}

	addDependant() {
		return <>
			<Grid container spacing={2}  alignItems="center" style={{ width: '100%', padding: '0%', margin: 'auto' }}>
				<Grid item xs={6}>
					<TextField
						required
						id="outlined-required"
						label="First name"
						variant="outlined"
						size="medium"
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						required
						id="outlined-required"
						label="Middle name"
						variant="outlined"
						size="medium"
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						required
						id="outlined-required"
						label="Last name"
						variant="outlined"
						size="medium"
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						required
						id="outlined-required"
						label="Date of birth"
						variant="outlined"
						size="medium"
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						required
						id="outlined-required"
						label="Gender"
						variant="outlined"
						size="medium"
					/>
				</Grid>
				<Grid item xs={6}>
					<TextField
						required
						id="outlined-required"
						label="phone number"
						variant="outlined"
						size="medium"
					/>
				</Grid>



			</Grid>


		</>
	}

	handleChange(currentMembertype, event){
		console.log({event, currentMembertype});
		this.setState({ currentMembertype })

	}
	render() {
		const registrationStatus = "open";
		const groupName = "Nairobi SME";
		const member = "spouse"
		return (
			<div className="create-group">
				<div className="header">
					<p className="reg-status">Registraion is <span className="reg-status-value">{registrationStatus}</span></p>
					<h2>Add a <span style={{color: 'green'}}>{this.state.currentMembertype}</span> member details</h2>
				</div>


				<div className="member-types">
					<div>
								<FormControlLabel value="female" control={<Radio checked={this.state.currentMembertype == MEMBER_TYPES.SPOUSE} onChange={this.handleChange.bind(this, MEMBER_TYPES.SPOUSE)}	/>} label="Spouse" />
								<FormControlLabel value="male" control={<Radio  checked={this.state.currentMembertype == MEMBER_TYPES.CHILD} onChange={this.handleChange.bind(this, MEMBER_TYPES.CHILD)}/>} label="Child" />
								<FormControlLabel value="other" control={<Radio  checked={this.state.currentMembertype == MEMBER_TYPES.PARENT} onChange={this.handleChange.bind(this, MEMBER_TYPES.PARENT)}/>} label="Parent" />
					</div>
					<div>
								<FormControlLabel value="other" control={<Radio  checked={this.state.currentMembertype == MEMBER_TYPES.PARENT_IN_LAW} onChange={this.handleChange.bind(this, MEMBER_TYPES.PARENT_IN_LAW)}/>} label="Parent-in-law" />
								<FormControlLabel value="other" control={<Radio  checked={this.state.currentMembertype == MEMBER_TYPES.BENEFICIARY_ADULT} onChange={this.handleChange.bind(this, MEMBER_TYPES.BENEFICIARY_ADULT)}/>} label="Beneficiary adult" />
					</div>
				</div>

				
				{this.addDependant()}


				<div className="footer">
					<button className="next-button">Next</button>
				</div>
			</div>
		);
	}
}

export default AddDependant;
