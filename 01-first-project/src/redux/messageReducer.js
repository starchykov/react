const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: '1', name: 'Nikolai'},
        {id: '2', name: 'Petr'},
        {id: '3', name: 'Alexandr'},
        {id: '4', name: 'Ana'},
        {id: '5', name: 'Sergei'},
        {id: '6', name: 'Julia'},
    ],

    messages: [
        {id: '1', text: 'Hi'},
        {id: '2', text: 'How are you'},
        {id: '3', text: 'I`m fine'},
        {id: '4', text: 'Ana'},
        {id: '5', text: 'Sergei'},
        {id: '6', text: 'Julia'},
    ],

    newMessageText: 'some text',
};

const messageReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_TEXT:
            //созадет копию стейта для фиксации изминений, получает из события елемент и присваивает
            return {
                ...state,
                newMessageText: action.newMessage
            };

        case SEND_MESSAGE:
            let newMessage = {
                id: '',
                text: state.newMessageText,
            };
            //созадет копию стейта для фиксации изминений, добавляет новый елемент
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            };


        default:
            return state
    }

    // if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    //     state.newMessageText = action.newMessage;
    // } else if (action.type === SEND_MESSAGE) {
    //     let newMessage = {
    //         id: '6',
    //         text: state.newMessageText,
    //     };
    //
    //     state.messages.push(newMessage);
    //     state.newMessageText = '';
    //
    // }
    //
    // return state;

};

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
};

export const updateMessageActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: text
    }
};

export default messageReducer