import React from 'react'
import s from './Messages.module.css'

const Messages = (props) => {

    let today = new Date();
    let time = today.getDate() + "." + today.getMonth() + "." + today.getFullYear();

    return (
        <div className={s.messageItem}>

            <div>

                {props.message}

            </div>

            <span className={s.time}>{time}</span>

        </div>
    )
};

export default Messages;