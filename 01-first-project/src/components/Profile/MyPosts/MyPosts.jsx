import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../validators/validators";
import {Textarea} from "../../Common/Forms/Forms";

const MyPosts = (props) => {

    //мапит полученый из стора стейт и отображает
    let MyPost = props.posts.map((p) => <Post id={p.id} text={p.text} likesCount={p.likesCount}/>
    );

    //созадет переменную с ссылкой на элемент
    // let newPostEl = React.createRef();

    //колл бек функция добавления поста
    // let onAddPost = () => {
    //     props.addPost();
    // };

    //колл бек функция изминения поста
    // let onPostChange = () => {
    //     let text = newPostEl.current.value;
    //     props.updateNewText(text);
    // };

    let addNewPost = (value) => {
        props.addPost(value.newPostText);
    };


    return (
        <div className={s.postBlock}>
            My post
            <AddPostFormRedux onSubmit={addNewPost}/>
            <div className={s.posts}> {MyPost} </div>
        </div>
    )

};
const maxLength10 = maxLengthCreator(10);

const addPostFom = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.myPost}>
                <div>
                    <Field component={Textarea}
                           name={'newPostText'}
                           placeholder='Enter you post'
                           validate={[required, maxLength10]}/>
                </div>

                <button>Add post</button>
            </div>
        </form>
    )
};

const AddPostFormRedux = reduxForm({form: 'newPostTextForm'})(addPostFom);

export default MyPosts
