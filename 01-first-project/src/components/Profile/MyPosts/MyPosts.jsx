import React, {createRef} from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    //мапит полученый из стора стейт и отображает
    let MyPost = props.posts.map((p) => <Post id={p.id} text={p.text} likesCount={p.likesCount}/>
    );

    //созадет переменную с ссылкой на элемент
    let newPostEl = React.createRef();

    //колл бек функция добавления поста
    let onAddPost = () => {
        props.addPost();
    };

    //колл бек функция изминения поста
    let onPostChange = () => {
        let text = newPostEl.current.value;
        props.updateNewText(text);

    };

    return (
        <div className={s.postBlock}>
            My post

            <div className={s.myPost}>

                <div>
                    <textarea ref={newPostEl}
                              onChange={onPostChange}
                              value={props.newPostText}/>
                </div>

                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>

            </div>

            <div className={s.posts}>

                {MyPost}

            </div>
        </div>
    )

};

export default MyPosts
