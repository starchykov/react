import React from "react";
import s from './Like.module.css'

const Like = (props) => {
    return (
        <div className={s.Like}>
            <span>
                ❤
                {props.value}
             </span>

        </div>
    )
};

export default Like

