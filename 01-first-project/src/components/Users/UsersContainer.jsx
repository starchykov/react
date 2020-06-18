import React from 'react'
import {connect} from "react-redux/es/alternate-renderers";
import {
    follow, getUsers,
    setCurrentPage,
    setProgressStatus,
    unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import Loader from "../Common/Loader/Loader";
import {widthAuthRedirect} from "../../hoc/widthAuthtRedirect";
import Dialogs from "../Dialogs/Dialogs";


class UsersContainer extends React.Component {

    componentDidMount(): void {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (currentPage) => {
        this.props.getUsers(currentPage, this.props.pageSize);
        this.props.setCurrentPage(currentPage)
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
                       unfollow={this.props.unfollow}
                       inProgress={this.props.inProgress}
                       setProgressStatus={this.props.setProgressStatus}/>

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
        isFetching: state.usersPage.isFetching,
        inProgress: state.usersPage.inProgress
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

//HOC with redirect option on autch check status
let widthRedirect = widthAuthRedirect(UsersContainer);

//в коннект вместо диспатч передаются сразу АК и вызываются на през компоненте
export default connect(mapStateToProps, {follow, unfollow, setCurrentPage, setProgressStatus, getUsers})(widthRedirect);