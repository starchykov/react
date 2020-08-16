import React from 'react'
import s from './Post.module.css'

const Post = (props) => {

    let today = new Date();
    let time = today.getDate() + "." + today.getMonth() + "." + today.getFullYear();


    return (
        <div className={s.post}>


            <div className={s.postAvatar}>
                <img src="https://pbs.twimg.com/profile_images/1080468018147328000/qbyMyWCs_200x200.jpg"
                     alt="postAvatar"/>
            </div>


            <div className={s.postBody}>

                <div className={s.postUserName}>
                    {props.name}
                    <span className={s.date}> {time} </span>
                </div>

                <div className={s.postText}>
                    {props.text}
                </div>

                <div className={s.like}>
                    <svg viewBox="0 0 24 24"
                         className={props.likeCount > 0 ? s.red : s.grey}>
                        <g>
                            <path
                                d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z">

                            </path>
                        </g>
                    </svg>
                    <span className={s.likeCount}> {props.likeCount} </span>
                </div>

            </div>


        </div>
    )
};

export default Post;