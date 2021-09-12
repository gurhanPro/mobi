import React, { Component } from 'react';
import { SelectValidator, TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import './style.css'
import { MenuItem } from '@material-ui/core';
import { GENDER_TYPES, MEMBER_TYPES } from '../../lib/constants';
import * as moment from "moment";

import * as utils from '../../lib/utils.es6';

class AddSpouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nationalId: '',
      firstName: '',
      middleName: '',
      lastName: '',
      town: '',
      dob: '',
      gender: '',
      phoneNumber: '',
      addAnother: false,
    }
  }

  componentDidMount(){
    ValidatorForm.addValidationRule('isValidDob', (dob) => {
      return this.validateDob(dob);
    });
  }

  componentWillUnmount(){
    ValidatorForm.removeValidationRule('isValidDob');
  }



  validateDob(rawDate) {
    if (!rawDate) {
      return false;
    }

    let dobInYears = moment(moment.now()).diff(moment(rawDate, "YYYY-MM-DD"),"years");
    // let dobInDays = moment(moment.now()).diff(moment(rawDate, "YYYY-MM-DD"),"days");

    return dobInYears >=18 && dobInYears <= 65
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleDobChange(event) {
    const rawDate = utils.formatDate(new Date(event.target.value));

    let dobInYears = moment(moment.now()).diff(moment(rawDate, "YYYY-MM-DD"),"years");
    let dobInDays = moment(moment.now()).diff(moment(rawDate, "YYYY-MM-DD"),"days");
    console.log({dobInYears, dobInDays});

    this.setState({ dob: rawDate });
  }

  handleNext2() {
    console.log('runninghandle: ', this.state.addAnother);
    const {
      nationalId,
      firstName,
      middleName,
      lastName,
      dob,
      gender,
      phoneNumber,
      town,
    } = this.state

    const member = {
      registration_channel: 'MOBI_SITE',
      group_id: this.props.group.id,
      family_id: this.props.group.id,
      principal_national_id: this.props.principalNationalId,

      first_name: firstName,
      middle_name: middleName,
      last_name: lastName,
      dob: dob,
      gender: gender,
      town: town,
      national_id: nationalId,
      msisdn: phoneNumber,
      relationship: MEMBER_TYPES.SPOUSE,
    }

    this.props.saveMember(member, this.state.addAnother)
    this.setState({
      nationalId: '',
      firstName: '',
      middleName: '',
      lastName: '',
      dob: '',
      gender: '',
      phoneNumber: '',
      addAnother: false,
    })
  }

  render() {
    console.log({group: this.props.group, principal: this.props.principal});
    return (<>
      <ValidatorForm onSubmit={this.handleNext2.bind(this)} key={1} style={{ padding: '5%' }}>
        <p>Add spouse details</p>

        <TextValidator
          fullWidth
          id="outlined-required"
          label="Enter National ID"
          variant="outlined"
          size="small"
          style={{ marginTop: "2%", }}
          onChange={this.handleChange.bind(this)}
          value={this.state.nationalId}
          name="nationalId"
          validators={['required']}
          errorMessages="please enter national ID"
        />

        <TextValidator
          fullWidth
          id="outlined-required"
          label="First name"
          variant="outlined"
          size="small"
          style={{ marginTop: "2%", }}
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange.bind(this)}
          validators={['required']}
          errorMessages="please enter first name"
        />

        <TextValidator
          fullWidth
          id="outlined-required"
          label="Middle name"
          variant="outlined"
          size="small"
          style={{ marginTop: "2%", }}
          name="middleName"
          value={this.state.middleName}
          onChange={this.handleChange.bind(this)}
        />

        <TextValidator
          fullWidth
          id="outlined-required"
          label="Last name"
          variant="outlined"
          size="small"
          style={{ marginTop: "2%", }}
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange.bind(this)}
          validators={['required']}
          errorMessages="please enter lastname"
        />

        <TextValidator
          fullWidth
          id="outlined-required"
          label="phone number"
          variant="outlined"
          size="small"
          style={{ marginTop: "2%", }}
          name="phoneNumber"
          type="number"
          value={this.state.phoneNumber}
          onChange={this.handleChange.bind(this)}
        />

        <SelectValidator
          label="Gender"
          id="Gender"
          name="gender"
          value={this.state.gender}
          onChange={this.handleChange.bind(this)}
          variant="outlined"
          style={{ marginTop: "20px", width: '100%' }}
        >
          <MenuItem value="">{'please select gender'}</MenuItem>
          <MenuItem value={GENDER_TYPES.Male}>Male</MenuItem>
          <MenuItem value={GENDER_TYPES.Female}>Female</MenuItem>
          <MenuItem value={GENDER_TYPES.Other}>Other</MenuItem>
        </SelectValidator>


        <TextValidator label={"Date of birth"}
          placeholder={"Date of birth"}
          variant="outlined"
          type="date"
          value={this.state.dob}
          onChange={this.handleDobChange.bind(this)}
          name="EffectedDate"
          aria-describedby="emailHelp"
          validators={['required', 'isValidDob']}
          errorMessages='please enter a valid dob, must be 18 to 65 years'
          InputLabelProps={{ shrink: true }}
          // inputProps={{ min: "2019-01-24", max: "2020-05-31" }}
          style={{ marginTop: "8%", marginBottom: "2%", width: '100%' }}
        />
        <button className="next-buttons" type='submit'>Next</button>
        <button className="next-buttons another" type='submit' onClick={() => { this.setState({ addAnother: true }); }}>Add another spouse</button>
      </ValidatorForm>
    </>
    );
  }
}

export default AddSpouse;
