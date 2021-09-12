import React, { Component } from 'react';
import { MEMBER_TYPES } from '../../lib/constants';
import { FormControlLabel, Radio } from '@material-ui/core';

class MemberTypeSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleComponentTypeChange(componentType){
    this.props.handleComponentTypeChange(componentType)
  }

  render() {
    return (<>
      <div>
        <p>please select member type to add</p>
        <FormControlLabel value="SPOUSE" control={<Radio checked={this.props.currentComponentType === MEMBER_TYPES.SPOUSE} onChange={this.handleComponentTypeChange.bind(this, MEMBER_TYPES.SPOUSE)} />} label="Spouse" />
        <FormControlLabel value="CHILD" control={<Radio checked={this.props.currentComponentType === MEMBER_TYPES.CHILD} onChange={this.handleComponentTypeChange.bind(this, MEMBER_TYPES.CHILD)} />} label="Child" />
        <FormControlLabel value="PARENT" control={<Radio checked={this.props.currentComponentType === MEMBER_TYPES.PARENT} onChange={this.handleComponentTypeChange.bind(this, MEMBER_TYPES.PARENT)} />} label="Parent" />
      </div>
      <div>
        <FormControlLabel value="PARENT-IN-LAW" control={<Radio checked={this.props.currentComponentType === MEMBER_TYPES.PARENT_IN_LAW} onChange={this.handleComponentTypeChange.bind(this, MEMBER_TYPES.PARENT_IN_LAW)} />} label="Parent-in-law" />
        <FormControlLabel value="BENEFICIARY-ADULT" control={<Radio checked={this.props.currentComponentType === MEMBER_TYPES.BENEFICIARY_ADULT} onChange={this.handleComponentTypeChange.bind(this, MEMBER_TYPES.BENEFICIARY_ADULT)} />} label="Beneficiary adult" />
      </div>

      <hr />
    </>
    );
  }
}

export default MemberTypeSelector;
