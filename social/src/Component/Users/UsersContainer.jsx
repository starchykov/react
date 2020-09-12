import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {follow, unfollow, setActionProgress, getUsers} from "../../redux/usersReducer";
import {UsersApi} from "../../redux/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {actionProgress, currentPage, isFetching, pageSize, totalCount, users} from "../../redux/usersSelectors";

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
        users: users(state),
        pageSize: pageSize(state),
        totalCount: totalCount(state),
        currentPage: currentPage(state),
        isFetching: isFetching(state),
        actionProgress: actionProgress(state)
    }
};


export default compose(
    connect(mapStateToProps, {follow, unfollow, setActionProgress, getUsers}), withAuthRedirect)(UsersContainer);


