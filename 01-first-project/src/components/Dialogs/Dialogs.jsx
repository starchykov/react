import React, {createRef} from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

let Dialogs = (props) => {

    let dialogsElement = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>
    );

    let messagesElement = props.messagesPage.messages.map((m) => <Message message={m.text} id={m.id}
                                                                          likesCount={m.likesCount}/>
    );

    let newMessageText = props.newMessageText;

    let newMessageEl = createRef();

    let sendMessage = () => {
        props.sendMessage();
    };

    //таргет параметр для он ченджа "е"
    let onChangeMessage = (e) => {
        // let newMessage = newMessageEl.current.value;
        let newMessage = e.target.value;
        props.updateMessage(newMessage)
    };

    return (
        <div className={s.dialogs}>

            <div className={s.dialogItem}>
                Dialog

                {dialogsElement}

            </div>

            <div className={s.messages}>

                <div>
                    {messagesElement}
                </div>

                <div>
                    <textarea onChange={onChangeMessage} ref={newMessageEl} value={props.newMessageText}/>
                </div>

                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>

            </div>


        </div>
    )
};

export default Dialogs