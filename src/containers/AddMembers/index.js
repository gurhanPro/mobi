import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions.es6'
import { MEMBER_TYPES } from '../../lib/constants';
import AddSpouse from '../../components/AddSpouse';
import AddChild from '../../components/AddChild';
import AddParentInLaw from '../../components/AddParentInLaw';
import AddBeneficiaryAdult from '../../components/AddBeneficiaryAdult';
import AddPrincipal from '../../components/AddPrincipal';
import Header from '../../components/Header';
import './style.css'
import { CircularProgress } from '@material-ui/core';
import MemberTypeSelector from '../../components/MemberTypeSelector';
import AddParent from '../../components/AddParent';
import Stepper from '../../components/Stepper';
import FamilyTable from '../../components/FamilyTable';
import Congrats from '../../components/Congrats';

class AddMembers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 1,
			currentComponentType: MEMBER_TYPES.PRINCIPAL,
		}
	}

	componentWillMount() {
		const groupLink = this.props.params ? this.props.params.groupLink : ''
		this.props.dispatch(actions.getTokenRequest());
		// setTimeout(function () {}, 5000);
		this.props.dispatch(actions.getGroupByGroupLinkRequest(groupLink));
		this.props.dispatch(actions.getGroupMembersByGroupIdRequest(69))
	}

	handleComponentTypeChange(currentComponentType, event) {
		this.setState({ currentComponentType })
	}

	viewMembers() {
		this.setState({ currentComponentType: 'VIEW_MEMBERS' })
	}

	submitFamily() {
		const members = this.props.addMembersState.addedFamily
		const family = {
			group_id: 69,
			family_id: 69,
			registration_channel: 'MOBI_SITE',
			family: members,
		}
		this.props.dispatch(actions.addFamilyToGroupRequest(family));
		this.props.dispatch(actions.resetSavedFamily());
		this.setState({ currentComponentType: 'CONGRATS' });
	}

	addAnotherMember() {
		this.setState({ currentComponentType: MEMBER_TYPES.SPOUSE })
	}

	addAnotherFamily() {
		this.props.dispatch(actions.resetSavedFamily());
		this.setState({ currentComponentType: MEMBER_TYPES.PRINCIPAL, step: 0 })
	}
	getPrincipalFromSavedFamily() {
		const familyMember = this.props.addMembersState.addedFamily
		const principal = familyMember.filter(member => {
			return member.relationship === MEMBER_TYPES.PRINCIPAL
		})
		return principal
	}



	renderComponent() {
		let addMemberComponent;
		const principal = this.getPrincipalFromSavedFamily();
		const group = this.props.addMembersState.group;

		switch (this.state.currentComponentType) {

			case MEMBER_TYPES.PRINCIPAL:
				addMemberComponent = <AddPrincipal 
				groupMembers={this.props.addMembersState.groupMembers} 
				group={group}
				saveMember={this.savePrincipalMember.bind(this)} />
				break;

			case MEMBER_TYPES.SPOUSE:
				addMemberComponent = <AddSpouse
					saveMember={this.saveSpouseMember.bind(this)}
					principal={principal}
					group={group}
				/>
				break;

			case MEMBER_TYPES.CHILD:
				addMemberComponent = <AddChild saveMember={this.saveChildMember.bind(this)}
				principal={principal}
					group={group} />
				break;
			case MEMBER_TYPES.PARENT:
				addMemberComponent = <AddParent saveMember={this.saveParentMember.bind(this)}
				principal={principal}
					group={group} />
				break;
			case MEMBER_TYPES.PARENT_IN_LAW:
				addMemberComponent = <AddParentInLaw saveMember={this.saveParentInlawMember.bind(this)}
				principal={principal}
					group={group} />
				break;
			case MEMBER_TYPES.BENEFICIARY_ADULT:
				addMemberComponent = <AddBeneficiaryAdult saveMember={this.saveBeneficiaryAdultMember.bind(this)} viewMembers={this.viewMembers.bind(this)}
				principal={principal}
					group={group} />
				break;

			case 'VIEW_MEMBERS':
				addMemberComponent = <FamilyTable
					submitFamily={this.submitFamily.bind(this)}
					addAnotherMember={this.addAnotherMember.bind(this)}
					familyMembers={this.props.addMembersState.addedFamily}
				/>
				break;

			case 'CONGRATS':
				addMemberComponent = <Congrats
					addAnotherFamily={this.addAnotherFamily.bind(this)}
					groupName={this.props.addMembersState.group}
					principalName={'principal name'}
					principal={principal}
					group={group}
				/>
				break;
			default:
				addMemberComponent = <AddSpouse saveMember={this.saveSpouseMember.bind(this)} />
				break;
		}

		return addMemberComponent;
	}

	savePrincipalMember(member) {
		console.log('start saved principal');
		this.props.dispatch(actions.saveMemberRequest(member))
		this.setState({ currentComponentType: MEMBER_TYPES.SPOUSE, step: 1 })
		console.log('saved principal');
	}

	saveSpouseMember(member, addAnother) {
		this.props.dispatch(actions.saveMemberRequest(member))
		if (addAnother) {
			return
		}
		this.setState({ currentComponentType: MEMBER_TYPES.CHILD, step: 2 })
	}

	saveChildMember(member, addAnother) {
		this.props.dispatch(actions.saveMemberRequest(member))
		if (addAnother) {
			return
		}
		this.setState({ currentComponentType: MEMBER_TYPES.PARENT, step: 3 })
	}
	saveParentMember(member, addAnother) {
		this.props.dispatch(actions.saveMemberRequest(member))
		if (addAnother) {
			return
		}
		this.setState({ currentComponentType: MEMBER_TYPES.PARENT_IN_LAW, step: 4 })
	}
	saveParentInlawMember(member, addAnother) {
		this.props.dispatch(actions.saveMemberRequest(member))
		if (addAnother) {
			return
		}
		this.setState({ currentComponentType: MEMBER_TYPES.BENEFICIARY_ADULT, step: 5 })
	}
	saveBeneficiaryAdultMember(member, addAnother) {
		this.props.dispatch(actions.saveMemberRequest(member))
		if (addAnother) {
			return
		}
		this.setState({ step: 6 })
	}

	canDisplayMemberSelector() {
		return this.state.currentComponentType !== MEMBER_TYPES.PRINCIPAL &&
			this.state.currentComponentType !== 'VIEW_MEMBERS' &&
			this.state.currentComponentType !== 'CONGRATS'
	}


	render() {
		const group = this.props.addMembersState.group
		const groupMembers = this.props.addMembersState.groupMembers
		const registrationStatus = "open";

		if (group && groupMembers) {
			return (
				<>
					<Header registrationStatus={registrationStatus} groupName={group.name} />
					<Stepper
						activeStep={this.state.step}
					/>
					{(this.canDisplayMemberSelector()) ?
						<MemberTypeSelector
							currentComponentType={this.state.currentComponentType}
							handleComponentTypeChange={this.handleComponentTypeChange.bind(this)}
						/>
						: ''}
					<div className="add-members-container">
						{this.renderComponent()}
					</div>
				</>
			);
		} else {
			return (
				<di>
					{
						this.props.addMembersState.loading ?
							<>
								<p>loading group</p>
								<CircularProgress /></>
							: ''

					}
					{
						this.props.addMembersState.groupError ?
							<>
								<p className="error-message"> We could not find a group with group link {this.props.params.groupLink}</p>
								<p > Please contact Britam for more information</p>
							</>
							: ''
					}


				</di>
			)
		}
	}
}

export default connect(state => ({
	addMembersState: state.addMembers,
}))(AddMembers);