import React, { Component } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './style.css'
import { Grid } from '@material-ui/core';
import { MEMBER_TYPES, GENDER_TYPES } from '../../lib/constants';
class FamilyTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentMembertype: MEMBER_TYPES.SPOUSE,
			expanded: ''
		}
	}


	handleChange(expandedIndex, event) {
		if (this.state.expanded === expandedIndex) {
			this.setState({ expanded: '' })
			return
		}

		this.setState({ expanded: expandedIndex })

	}

	submitFamily(){
		this.props.submitFamily();
	}

	addAnotherMember(){
		this.props.addAnotherMember();
	}

	ac(familyMember) {
		return <Grid container spacing={2} justifyContent="center" style={{ width: '100%', padding: '0%', margin: 'auto' }}>
			<Grid item xs={8} style={{ textAlign: 'justify' }}>
				{familyMember.first_name + " " +
					familyMember.middle_name + " " +
					familyMember.last_name}
			</Grid>
			<Grid item xs={4} style={{ textAlign: 'justify' }}>
				{familyMember.relationship}
			</Grid>
		</Grid>
	}

	acf(familyMember) {
		return <Grid container spacing={2} justifyContent="center" style={{ width: '100%', padding: '0%', margin: 'auto', marginTop: '-5%', }}>
			<Grid item xs={6} style={{ textAlign: 'left', fontSize: '85%',  marginBottom: '-2%'}}>
				{'Dob :' + familyMember.dob}
			</Grid>
			<Grid item xs={6} style={{ textAlign: 'left', fontSize: '85%',  marginBottom: '-2%'}}>
				{'Gender : ' + familyMember.gender}
			</Grid>
			<Grid item xs={6} style={{ textAlign: 'left', fontSize: '85%',  marginBottom: '-2%'}}>
				{'msisdn: '} {familyMember.msisdn}
			</Grid>
			<Grid item xs={6} style={{ textAlign: 'justify', fontSize: '85%',  marginBottom: '-2%'}}>
				{'Id: ' + familyMember.national_id}
			</Grid>
		</Grid>
	}

	ach() {
		return <Grid container spacing={2} justifyContent="center" style={{ width: '100%', padding: '0%', margin: 'auto' }}>
			<Grid item xs={8} style={{ textAlign: 'left', fontWeight: 'bolder' }}>
				{'Full name'}
			</Grid>
			<Grid item xs={4} style={{ textAlign: 'left', fontWeight: 'bolder' }}>
				{'Relationship'}
			</Grid>
		</Grid>
	}

	render() {
		const familyMembers = this.props.familyMembers || [];
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
					<div className="family-accordion"></div>

					<Accordion>
						<AccordionSummary
							aria-controls="panel1bh-content"
							id="panel1bh-header"
						>
							{this.ach()}
						</AccordionSummary>
					</Accordion>

					{familyMembers.map((familyMember, index) => (
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
					<br />
					<button className="next-buttons" onClick={this.submitFamily.bind(this)}>SUBMIT FAMILY</button>
					<button className="next-buttons another" type='submit' onClick={this.addAnotherMember.bind(this)}>Add another member</button>
				</div>
			</div>
		);
	}
}

export default FamilyTable;
