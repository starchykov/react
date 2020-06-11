import s from "./Message.module.css";
import React from "react";


const Message = (props) => {
    return (
        <div className={s.message}>
            <p>{props.message}</p>
        </div>
    )
};


export default Message