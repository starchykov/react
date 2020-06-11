const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


//стейт возвращаемый по умолчанию при отсуцтвии изменений и наличия стейта
let initialState = {
    posts: [
        {id: '1', text: 'Hi? how are you', likesCount: '4'},
        {id: '2', text: 'It`s my first post', likesCount: '12'},
    ],
    newPostText: 'some text',
};

//реагирует на событие из колбека и принимает в себя новый стейт
const profileReducer = (state = initialState, action) => {

    //свитч если событие по типу "***"
    switch (action.type) {

        //тип события
        case UPDATE_NEW_POST_TEXT:

            //получает из колбека новый стейт и событие
            state.newPostText = action.newText;
            return state;

        //тип события
        case ADD_POST:
            let newPost = {
                id: '5',
                text: state.newPostText,
                likesCount: '0'
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        default:
            return state
    }

    // if (action.type === UPDATE_NEW_POST_TEXT) {
    //     state.newPostText = action.newText;
    // } else if (action.type === ADD_POST) {
    //     let newPost = {
    //         id: '5',
    //         text: state.newPostText,
    //         likesCount: '0'
    //     };
    //
    //     state.posts.push(newPost);
    //     state.newPostText = '';
    // }
    // return state;

};

//создает колбекс функцию со значением события
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};


//создает колбекс функцию со значением события
export const updatePostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};

export default profileReducer;