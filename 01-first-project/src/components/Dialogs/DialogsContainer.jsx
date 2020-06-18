import React from 'react'
import {sendMessageActionCreator, updateMessageActionCreator} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux/es/alternate-renderers";
import {widthAuthRedirect} from "../../hoc/widthAuthtRedirect";

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
        newMessageText: state.messagesPage.newMessageText,
        isAuth: state.auth.isAuth
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

let AuthRedirectComponent = widthAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


export default DialogsContainer