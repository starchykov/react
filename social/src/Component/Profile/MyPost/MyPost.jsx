import React from 'react'
import s from './MyPost.module.css'
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div className={s.myPost}>

            <div className={s.inputBlock}>

                <input type="text"/>

                <button>Send</button>

            </div>

            <Post name='Ivan Starchykov'
                  text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem deserunt dolorem doloribus suscipit? Alias aut, cum deserunt doloremque excepturi hic ipsa ipsum minus modi nihil, praesentium suscipit temporibus, voluptas.'}
                  likeCount={'12'}/>

            <Post name='Ivan Starchykov'
                  text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem deserunt dolorem doloribus suscipit? Alias aut, cum deserunt doloremque excepturi hic ipsa ipsum minus modi nihil, praesentium suscipit temporibus, voluptas.'}
                  likeCount={'12'}/>

            <Post name='Ivan Starchykov'
                  text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem deserunt dolorem doloribus suscipit? Alias aut, cum deserunt doloremque excepturi hic ipsa ipsum minus modi nihil, praesentium suscipit temporibus, voluptas.'}
                  likeCount={'12'}/>

            <Post name='Ivan Starchykov'
                  text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem deserunt dolorem doloribus suscipit? Alias aut, cum deserunt doloremque excepturi hic ipsa ipsum minus modi nihil, praesentium suscipit temporibus, voluptas.'}
                  likeCount={'12'}/>

            <Post name='Ivan Starchykov'
                  text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem deserunt dolorem doloribus suscipit? Alias aut, cum deserunt doloremque excepturi hic ipsa ipsum minus modi nihil, praesentium suscipit temporibus, voluptas.'}
                  likeCount={'12'}/>


        </div>
    )
};

export default MyPost;