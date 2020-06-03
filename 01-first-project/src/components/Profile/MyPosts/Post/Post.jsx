import React from "react";
import s from "./Post.module.css";



const Post = (props) => {

    return (
        <div className={s.Post}>
            <img
                src="https://avatars2.githubusercontent.com/u/48174604?s=460&u=8d945fe7286284167189cb443a159caff9b44c4d&v=4"
                alt=""/>
           {props.message}

            <span>Like</span>
        </div>
    )
};

export default Post

