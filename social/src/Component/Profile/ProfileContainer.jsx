import React from 'react'
import * as axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount(): void {

        let id = this.props.match.params.userId;

        if (!id) {
            id = 8758;
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id)
            .then(response => {
                this.props.setUserProfile(response.data);
            });

    }

    render() {
        return (
            <Profile {...this.props} profileData={this.props.profileData}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profileData: state.profilePage.profileData
});

let withUrlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withUrlProfileContainer);