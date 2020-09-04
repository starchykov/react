import React from 'react'
import {addMessageActionCreator, onMessageChangeActionCreator} from "../redux/messageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";


let mapStateToProps = (state) => ({
    messagesPage: state.messagesPage,
});

// let mapDispatchToProps = (dispatch) => {
//     return {
//         onSubmit: (values) => {
//             dispatch(addMessageActionCreator(values.messageText))
//         }
//     }
// };

export default compose(connect(mapStateToProps, {addMessageActionCreator}), withAuthRedirect)(Dialogs);