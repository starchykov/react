import React from 'react'
import s from './Profile.module.css'
import * as axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux/es/alternate-renderers";
import {setUserProfile} from "../../redux/profileReducer";
import withRouter from "react-router-dom/es/withRouter";

class ProfileContainer extends React.Component {

    componentDidMount(): void {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    };

    render() {
        return (
            <div className={s.mainContent}>

                <Profile {...this.props} profile={this.props.profile}/>

            </div>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
};

//создаем функцию, которая получает инфо о УРЛ и передаем в контейнерную комп

let WithUrlDataContainerComponent = withRouter(ProfileContainer);


export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);