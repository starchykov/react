import React from 'react'
import {addMessageActionCreator, onMessageChangeActionCreator} from "../redux/messageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },

        onMessageChange: (e) => {
            let text = e.target.value;
            dispatch(onMessageChangeActionCreator(text))
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;