import React from 'react'
import s from './MyPost.module.css'
import Post from "./Post/Post";
import Input from "../../Common/Input/Input";
import {addPostActionCreator, onPostChangeActionCreator} from "../../redux/state";

const MyPost = (props) => {

    let postElement = props.posts.postData.map((el) => {
        return <Post name={el.name} text={el.text} likeCount={el.likeCount}/>
    });
    let newPostText = React.createRef();


    let addPost = () => {
        props.dispatch(addPostActionCreator())
    };

    let onPostChange = () => {
        let text = newPostText.current.value;
        props.dispatch(onPostChangeActionCreator(text))
    };

    return (
        <div className={s.myPost}>
            <Input f={addPost}
                   newTextRef={newPostText}
                   newText={props.posts.newPostText}
                   onChange={onPostChange}/>
            {postElement}
        </div>
    )
};

export default MyPost;
