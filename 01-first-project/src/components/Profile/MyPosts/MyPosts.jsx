import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = () => {

    return (
        <div>
            My post

            <div>
                <textarea name="" id="" cols="30" rows="2"></textarea>
                <button>Add post</button>
            </div>

            <div className={s.posts}>
                <Post message={'Hi? how are you'} value={4}/>
                <Post message={'It`s my first post'} value={12}/>


            </div>
        </div>
    )

};

export default MyPosts