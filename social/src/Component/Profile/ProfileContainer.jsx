import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfileInfo, setUserProfile, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount(): void {
        let id = this.props.match.params.userId;
        if (!id || undefined) {
            id = this.props.currentId;
            if (!this.props.currentId) {
                this.props.history.push('/login')
            }
        }
        this.props.setProfileInfo(id);
    }

    render() {
        return <Profile {...this.props} profileData={this.props.profilePage.profileData}/>
    }
}

let mapStateToProps = (state) => ({
    profilePage: state.profilePage,
    isAuthorized: state.authorization.isAuthorized,
    currentId: state.authorization.authData.id,
    status: state.profilePage.status
});


export default compose(withAuthRedirect, withRouter,
    connect(mapStateToProps, {setUserProfile, setProfileInfo, updateStatus}))(ProfileContainer);
