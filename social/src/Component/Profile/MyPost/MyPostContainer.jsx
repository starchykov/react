import React from 'react';
import {addPostActionCreator} from "../../../redux/profileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (values) => {
            dispatch(addPostActionCreator(values.postText))
        }
    }
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
