import React from 'react'
import s from './Dialogs.module.css'
import DialogItems from "./DialogItems/DialogItems";
import Messages from "./Messages/Messages";
import Input from "../Common/Input/Input";
import {reduxForm} from "redux-form";

const Dialogs = (props) => {

    let dialogElement = props.messagesPage.dialogsData.map((el) => <DialogItems key={el.id}
                                                                                name={el.name}
                                                                                url={el.url}
                                                                                id={el.id}/>);

    let messagesElement = props.messagesPage.messagesData.map((el) => <Messages key={el.id}
                                                                                message={el.text}/>);

    let AddMessage = (values) => {
        props.addMessageActionCreator(values.messageText);
    };

    let AddMessageFormRedux = reduxForm({form: 'MessageForm'})(Input);

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogElement}
            </div>


            <div className={s.messages} id={'messages'}>
                {messagesElement}
            </div>


            <div className={s.inputBlock}>
                <AddMessageFormRedux name={'messageText'}
                                     onSubmit={AddMessage}/>
            </div>

        </div>
    )
};

export default Dialogs;