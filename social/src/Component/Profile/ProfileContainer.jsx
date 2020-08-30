import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {ProfileApi} from "../redux/api";

class ProfileContainer extends React.Component {

    componentDidMount(): void {
        let id = this.props.match.params.userId;
        if (!id) id = 8758;

        ProfileApi.getProfile(id).then(response => this.props.setUserProfile(response));
    }

    render() {
        return <Profile {...this.props} profileData={this.props.profileData}/>
    }
}


let mapStateToProps = (state) => ({
    profileData: state.profilePage.profileData
});

let withUrlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withUrlProfileContainer);