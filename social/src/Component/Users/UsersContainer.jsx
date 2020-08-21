import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        followUser: (id) => {
            dispatch(followActionCreator(id))
        },
        unfollowUser: (id) => {
            dispatch(unfollowActionCreator(id))
        }
    }
};


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;