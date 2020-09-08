import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {follow, unfollow, setActionProgress, getUsers} from "../../redux/usersReducer";
import {UsersApi} from "../../redux/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {

    componentDidMount(): void {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {

        return <Users {...this.props}
                      onPageChange={this.onPageChange}
                      followApi={UsersApi.followApi}
                      unfollowApi={UsersApi.unfollowApi}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        actionProgress: state.usersPage.actionProgress
    }
};


export default compose(
    connect(mapStateToProps, {follow, unfollow, setActionProgress, getUsers}), withAuthRedirect)(UsersContainer);


