import React from 'react'
import {connect} from "react-redux/es/alternate-renderers";
import {
    follow,
    setCurrentPage,
    setFetchingStatus,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import Loader from "../Common/Loader/Loader";


class UsersAPIComponent extends React.Component {

    componentDidMount(): void {
        this.props.setFetchingStatus(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFetchingStatus(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    };

    onPageChanged = (currentPageNum) => {
        this.props.setCurrentPage(currentPageNum);
        this.props.setFetchingStatus(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPageNum}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFetchingStatus(false);
                this.props.setUsers(response.data.items);
            });
    };


    render() {

        return (
            <>
                {this.props.isFetching ? <Loader/> : null}
                <Users totalCount={this.props.totalCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}/>

            </>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//
//         followUser: (userId) => {
//             dispatch(followAC(userId));
//         },
//
//         unfollowUser: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage));
//         },
//
//         setTotalUsersCount: (totalUsers) => {
//             dispatch(setTotalUsersCountAC(totalUsers));
//         },
//
//         setFetchingStatus: (status) => {
//             dispatch(setFetchingStatusAC(status));
//         },
//     }
// };


//в коннект вместо диспатч передаются сразу АК и вызываются на през компоненте
const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setFetchingStatus,
})(UsersAPIComponent);

export default UsersContainer;