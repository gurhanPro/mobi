import React, { Component } from 'react';
import { MobileStepper } from '@material-ui/core';



class Stepper extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {

		const { classes } = this.props;

		return (<>
			<MobileStepper
				variant="progress"
				steps={6}
				position="static"
				activeStep={this.props.activeStep}
				style={{width:'200%'}}
			/>
		</>
		);
	}
}

export default Stepper;