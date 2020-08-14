import React from 'react'
import s from './Messages.module.css'

const Messages = (props) => {
    return (
        <div className={s.messageItem}>


            <div>

                {props.message}

            </div>

        </div>
    )
};

export default Messages;