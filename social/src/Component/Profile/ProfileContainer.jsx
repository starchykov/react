import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile, setStatus, setUserProfile, updateStatus} from "../redux/profileReducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount(): void {
        let id = this.props.match.params.userId;
        if (!id || undefined) id = 8758;
        this.props.setProfile(id);
        this.props.setStatus(id)
    }

    render() {
        return <Profile {...this.props} profileData={this.props.profilePage.profileData}/>
    }
}

let mapStateToProps = (state) => ({
    profilePage: state.profilePage,
    isAuthorized: state.authorization.isAuthorized,
    status: state.profilePage.status
});


export default compose(
    connect(mapStateToProps, {setUserProfile, setProfile, setStatus, updateStatus}), withRouter, withAuthRedirect)(ProfileContainer);
