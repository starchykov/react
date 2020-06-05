import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import DialogItem from "../../Dialogs/DialogItem/DialogItem";


const MyPosts = (props) => {

    let dialogPost = props.posts.map((p) => {
            return (
                <Post id={p.id} text={p.text} likesCount={p.likesCount}/>
            )
        }
    );

    return (
        <div className={s.postBlock}>
            My post

            <div className={s.myPost}>

                <div>
                    <textarea></textarea>
                </div>

                <div>
                    <button>Add post</button>
                </div>

            </div>

            <div className={s.posts}>

                {dialogPost}

            </div>
        </div>
    )

};

export default MyPosts
