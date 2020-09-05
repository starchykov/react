import React from 'react'
import s from './MyPost.module.css'
import Post from "./Post/Post";
import Input from "../../Common/Input/Input";
import {reduxForm} from "redux-form";

const MyPost = (props) => {

    let postElement = props.profilePage.postData.map((el) => <Post key={el.id}
                                                                   name={el.name}
                                                                   text={el.text}
                                                                   likeCount={el.likeCount}/>);

    let AddPostReduxForm = reduxForm({form: 'AddPostForm'})(Input);

    return (
        <div className={s.myPost}>
            <AddPostReduxForm name={'postText'}
                              onSubmit={props.onSubmit}/>
            {postElement}
        </div>
    )
};

export default MyPost;
