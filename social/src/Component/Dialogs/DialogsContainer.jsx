import React from 'react'
import {addMessageActionCreator, onMessageChangeActionCreator} from "../redux/messageReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return <StoreContext.Consumer>

        {(store) => {
            let state = store.getState();
            let newMessageText = React.createRef();
            let addMessage = () => store.dispatch(addMessageActionCreator());
            let onMessageChange = () => {
                let text = newMessageText.current.value;
                store.dispatch(onMessageChangeActionCreator(text));
            };
            return <Dialogs addMessage={addMessage}
                            onMessageChange={onMessageChange}
                            newMessageText={newMessageText}
                            dialogs={state.messagesPage}
                            messages={state.messagesPage}/>
        }}

    </StoreContext.Consumer>

};

export default DialogsContainer;