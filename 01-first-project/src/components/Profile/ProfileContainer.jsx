import React from 'react'
import s from './Profile.module.css'
import Profile from "./Profile";
import {connect} from "react-redux/es/alternate-renderers";
import {getUserProfile} from "../../redux/profileReducer";
import withRouter from "react-router-dom/es/withRouter";
import {widthAuthRedirect} from "../../hoc/widthAuthtRedirect";

class ProfileContainer extends React.Component {

    componentDidMount(): void {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
    };

    render() {

        return (
            <div className={s.mainContent}>

                <Profile {...this.props} profile={this.props.profile}/>

            </div>
        )
    }
}

let AuthRedirectComponent = widthAuthRedirect(ProfileContainer);


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
};



//создаем функцию, которая получает инфо о УРЛ и передаем в контейнерную комп

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);


export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);