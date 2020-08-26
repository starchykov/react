import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, setFetching, setCurrentPage, setTotalUsersCount, setUsers, unfollow
} from "../redux/usersReducer";
import * as axios from "axios";

class UsersContainer extends React.Component {

    componentDidMount(): void {
        this.props.setFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.setFetching(false);
            });
    }

    onPageChange = (pageNumber) => {
        this.props.setFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setFetching(false);
            });
    };

    render() {

        return <Users onPageChange={this.onPageChange}
                      users={this.props.users}
                      followUser={this.props.follow}
                      unfollowUser={this.props.unfollow}
                      currentPage={this.props.currentPage}
                      totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      isFetching={this.props.isFetching}
        />
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

export default connect(mapStateToProps, {setUsers, follow, unfollow, setCurrentPage, setTotalUsersCount, setFetching})(UsersContainer);

