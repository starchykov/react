import React from 'react'
import s from './MyPost.module.css'
import Post from "./Post/Post";
import Input from "../../Common/Input/Input";

const MyPost = (props) => {

    let postElement = props.profilePage.postData.map((el) => <Post key={el.id}
                                                                   name={el.name}
                                                                   text={el.text}
                                                                   likeCount={el.likeCount}/>);

    return (
        <div className={s.myPost}>
            <Input name={'postText'}
                   onChange={props.onSubmit}/>
            {postElement}
        </div>
    )
};

export default MyPost;
