// import profileReducer from "./profileReducer";
// import messageReducer from "./messageReducer";
// import sideBarReducer from "./sideBarReducer";
//
// let store = {
//
//     _state: {
//
//         profilePage: {
//             posts: [
//                 {id: '1', text: 'Hi? how are you', likesCount: '4'},
//                 {id: '2', text: 'It`s my first post', likesCount: '12'},
//             ],
//             newPostText: 'some text',
//         },
//
//         messagesPage: {
//             dialogs: [
//                 {id: '1', name: 'Nikolai'},
//                 {id: '2', name: 'Petr'},
//                 {id: '3', name: 'Alexandr'},
//                 {id: '4', name: 'Ana'},
//                 {id: '5', name: 'Sergei'},
//                 {id: '6', name: 'Julia'},
//             ],
//
//             messages: [
//                 {id: '1', text: 'Hi'},
//                 {id: '2', text: 'How are you'},
//                 {id: '3', text: 'I`m fine'},
//                 {id: '4', text: 'Ana'},
//                 {id: '5', text: 'Sergei'},
//                 {id: '6', text: 'Julia'},
//             ],
//
//             newMessageText: 'some text',
//         },
//
//         sideBar: {
//             peoples: [
//                 {id: '1', name: 'Nikolai'},
//                 {id: '2', name: 'Petr'},
//                 {id: '3', name: 'Ana'},
//                 {id: '4', name: 'Sergei'},
//                 {id: '5', name: 'Julia'},
//             ]
//         },
//
//     },
//
//     getState() {
//         return this._state;
//     },
//
//     subscribe(observer) {
//         this._subscribe = observer;
//     },
//
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.messagesPage = messageReducer(this._state.messagesPage, action);
//         this._state.sideBar = sideBarReducer(this._state.sideBar, action);
//
//
//         this._subscribe(this._state);
//
//         // if (action.type === ADD_POST) {
//         //     let newPost = {
//         //         id: '5',
//         //         text: this._state.profilePage.newPostText,
//         //         likesCount: '0'
//         //     };
//         //
//         //     this._state.profilePage.posts.push(newPost);
//         //     this._state.profilePage.newPostText = '';
//         //     this._subscribe(this._state);
//         // }
//         //
//         // else if (action.type === UPDATE_NEW_POST_TEXT) {
//         //     this._state.profilePage.newPostText = action.newText;
//         //     this._subscribe(this._state);
//         // }
//         //
//         // else if (action.type === SEND_MESSAGE) {
//         //     let newMessage = {
//         //         id: '6',
//         //         text: this._state.messagesPage.newMessageText,
//         //         likesCount: '0'
//         //     };
//         //     this._state.messagesPage.messages.push(newMessage);
//         //     this._state.messagesPage.newMessageText = '';
//         //     this._subscribe(this._state);
//         // }
//         //
//         // else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
//         //     this._state.messagesPage.newMessageText = action.newMessage;
//         //     this._subscribe(this._state);
//         // }
//     }
//
// };
//
//
//
//
//
// export default store;
// window.store = store;
//
//
//
//
//
