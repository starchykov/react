import React, {createRef} from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/Forms/Forms";
import {maxLengthCreator, required} from "../../validators/validators";

let Dialogs = (props) => {
    let dialogsElement = props.messagesPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>
    );
    let messagesElement = props.messagesPage.messages.map((m) => <Message key={m.id} message={m.text} id={m.id}
                                                                          likesCount={m.likesCount}/>
    );
    // let newMessageText = props.newMessageText;
    // let newMessageEl = createRef();
    // let sendMessage = () => {
    //     props.sendMessage();
    // };
    //таргет параметр для он ченджа "е"
    // let onChangeMessage = (e) => {
    //     // let newMessage = newMessageEl.current.value;
    //     let newMessage = e.target.value;
    //     props.updateMessage(newMessage)
    // };

    let addNewMessage = (value) => {
        props.sendMessage(value.newMessageBody)
    };

    return (
        <div className={s.dialogs}>

            <div className={s.dialogItem}>
                Dialog
                {dialogsElement}
            </div>

            <div className={s.messages}>

                <div> {messagesElement} </div>

                <div><AddMessageFormRedux onSubmit={addNewMessage}/></div>

            </div>


        </div>
    )
};

const maxLength20 = maxLengthCreator(20);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name='newMessageBody'
                       placeholder='enter you message'
                       validate={[required, maxLength20]}/>
                {/*<textarea onChange={onChangeMessage} ref={newMessageEl} value={newMessageText}/>*/}
            </div>

            <button>Send</button>

        </form>
    )
};


const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs