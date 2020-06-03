import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = () => {

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

                <Post message={'Hi? how are you'} value={4}/>
                <Post message={'It`s my first post'} value={12}/>

            </div>
        </div>
    )

};

export default MyPosts