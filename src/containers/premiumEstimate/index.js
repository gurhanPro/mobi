import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import MobileStepper from '@material-ui/core/MobileStepper';
import { withStyles } from '@material-ui/core/styles';
import BritamQuote from '../../components/BritamQuote';
import { getGroupProductsRequest, saveQuoteInStateRequest } from './actions.es6';


import Grid from '@material-ui/core/Grid';

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

class PremiumEstimate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeStep: 0
		}
	}
	
	componentWillMount() {
    this.props.dispatch(getGroupProductsRequest());
  }
	
  letsGoWithQuote(quote) {
    this.props.dispatch(saveQuoteInStateRequest(quote))

    if (!this.props.loginData.AuthData) {
      this.setState({ openLoginDialog: true })
    } else {
      hashHistory.push('/admin/group-registeration');
    }
  }
	render() {
	
		const { classes } = this.props;

		return (
			<div className="premium-estimage">
				<Grid container className="header">
					<Grid item xs={6}><p>Agent: <strong>Chaddy</strong></p></Grid>
					<Grid item xs={6}><p>Agent Contact: <strong>0971234555</strong></p></Grid>
				</Grid>
				<Grid container className="stepper">
					<Grid item xs={12}>
						<MobileStepper
							variant="progress"
							steps={1}
							position="static"
							activeStep={this.state.activeStep}
							className={classes.root}
							// nextButton={
							// 	<Button size="small" onClick={handleNext} disabled={activeStep === 5}>
							// 		Next
							// 		{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
							// 	</Button>
							// }
							// backButton={
							// 	<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
							// 		{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
							// 		Back
							// 	</Button>
							// }
						/>
					</Grid>
					
					<Grid item x={12}>
						<BritamQuote letsGoWithQuote={this.letsGoWithQuote.bind(this)} products={this.props.quoteData.groupProducts} />
					</Grid>
				</Grid>


			</div>
		);
	}
}

export default connect(state => ({
  quoteData: state.britamQuote,
}))(withStyles(useStyles) (PremiumEstimate));