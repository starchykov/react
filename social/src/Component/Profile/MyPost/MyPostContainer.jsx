import React from 'react'
import {addPostActionCreator, onPostChangeActionCreator} from "../../redux/profileReducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },

        onPostChange: (e) => {
            let text = e.target.value;
            dispatch(onPostChangeActionCreator(text))
        }
    }
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
