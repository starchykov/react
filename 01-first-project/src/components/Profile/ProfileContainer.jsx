import React from 'react'
import s from './Profile.module.css'
import Profile from "./Profile";
import {connect} from "react-redux/es/alternate-renderers";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profileReducer";
import withRouter from "react-router-dom/es/withRouter";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount(): void {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 8758;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId)
    };

    render() {

        return (
            <div className={s.mainContent}>

                <Profile {...this.props} profile={this.props.profile}
                                         status={this.props.status}
                                         updateStatus={this.props.updateStatus}/>

            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
};


export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
)(ProfileContainer);


//создаем функцию, которая получает инфо о УРЛ и передаем в контейнерную комп
