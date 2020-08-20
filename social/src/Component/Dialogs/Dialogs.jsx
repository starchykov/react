import React from 'react'
import s from './Dialogs.module.css'
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";
import Input from "../Common/Input/Input";

const Dialogs = (props) => {

    let dialogElement = props.messagesPage.dialogsData.map((el) => <DialogItems key={el.id}
                                                                                name={el.name}
                                                                                url={el.url}
                                                                                id={el.id}/>);

    let messagesElement = props.messagesPage.messagesData.map((el) => <Messages key={el.id}
                                                                                message={el.text}/>);

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogElement}
            </div>


            <div className={s.messages} id={'messages'}>
                {messagesElement}
            </div>


            <div className={s.inputBlock}>
                <Input f={props.addMessage}
                       newTextRef={props.newMessageText}
                       newText={props.messagesPage.newMessageText}
                       onChange={props.onMessageChange}/>
            </div>

        </div>
    )
};

export default Dialogs;