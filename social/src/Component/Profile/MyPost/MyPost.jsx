import React from 'react'
import s from './MyPost.module.css'
import Post from "./Post/Post";
import Input from "../../Common/Input/Input";
import {addPostActionCreator, onPostChangeActionCreator} from "../../redux/profileReducer";

const MyPost = (props) => {

    debugger;

    let postElement = props.posts.postData.map((el) => {
        return <Post name={el.name} text={el.text} likeCount={el.likeCount}/>
    });

    return (
        <div className={s.myPost}>
            <Input f={props.addPost}
                   newTextRef={props.newPostText}
                   newText={props.posts.newPostText}
                   onChange={props.onPostChange}/>
            {postElement}
        </div>
    )
};

export default MyPost;
