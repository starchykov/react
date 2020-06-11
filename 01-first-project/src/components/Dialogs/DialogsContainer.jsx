import React, {createRef} from 'react'
import {sendMessageActionCreator, updateMessageActionCreator} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";


let DialogsContainer = (props) => {

    //получить стейт у строра из месседж редусера
    let state = props.store.getState();

    //подключение к редакс стору
    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    };

    //подключение к редакс стору
    let onChangeMessage = (newMessage) => {
        let action = updateMessageActionCreator(newMessage);
        props.store.dispatch(action)
    };


    return (
        <Dialogs sendMessage={sendMessage}
                 updateMessage={onChangeMessage}
                 messagesPage={state.messagesPage}
                 newMessageText={state.messagesPage.newMessageText}/>
    )

};

export default DialogsContainer