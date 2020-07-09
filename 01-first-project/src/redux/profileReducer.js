import {profileApi, usersApi} from "../api/api";

const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS';


//стейт возвращаемый по умолчанию при отсуцтвии изменений и наличия стейта
let initialState = {

    profile: null,

    posts: [
        {id: '1', text: 'Hi? how are you', likesCount: '4'},
        {id: '2', text: 'It`s my first post', likesCount: '12'},
    ],
    status: ''
};

//реагирует на событие из колбека и принимает в себя новый стейт
const profileReducer = (state = initialState, action) => {

    //свитч если событие по типу "***"
    switch (action.type) {

        // case UPDATE_NEW_POST_TEXT:
        //     //созадет копию стейта для фиксации изминений, получает из события елемент и присваивает
        //     return {
        //         ...state,
        //         newPostText: action.newText
        //     };

        case ADD_POST:
            let newPost = {
                id: '5',
                text: action.newPostText,
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

        case SET_STATUS:
            //созадет копию стейта для фиксации изминений, получает из события елемент и присваивает
            return {
                ...state,
                status: action.status
            };


        default:
            return state
    }

};

//создает колбекс функцию со значением события
export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
};

//создает колбекс функцию со значением события
// export const updatePostActionCreator = (text) => {
//     return {
//         type: UPDATE_NEW_POST_TEXT,
//         newText: text
//     }
// };

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
};

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status: status
    }
};

export const getUserProfile = (id) => (dispatch) => {
    usersApi.getProfile(id)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });

};

export const getStatus = (id) => (dispatch) => {

    profileApi.getStatus(id)
        .then(response => {
            dispatch(setStatus(response.data));
        });

};

export const updateStatus = (status) => (dispatch) => {

    profileApi.updateStatus(status)
        .then(response => {
            if (response.data === 0) {
                dispatch(setStatus(status));
            }
        });

};


export default profileReducer;