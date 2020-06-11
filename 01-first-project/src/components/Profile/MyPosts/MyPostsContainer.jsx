import React, {createRef} from 'react'
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profileReducer";
import MyPosts from './MyPosts'
import StoreContext from "../../../storeContext";


const MyPostsContainer = (props) => {

    //получить стейт у строра из проф редусера
    let state = props.store.getState();


    //подключение к редакс стору
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    //подключение к редакс стору
    let onPostChange = (text) => {
        let action = updatePostActionCreator(text);
        props.store.dispatch(action);
    };

    return (
        <MyPosts addPost={addPost}
                 updateNewText={onPostChange}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>
    )

};

export default MyPostsContainer