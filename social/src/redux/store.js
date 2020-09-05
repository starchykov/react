// import profileReducer from "./profileReducer";
// import messageReducer from "./messageReducer";
// import dialogReducer from "./sideBarReducer";
//
// let store = {
//
//     state: {
//         profilePage: {
//             postData: [
//                 {
//                     name: 'Ivan Starchykov',
//                     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem deserunt dolorem doloribus suscipit? Alias aut, cum deserunt doloremque excepturi hic ipsa ipsum minus modi nihil, praesentium suscipit temporibus, voluptas.',
//                     likeCount: '12'
//                 },
//                 {
//                     name: 'Ivan Starchykov',
//                     text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem deserunt dolorem doloribus suscipit? Alias aut, cum deserunt doloremque excepturi hic ipsa ipsum minus modi nihil, praesentium suscipit temporibus, voluptas.',
//                     likeCount: '0'
//                 },
//             ],
//             newPostText: ''
//         },
//
//         messagesPage: {
//             dialogsData: [
//                 {
//                     name: 'Ivan',
//                     url: 'https://pbs.twimg.com/profile_images/1080468018147328000/qbyMyWCs_200x200.jpg',
//                     id: '1'
//                 },
//                 {
//                     name: 'Tatiana',
//                     url: 'https://instagram.fhrk5-2.fna.fbcdn.net/v/t51.2885-19/s150x150/32099584_924989417625715_5211635598980284416_n.jpg?_nc_ht=instagram.fhrk5-2.fna.fbcdn.net&_nc_ohc=tyzCC-FwDN4AX_z9gLd&oh=9a4b71aa1f7368ad931dd9ca5b36e654&oe=5F61E2E1',
//                     id: '2'
//                 },
//                 {
//                     name: 'Sergei',
//                     url: 'https://instagram.fhrk5-2.fna.fbcdn.net/v/t51.2885-19/s150x150/79792656_2963392450403139_2857523737249447936_n.jpg?_nc_ht=instagram.fhrk5-2.fna.fbcdn.net&_nc_ohc=FECMYXV4_ssAX_Xg8AN&oh=d9d9dcbdec4bd660bea93b4ebd45b6fd&oe=5F6003CD',
//                     id: '3'
//                 },
//                 {
//                     name: 'Julia',
//                     url: 'https://instagram.fhrk5-2.fna.fbcdn.net/v/t51.2885-19/s150x150/97112109_167672791320723_663836896958349312_n.jpg?_nc_ht=instagram.fhrk5-2.fna.fbcdn.net&_nc_ohc=IBQM30d1L30AX_um6Dx&oh=19a0cbd180556929b848694d835cef61&oe=5F603EC1',
//                     id: '4'
//                 },
//                 {
//                     name: 'Petr',
//                     url: 'https://instagram.fhrk5-2.fna.fbcdn.net/v/t51.2885-19/s150x150/109815654_298150324668532_3293531322054430467_n.jpg?_nc_ht=instagram.fhrk5-2.fna.fbcdn.net&_nc_ohc=E6YgEljE9NcAX9cvAcl&oh=5773bcaa4c3a388c900e43c97dca083a&oe=5F6368AC',
//                     id: '5'
//                 }
//             ],
//             messagesData: [
//                 {id: '0', text: 'Hello'},
//                 {id: '1', text: 'Haw are you'},
//                 {id: '2', text: 'I`m fine'},
//                 {id: '3', text: 'What about you'},
//                 {id: '4', text: 'I`m fine to, thanks '},
//                 {id: '4', text: 'I`m fine to, thanks '},
//                 {id: '4', text: 'I`m fine to, thanks '},
//             ],
//             newMessageText: ''
//         }
//     },
//
//     getState() {
//         return this.state
//     },
//
//     callSubscriber() {},
//
//     subscribe(observer) {
//         this.callSubscriber = observer
//     },
//
//     dispatch(action) {
//         this.state.profilePage = profileReducer(this.state.profilePage, action);
//         this.state.messagesPage = messageReducer(this.state.messagesPage, action);
//         this.callSubscriber(this.state);
//     }
// };
//
//
// export default store