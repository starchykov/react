import React from 'react'
import {addMessageActionCreator, onMessageChangeActionCreator} from "../redux/messageReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let newMessageText = React.createRef();

    let addMessage = () => props.dispatch(addMessageActionCreator());

    let onMessageChange = () => {
        let text = newMessageText.current.value;
        props.dispatch(onMessageChangeActionCreator(text));
    };

    return <Dialogs addMessage={addMessage}
                    onMessageChange={onMessageChange}
                    newMessageText={newMessageText}
                    dialogs={props.dialogs}
                    messages={props.messages}/>

};

export default DialogsContainer;