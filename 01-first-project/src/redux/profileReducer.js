import {usersApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-PROFILE';


//стейт возвращаемый по умолчанию при отсуцтвии изменений и наличия стейта
let initialState = {

    profile: null,

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

        case UPDATE_NEW_POST_TEXT:
            //созадет копию стейта для фиксации изминений, получает из события елемент и присваивает
            return {
                ...state,
                newPostText: action.newText
            };

        case ADD_POST:
            let newPost = {
                id: '5',
                text: state.newPostText,
                likesCount: '0'
            };
            //созадет копию стейта для фиксации изминений, добавляет новый елемент
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        case SET_USER_PROFILE:
            //созадет копию стейта для фиксации изминений, получает из события елемент и присваивает
            return {
                ...state,
                profile: action.profile
            };


        default:
            return state
    }

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

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
};

export const getUserProfile = (id) => (dispatch) => {

    usersApi.getProfile(id)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });

};

export default profileReducer;