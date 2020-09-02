import {ProfileApi} from "./api";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';


let initialState = {

    profileData: {
        "aboutMe": null,
        "contacts": {
            "facebook": null,
            "website": null,
            "vk": null,
            "twitter": null,
            "instagram": null,
            "youtube": null,
            "github": null,
            "mainLink": null
        },
        "lookingForAJob": false,
        "lookingForAJobDescription": null,
        "fullName": "Older",
        "userId": 8758,
        "photos": {
            "small": null,
            "large": 'https://pbs.twimg.com/profile_images/1080468018147328000/qbyMyWCs_200x200.jpg'
        }
    },

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

        case SET_USER_PROFILE:
            return {
                ...state,
                profileData: action.profileData
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

export let setUserProfile = (profileData) => {
    return {
        type: SET_USER_PROFILE,
        profileData: profileData
    }
};

export const setProfile = (id) => (dispatch) => {
    ProfileApi.getProfile(id).then(data => {
        dispatch(setUserProfile(data))
    })
};


export default profileReducer;