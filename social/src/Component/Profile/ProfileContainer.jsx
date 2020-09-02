import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile, setUserProfile} from "../redux/profileReducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount(): void {
        let id = this.props.match.params.userId;
        if (!id) id = 8758;
        this.props.setProfile(id);
    }

    render() {
        return <Profile {...this.props} profileData={this.props.profileData}/>
    }
}

let mapStateToProps = (state) => ({
    profileData: state.profilePage.profileData,
    isAuthorized: state.authorization.isAuthorized
});


export default compose(
    connect(mapStateToProps, {setUserProfile, setProfile}),
    withRouter,
    withAuthRedirect)(ProfileContainer);
