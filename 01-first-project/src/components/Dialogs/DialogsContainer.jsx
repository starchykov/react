import React, {createRef} from 'react'
import {sendMessageActionCreator, updateMessageActionCreator} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux/es/alternate-renderers";

// let DialogsContainer = (props) => {
//
//     //получить стейт у строра из месседж редусера
//     let state = props.store.getState();
//
//     //подключение к редакс стору
//     let sendMessage = () => {
//         props.store.dispatch(sendMessageActionCreator())
//     };
//
//     //подключение к редакс стору
//     let onChangeMessage = (newMessage) => {
//         let action = updateMessageActionCreator(newMessage);
//         props.store.dispatch(action)
//     };
//
//
//     return (
//         <Dialogs sendMessage={sendMessage}
//                  updateMessage={onChangeMessage}
//                  messagesPage={state.messagesPage}
//                  newMessageText={state.messagesPage.newMessageText}/>
//     )
//
// };

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        newMessageText: state.messagesPage.newMessageText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        updateMessage: (newMessage) => {
            dispatch(updateMessageActionCreator(newMessage))
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer