import React, { Component } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './style.css'
import { Grid, withWidth } from '@material-ui/core';
import { MEMBER_TYPES } from '../../lib/constants';
class FamilyTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentMembertype: MEMBER_TYPES.SPOUSE,
			expanded: ''
		}
	}


	handleChange(expandedIndex, event) {
		if(this.state.expanded === expandedIndex){
			this.setState({ expanded: '' })
			return
		}

		console.log({ event, expandedIndex });
		this.setState({ expanded: expandedIndex })

	}

	ac(familyMember){
		return <Grid container spacing={2} justifyContent="center" style={{ width: '100%', padding: '0%', margin: 'auto' }}>
		<Grid item xs={8} style={{textAlign: 'justify'}}>
			{familyMember.first_name + " " + 
								familyMember.middle_name + " " + 
								familyMember.last_name }
		</Grid>
		<Grid item xs={4} style={{textAlign: 'justify'}}>
			{familyMember.relationShip }
		</Grid>
		</Grid>
	}

	acf(familyMember){
		return <Grid container spacing={2} justifyContent="center" style={{ width: '100%', padding: '0%', margin: 'auto' }}>
		<Grid item xs={6} style={{textAlign: 'left'}}>
			{'Dob :' + familyMember.dob }
		</Grid>
		<Grid item xs={6} style={{textAlign: 'left'}}>
		{'Gender : '+ familyMember.gender }
		</Grid>
		<Grid item xs={6} style={{textAlign: 'left'}}>
			{'Phone Number : '} <br/> { familyMember.phone_number }
		</Grid>
		<Grid item xs={6} style={{textAlign: 'justify'}}>
		{'Id: '+familyMember.national_id}
		</Grid>
		</Grid>
	}

	ach(){
		return <Grid container spacing={2} justifyContent="center" style={{ width: '100%', padding: '0%', margin: 'auto' }}>
		<Grid item xs={8} style={{textAlign: 'left', fontWeight: 'bolder'}}>
			{'full name'}
		</Grid>
		<Grid item xs={4} style={{textAlign: 'left', fontWeight: 'bolder'}}>
			{'relationship'}
		</Grid>
		</Grid>
	}

	render() {
		const registrationStatus = "open";
		const groupName = "Nairobi SME";
		const member = "spouse"

		const familyList = [
			{
				first_name: 'ziyaad',
				middle_name: 'ahmed',
				last_name: 'gurhan',
				dob: '1991-01-01',
				gender: 'Male',
				phone_number: '034324324324',
				national_id: '123455342345',
				relationShip: 'Principal'
			},
			{
				first_name: 'ziyaad',
				middle_name: 'ahmed',
				last_name: 'gurhan',
				dob: '1991-01-01',
				gender: 'Male',
				phone_number: '034324324324',
				national_id: '123455342345',
				relationShip: 'spouse'
			},
			{
				first_name: 'ziyaad',
				middle_name: 'ahmed',
				last_name: 'gurhan',
				dob: '1991-01-01',
				gender: 'Male',
				phone_number: '034324324324',
				national_id: '123455342345',
				relationShip: 'child'
			},
			{
				first_name: 'ziyaad',
				middle_name: 'ahmed',
				last_name: 'gurhan',
				dob: '1991-01-01',
				gender: 'Male',
				phone_number: '034324324324',
				national_id: '123455342345',
				relationShip: 'parent'
			}
		]
		return (
			<div className="create-group">
				<div className="header">
					<div className="header">
						<p className="reg-status">Registraion is <span className="reg-status-value">{registrationStatus}</span></p>
						<p>Group Name: {groupName}</p>
						<h2>Added family members</h2>
					</div>

					<div className="family-accordion"></div>

					<Accordion>
						<AccordionSummary
							aria-controls="panel1bh-content"
							id="panel1bh-header"
						>
							{this.ach()}
						</AccordionSummary>
					</Accordion>

					{familyList.map((familyMember, index) => (
						<Accordion expanded={this.state.expanded === index} onChange={this.handleChange.bind(this, index)}>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1bh-content"
							id="panel1bh-header"
						>
							{this.ac(familyMember)}
						</AccordionSummary>
						<AccordionDetails>
						{this.acf(familyMember)}
						</AccordionDetails>
					</Accordion>
					))}
					
					
				</div>


				<div className="footer">
					<button className="next-button">Next</button>
				</div>
			</div>
		);
	}
}

export default FamilyTable;
