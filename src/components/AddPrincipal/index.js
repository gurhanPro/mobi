import React, { Component } from 'react';
import { SelectValidator, TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './style.css'
import { MenuItem } from '@material-ui/core';
import { GENDER_TYPES, MEMBER_TYPES } from '../../lib/constants';
import * as moment from "moment";

import * as utils from '../../lib/utils.es6';

class AddPrincipal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      terms: false,
      showTermsError: false,
      principalNationalId: '',
      principalAlreadyExistsError: false,
      firstName: '',
      middleName: '',
      lastName: '',
      town: '',
      dob: '',
      gender: '',
      phoneNumber: '',

      enteredID: false,
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
    this.setState({ dob: rawDate });
  }

  handleNext2() {
    console.log('start of handle next');
    const {
      principalNationalId,
      firstName,
      middleName,
      lastName,
      dob,
      gender,
      phoneNumber,
      town
    } = this.state
console.log('after state');
    const member = {
      registration_channel: 'MOBI_SITE',
      group_id: this.props.group.id,
      family_id: this.props.group.id,

      first_name: firstName,
      middle_name: middleName,
      last_name: lastName,
      dob: dob,
      gender: gender,
      town: town,
      national_id: principalNationalId,
      msisdn: phoneNumber,
      relationship: MEMBER_TYPES.PRINCIPAL,
    }
    console.log('after member');
    this.props.saveMember(member)
    console.log('end prins save');
  }


  handleNext() {
    if (!this.state.terms) {
      this.setState({ showTermsError: true })
      return
    }

    const principal = this.props.groupMembers[0]

    console.log(principal)
    if (this.state.principalNationalId === principal.nationalId && !this.state.principalAlreadyExistsError) {
      this.setState({ principalAlreadyExistsError: true })
      return;
    }
    this.setState({ enteredID: true })
  }

  render() {

    if (this.state.enteredID) {
      return <>
        <ValidatorForm onSubmit={this.handleNext2.bind(this)} key={1} style={{ padding: '5%' }}>
          <p>Add Principal details</p>

          <TextValidator
            id="outlined-required"
            label="National ID entered"
            variant="outlined"
            size="small"
            style={{ marginTop: "2%", }}
            value={this.state.principalNationalId}
            disabled
          />

          <TextValidator
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
            id="outlined-required"
            label="phone number"
            variant="outlined"
            size="small"
            style={{ marginTop: "2%", }}
            name="phoneNumber"
            type="number"
            value={this.state.phoneNumber}
            onChange={this.handleChange.bind(this)}
            validators={['required']}
            errorMessages="please enter phone number"
          />

          <SelectValidator
            label="Gender"
            id="Gender"
            name="gender"
            value={this.state.gender}
            onChange={this.handleChange.bind(this)}
            variant="outlined"
            style={{ marginTop: "20px", width: '97%' }}
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

          <button className="next-button" type='submit'>Next</button>

        </ValidatorForm>
      </>
    } else {
      return (
        <>
          <p>Please enter principal member national ID to start adding member details</p>
          <ValidatorForm onSubmit={this.handleNext.bind(this)} key={1}>
            <TextValidator
              id="outlined-required"
              label="Enter National ID"
              variant="outlined"
              size="small"
              name="principalNationalId"
              value={this.state.principalNationalId}
              onChange={this.handleChange.bind(this)}
              validators={['required']}
              errorMessages="please enter nationalId or passport"
            />

            <div className="agent-name">
            </div>
            <div className="error-message" style={{ display: this.state.principalAlreadyExistsError ? 'block' : 'none' }}>
              <p>The national Id or passport number you entered has already been used. Any new information enteered will override existing data provided</p>
              <p>Enter a different national ID or passport number or select next to proceed</p>
            </div>
            <div className="terms-and-conditons">
              <p className="terms-and-conditions">Terms and Conditions</p>
              <p>By proceeding you are confirm that you are authorized to make use of this service</p>
            </div>

            <div className="footer">
              <div>
                <FormControlLabel
                  control={<Checkbox checked={this.state.terms} onChange={() => { this.setState({ terms: !this.state.terms }) }} name="checkedA" />}
                  label="Agree to terms and conditions"
                />
                {this.state.showTermsError ? <p className="error-message">please accepts terms to proceed</p> : ''}
              </div>

              <button className="next-button" type='submit'>Next</button>
            </div>

          </ValidatorForm>
        </>
      );
    }

  }
}

export default AddPrincipal;
