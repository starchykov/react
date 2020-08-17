import React from 'react'
import Post from "./Post/Post";
import {addPostActionCreator, onPostChangeActionCreator} from "../../redux/profileReducer";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {

    let newPostText = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    };

    let onPostChange = () => {
        let text = newPostText.current.value;
        props.dispatch(onPostChangeActionCreator(text))
    };

    return <MyPost onPostChange={onPostChange}
                   addPost={addPost}
                   newPostText={newPostText}
                   posts={props.posts}/>

};

export default MyPostContainer;
