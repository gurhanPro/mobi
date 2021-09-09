import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MobileStepper from '@material-ui/core/MobileStepper';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';


const useStyles = theme => ({
	root: {
		maxWidth: 400,
	},

		colorPrimary: {
			backgroundColor: "red",
		},
		progress: {
			backgroundColor: "green",
			"& *": {
				backgroundColor: "red",
			},
		},
		height: "40px",

		flexGrow: 1,
		// background: 'red',
		color: 'blue',	 
	"& .MuiMobileStepper-progress": {
		backgroundColor: "green",
		color: 'blue',	 
	},

	"& .MuiMobileStepper-root": {
		background: "green",
		color: 'blue',
}	 

	
});
class CreateGroupCo extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {

		const { classes } = this.props;

		return (
			<div className="create-group">
				<div container className="stepper">
						<MobileStepper
							variant="progress"
							steps={1}
							position="static"
							activeStep={this.state.activeStep}
							className={classes.root}
						/>
					</div>
			</div>
		);
	}
}

// export default CreateGroupCo;

export default connect(state => ({
  quoteData: state.britamQuote,
}))(withStyles(useStyles) (CreateGroupCo));