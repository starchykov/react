const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';


let initialState = {
    postData: [
        {
            id: '0',
            name: 'Ivan Starchykov',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem deserunt dolorem doloribus suscipit? Alias aut, cum deserunt doloremque excepturi hic ipsa ipsum minus modi nihil, praesentium suscipit temporibus, voluptas.',
            likeCount: '12'
        },
        {
            id: '1',
            name: 'Ivan Starchykov',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem deserunt dolorem doloribus suscipit? Alias aut, cum deserunt doloremque excepturi hic ipsa ipsum minus modi nihil, praesentium suscipit temporibus, voluptas.',
            likeCount: '0'
        },
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: state.postData.length,
                name: 'Ivan Starchykov',
                text: state.newPostText,
                likeCount: '6'
            };

            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };


        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };


        default:
            return state
    }
};


export let addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export let onPostChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};

export default profileReducer;