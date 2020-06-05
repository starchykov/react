import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


let Dialogs = (props) => {


    // let dialogsElement = props.dialogs.map((d) => {
    //         return (
    //             <DialogItem name={d.name} id={d.id}/>
    //         )
    //     }
    // );

    let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>
    );


    let messagesElement = props.messages.map((m) => <Message message={m.text}/>
    );


    return (
        <div className={s.dialogs}>

            <div className={s.dialogItem}>
                Dialog

                {dialogsElement}

            </div>

            <div className={s.messages}>

                {messagesElement}

            </div>
        </div>
    )
};

export default Dialogs